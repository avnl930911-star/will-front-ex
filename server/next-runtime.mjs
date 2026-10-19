import { readFile } from 'node:fs/promises';
import serverless from 'serverless-http';
import express from 'express';
import { createApplication, loadServerConfig } from './index.mjs';
import { isAllowedVideoUrl } from './catalog.mjs';
import { requireAdmin, requireAdminOrExpert, requireCsrf } from './auth.mjs';
import { validateState } from './state-store.mjs';
import { deploymentGuard } from './deployment-policy.mjs';

export const MAX_SERVERLESS_BODY_BYTES = 4 * 1024 * 1024;
const VERCEL_TEMP_ROOT = '/tmp/willclub-nextjs';
const storageMessage = 'Vercel 관리자 변경 저장에는 DATABASE_URL 기반 영구 저장소가 필요합니다.';
const videoStorageMessage = 'Vercel 영상 업로드에는 DATABASE_URL, VIDEO_METADATA_MYSQL=true 및 FTP 저장소가 필요합니다.';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export class PersistentStorageRequiredError extends Error {
  constructor(message = storageMessage) {
    super(message);
    this.name = 'PersistentStorageRequiredError';
    this.status = 503;
    this.code = 'PERSISTENT_STORAGE_REQUIRED';
  }
}

/** Vercel의 읽기 전용 배포 파일과 warm instance 메모리를 영구 저장소로 오인하지 않는 상태 저장소. */
export class ReadOnlySeedStore {
  constructor(state) {
    this.current = { revision: 0, state: clone(state) };
  }

  async snapshot() {
    return clone(this.current);
  }

  async replace() {
    throw new PersistentStorageRequiredError();
  }

  async close() {}
}

export async function createReadOnlySeedStore({ seedFile, validator = validateState }) {
  const parsed = JSON.parse(await readFile(seedFile, 'utf8'));
  return new ReadOnlySeedStore(validator(parsed));
}

function platformOrigin(vercelUrl) {
  if (typeof vercelUrl !== 'string' || !/^[A-Za-z0-9.-]+$/.test(vercelUrl) ||
      !/(^|\.)vercel\.app$/i.test(vercelUrl)) {
    throw new Error('VERCEL_URL is not a Vercel deployment hostname');
  }
  return `https://${vercelUrl}`;
}

/**
 * Vercel에서는 배포 파일 아래의 JSON을 절대 쓰지 않는다. SITE_ORIGIN은 명시값을 우선하며,
 * 없을 때 Vercel이 제공하는 배포 호스트만 신뢰한다. 요청 Host 헤더는 사용하지 않는다.
 */
export function loadNextRuntimeConfig(env = process.env, cwd = process.cwd()) {
  const isVercel = env.VERCEL === '1';
  if (!isVercel) return { ...loadServerConfig(env, cwd), isVercel: false };

  const siteOrigin = env.SITE_ORIGIN || platformOrigin(env.VERCEL_URL);
  const config = loadServerConfig({
    ...env,
    SITE_ORIGIN: siteOrigin,
    DATA_DIR: VERCEL_TEMP_ROOT,
    STATE_FILE: `${VERCEL_TEMP_ROOT}/state.json`,
    LOCAL_VIDEO_DIRECTORY: `${VERCEL_TEMP_ROOT}/media`,
    VIDEO_METADATA_FILE: `${VERCEL_TEMP_ROOT}/video-metadata.json`,
    UPLOAD_TEMP_DIR: `${VERCEL_TEMP_ROOT}/tmp`,
  }, cwd);
  return { ...config, isVercel: true };
}

function storageRequired(res, message) {
  return res.status(503).json({ error: { code: 'PERSISTENT_STORAGE_REQUIRED', message } });
}

function csrfThen(req, res, next, config) {
  return requireCsrf(req, res, next, { siteOrigin: config.auth.siteOrigin });
}

/** Authenticate and validate CSRF exactly as the target API would before reporting unavailable persistence. */
function vercelWriteGuard(config) {
  const options = { authConfig: config.auth, adminApiToken: config.adminApiToken };
  const stateIsReadOnly = !config.databaseUrl;
  const videoUploadUnavailable = !(config.databaseUrl && config.videoMetadataMySql && config.ftp);

  return (req, res, next) => {
    if (!config.isVercel) return next();
    const pathname = new URL(req.url, 'http://willclub.local').pathname;

    if (stateIsReadOnly && req.method === 'PUT' && pathname === '/api/admin/state') {
      return requireAdmin(req, res, () => csrfThen(req, res, () => storageRequired(res, storageMessage), config), options);
    }
    if (stateIsReadOnly && req.method === 'PUT' && pathname === '/api/expert/state') {
      return requireAdminOrExpert(req, res, () => {
        const user = req.willclubAuth?.user;
        if (user?.role !== 'expert' || !user.expert) {
          return res.status(403).json({ error: { code: 'EXPERT_REQUIRED', message: '담당 전문가 계정이 필요합니다.' } });
        }
        return csrfThen(req, res, () => storageRequired(res, storageMessage), config);
      }, options);
    }
    if (videoUploadUnavailable && req.method === 'POST' && pathname === '/api/admin/videos') {
      return requireAdmin(req, res, () => csrfThen(req, res, () => storageRequired(res, videoStorageMessage), config), options);
    }
    return next();
  };
}

function guardedApplication(app, config) {
  const bridge = express();
  bridge.disable('x-powered-by');
  bridge.use(deploymentGuard(config.deploymentEnvironment));
  bridge.use(vercelWriteGuard(config));
  bridge.use(app);
  return bridge;
}

function response(status, code, message) {
  return new Response(JSON.stringify({ error: { code, message } }), {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

function byteLengthHeader(request) {
  const raw = request.headers.get('content-length');
  if (!raw || !/^\d+$/.test(raw)) return null;
  const value = Number(raw);
  return Number.isSafeInteger(value) ? value : null;
}

/** Convert a Web Request to API Gateway v1 form, retaining encoded path and repeated query values. */
export async function webRequestToAwsEvent(request) {
  const url = new URL(request.url);
  const declaredLength = byteLengthHeader(request);
  if (declaredLength !== null && declaredLength > MAX_SERVERLESS_BODY_BYTES) {
    throw Object.assign(new Error('request too large'), { code: 'REQUEST_TOO_LARGE' });
  }
  const body = Buffer.from(await request.arrayBuffer());
  if (body.byteLength > MAX_SERVERLESS_BODY_BYTES) {
    throw Object.assign(new Error('request too large'), { code: 'REQUEST_TOO_LARGE' });
  }

  const headers = {};
  request.headers.forEach((value, key) => { headers[key] = value; });
  const multiValueQueryStringParameters = {};
  for (const [key, value] of url.searchParams) {
    (multiValueQueryStringParameters[key] ||= []).push(value);
  }
  const queryStringParameters = Object.fromEntries(
    Object.entries(multiValueQueryStringParameters).map(([key, values]) => [key, values.at(-1)]),
  );
  // x-forwarded-for is client-controlled unless the platform proxy trust chain is configured explicitly.
  const sourceIp = '127.0.0.1';

  return {
    resource: url.pathname,
    path: url.pathname,
    httpMethod: request.method,
    headers,
    multiValueHeaders: {},
    queryStringParameters: Object.keys(queryStringParameters).length ? queryStringParameters : null,
    multiValueQueryStringParameters: Object.keys(multiValueQueryStringParameters).length ? multiValueQueryStringParameters : null,
    requestContext: {
      accountId: 'next-runtime', apiId: 'next-runtime', resourceId: 'next-runtime', stage: '$default',
      requestId: headers['x-request-id'] || 'next-runtime', resourcePath: url.pathname,
      httpMethod: request.method, identity: { sourceIp },
    },
    body: body.toString('base64'),
    isBase64Encoded: true,
  };
}

/** Convert serverless-http's AWS v1 result to a Web Response without collapsing Set-Cookie. */
export function awsResultToWebResponse(result, requestMethod = 'GET', { healthStorage } = {}) {
  let binary = Buffer.from(result.body || '', result.isBase64Encoded ? 'base64' : 'utf8');
  if (binary.byteLength > MAX_SERVERLESS_BODY_BYTES) {
    return response(503, 'RESPONSE_TOO_LARGE', '서버리스 응답은 4MB까지 제공할 수 있습니다.');
  }
  const headers = new Headers();
  const multiple = result.multiValueHeaders || {};
  for (const [name, values] of Object.entries(multiple)) {
    for (const value of Array.isArray(values) ? values : [values]) headers.append(name, String(value));
  }
  for (const [name, value] of Object.entries(result.headers || {})) {
    if (!Object.prototype.hasOwnProperty.call(multiple, name)) headers.set(name, String(value));
  }
  if (healthStorage && result.statusCode === 200 && /application\/json/i.test(headers.get('content-type') || '')) {
    try {
      binary = Buffer.from(JSON.stringify({ ...JSON.parse(binary.toString('utf8')), storage: healthStorage }));
      headers.set('content-length', String(binary.byteLength));
    } catch {
      // The original health response remains available if a future implementation is not JSON.
    }
  }
  const status = result.statusCode || 500;
  const noBody = requestMethod === 'HEAD' || [204, 205, 304].includes(status);
  return new Response(noBody ? null : binary, { status, headers });
}

export async function createNextRuntime({
  env = process.env,
  cwd = process.cwd(),
  config: suppliedConfig,
  stateStore,
  videoRepository,
  videoStorage,
  createApplicationFn = createApplication,
} = {}) {
  const config = suppliedConfig || loadNextRuntimeConfig(env, cwd);
  const validator = state => validateState(state, {
    videoUrlValidator: url => isAllowedVideoUrl(url, { siteOrigin: config.siteOrigin }),
  });
  const selectedStore = stateStore || (config.isVercel && !config.databaseUrl
    ? await createReadOnlySeedStore({ seedFile: config.seedFile, validator })
    : undefined);
  const service = await createApplicationFn({ config, stateStore: selectedStore, videoRepository, videoStorage });
  // Decode every response from the AWS-shaped adapter as bytes. This avoids MIME detection
  // differences corrupting mp4/webm Range payloads; JSON is decoded as UTF-8 afterward.
  const awsHandler = serverless(guardedApplication(service.app, config), { binary: ['*/*'] });

  return {
    config,
    service,
    async handle(request) {
      let event;
      try {
        event = await webRequestToAwsEvent(request);
      } catch (error) {
        if (error?.code === 'REQUEST_TOO_LARGE') {
          return response(413, 'REQUEST_TOO_LARGE', '서버리스 요청은 4MB까지 허용됩니다.');
        }
        return response(400, 'INVALID_REQUEST', '요청을 읽지 못했습니다.');
      }
      try {
        const result = await awsHandler(event, {});
        const healthStorage = config.isVercel && !config.databaseUrl && event.path === '/health' ? 'read-only' : undefined;
        return awsResultToWebResponse(result, request.method, { healthStorage });
      } catch {
        return response(500, 'INTERNAL_ERROR', '요청을 처리하지 못했습니다.');
      }
    },
    async close() {
      await service.close?.();
    },
  };
}

let defaultRuntime;

/** Next App Router route handlers use this singleton; custom Node deployment continues to call server/index.mjs directly. */
export async function handleNextRequest(request) {
  try {
    defaultRuntime ||= createNextRuntime();
    return await (await defaultRuntime).handle(request);
  } catch {
    defaultRuntime = undefined;
    return response(503, 'RUNTIME_NOT_CONFIGURED', '서버리스 실행 환경 설정을 확인해 주세요.');
  }
}
