import {buildPublicMenu} from './public-menu.mjs';
import {mergeExpertRecords} from './expert-state.mjs';
import { deploymentGuard } from './deployment-policy.mjs';
import { deploymentTarget } from '../lib/deployment.mjs';
import 'dotenv/config';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { createVideoRouter } from './video-kit/router.js';
import { FtpStorage } from './video-kit/storage/ftp-storage.js';
import { LocalStorage } from './video-kit/storage/local-storage.js';
import { JsonVideoRepository } from './video-kit/repositories/json-repository.js';
import { MysqlVideoRepository } from './video-kit/repositories/mysql-repository.js';
import {
  canPlayVideo, clearSession, loadAuthConfig, logout, oauthCallback, oauthLogin, requireAdmin, requireAdminOrExpert,
  readSession, requireCsrf, sessionResponse,
} from './auth.mjs';
import {
  buildCatalog, findPlaybackVideo, isAllowedVideoUrl, isPublicVideo, referencesLocalMedia, restrictStateForExpert,
} from './catalog.mjs';
import { createStateStore, StateValidationError, validateState } from './state-store.mjs';
import { listVideoCoupons, quoteVideoCoupon } from './video-coupons.mjs';

function integer(value, fallback, label, { min = 1, max = Number.MAX_SAFE_INTEGER } = {}) {
  const parsed = value === undefined || value === '' ? fallback : Number(value);
  if (!Number.isSafeInteger(parsed) || parsed < min || parsed > max) throw new Error(`${label}은 ${min}~${max} 정수여야 합니다.`);
  return parsed;
}

function origin(value, label) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash ||
      (url.pathname !== '/' && url.pathname !== '')) {
    throw new Error(`${label}은 경로·인증정보·쿼리 없는 정확한 origin이어야 합니다.`);
  }
  return url.origin;
}

function absoluteBase(value, label) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    throw new Error(`${label}은 인증정보·쿼리 없는 HTTP(S) 주소여야 합니다.`);
  }
  url.pathname = `${url.pathname.replace(/\/+$/, '')}/`;
  return url.href;
}

function optionalAdminToken(value) {
  if (!value) return '';
  if (value.length < 32) throw new Error('ADMIN_API_TOKEN은 무작위 32자 이상이어야 합니다.');
  return value;
}

function ftpConfigured(env) {
  return ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_REMOTE_DIR', 'VIDEO_PUBLIC_BASE_URL'].some(name => Boolean(env[name]));
}

function ftpOptions(env) {
  for (const name of ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_REMOTE_DIR', 'VIDEO_PUBLIC_BASE_URL']) {
    if (!env[name]) throw new Error(`FTP 사용 시 ${name}을 모두 설정해야 합니다.`);
  }
  const secureRaw = env.FTP_SECURE ?? 'true';
  if (!['true', 'false', 'implicit'].includes(secureRaw)) throw new Error('FTP_SECURE는 true, false, implicit 중 하나여야 합니다.');
  if (env.FTP_REMOTE_DIR.split('/').some(part => part === '.' || part === '..') || /[\r\n\0\\]/.test(env.FTP_REMOTE_DIR)) {
    throw new Error('FTP_REMOTE_DIR이 올바르지 않습니다.');
  }
  const publicBaseUrl = absoluteBase(env.VIDEO_PUBLIC_BASE_URL, 'VIDEO_PUBLIC_BASE_URL');
  if (!publicBaseUrl.startsWith('https://')) throw new Error('FTP VIDEO_PUBLIC_BASE_URL은 HTTPS여야 합니다.');
  return {
    host: env.FTP_HOST,
    port: integer(env.FTP_PORT, secureRaw === 'implicit' ? 990 : 21, 'FTP_PORT', { max: 65535 }),
    user: env.FTP_USER,
    password: env.FTP_PASSWORD,
    remoteDir: env.FTP_REMOTE_DIR,
    publicBaseUrl,
    secure: secureRaw === 'implicit' ? 'implicit' : secureRaw === 'true',
    timeoutMs: integer(env.FTP_TIMEOUT_SECONDS, 120, 'FTP_TIMEOUT_SECONDS', { max: 3600 }) * 1000,
  };
}

export function loadServerConfig(env = process.env, cwd = process.cwd()) {
  const port = integer(env.PORT, 3000, 'PORT', { max: 65535 });
  const development = env.NODE_ENV !== 'production';
  // 로컬 개발은 명시적으로 localhost만 기본값으로 둔다. 운영에서는 origin 설정을 빠뜨리면 시작하지 않는다.
  const siteOrigin = env.SITE_ORIGIN ? origin(env.SITE_ORIGIN, 'SITE_ORIGIN') :
    (development ? `http://localhost:${port}` : (() => { throw new Error('운영에서는 SITE_ORIGIN 설정이 필요합니다.'); })());
  const localVideoBaseUrl = env.LOCAL_VIDEO_BASE_URL
    ? absoluteBase(env.LOCAL_VIDEO_BASE_URL, 'LOCAL_VIDEO_BASE_URL')
    : new URL('/media/', siteOrigin).href;
  const root = path.resolve(cwd);
  const dataDirectory = path.resolve(root, env.DATA_DIR || 'data');
  const config = {
    development,
    host: env.HOST || '0.0.0.0',
    port,
    siteOrigin,
    localVideoBaseUrl,
    adminApiToken: optionalAdminToken(env.ADMIN_API_TOKEN),
    databaseUrl: env.DATABASE_URL || '',
    stateFile: path.resolve(root, env.STATE_FILE || 'data/runtime/state.json'),
    seedFile: path.resolve(root, env.SEED_FILE || 'data/seed.json'),
    mediaDirectory: path.resolve(root, env.LOCAL_VIDEO_DIRECTORY || 'data/runtime/media'),
    fixturesDirectory: path.resolve(root, env.FIXTURES_DIRECTORY || 'fixtures'),
    videoMetadataFile: path.resolve(root, env.VIDEO_METADATA_FILE || 'data/runtime/video-metadata.json'),
    uploadTempDirectory: path.resolve(root, env.UPLOAD_TEMP_DIR || 'data/runtime/tmp'),
    maxUploadBytes: integer(env.MAX_UPLOAD_MB, 500, 'MAX_UPLOAD_MB', { max: 2048 }) * 1024 * 1024,
    maxConcurrentUploads: integer(env.MAX_CONCURRENT_UPLOADS, 2, 'MAX_CONCURRENT_UPLOADS', { max: 20 }),
    uploadTimeoutMs: integer(env.UPLOAD_TIMEOUT_SECONDS, 1800, 'UPLOAD_TIMEOUT_SECONDS', { max: 7200 }) * 1000,
    videoMetadataMySql: env.VIDEO_METADATA_MYSQL === 'true',
    ftp: ftpConfigured(env) ? ftpOptions(env) : null,
    dataDirectory,
  };
  config.auth = loadAuthConfig(env, { siteOrigin });
  config.deploymentEnvironment = {
    WILLCLUB_DEPLOY_TARGET: deploymentTarget(env),
    NEXT_PUBLIC_FRONT_SITE_URL: env.NEXT_PUBLIC_FRONT_SITE_URL || '',
    NEXT_PUBLIC_ADMIN_SITE_URL: env.NEXT_PUBLIC_ADMIN_SITE_URL || '',
  };
  config.auth.loginSuccessPath = config.deploymentEnvironment.WILLCLUB_DEPLOY_TARGET === 'frontend' ? '/' : '/admin';
  return config;
}

function error(res, status, code, message, details) {
  return res.status(status).json({ error: { code, message, ...(details ? { details } : {}) } });
}

function expectedRevision(req) {
  const header = req.get('If-Match');
  const body = req.body?.revision;
  const raw = header ?? body;
  const normalized = typeof raw === 'string' ? raw.replace(/^"|"$/g, '') : raw;
  const revision = typeof normalized === 'number' ? normalized : Number(normalized);
  return Number.isSafeInteger(revision) && revision >= 0 ? revision : null;
}

async function createVideoRepository(config) {
  if (config.videoMetadataMySql) {
    if (!config.databaseUrl) throw new Error('VIDEO_METADATA_MYSQL=true에는 DATABASE_URL이 필요합니다.');
    return MysqlVideoRepository.connect(config.databaseUrl);
  }
  return new JsonVideoRepository(config.videoMetadataFile);
}

function createVideoStorage(config) {
  if (config.ftp) return new FtpStorage(config.ftp);
  // 원본 LocalStorage는 절대 publicBaseUrl을 필요로 하며, 이 URL은 same-process /media로 향한다.
  return new LocalStorage(config.mediaDirectory, config.localVideoBaseUrl);
}

function withAdmin(options) {
  return (req, res, next) => requireAdmin(req, res, next, options);
}

function withAdminOrExpert(options) {
  return (req, res, next) => requireAdminOrExpert(req, res, next, options);
}

function withAdminCsrf(options) {
  return async (req, res, next) => {
    await requireAdmin(req, res, errorResponse => {
      if (errorResponse) return next(errorResponse);
      return requireCsrf(req, res, next, { siteOrigin: options.authConfig.siteOrigin });
    }, options);
  };
}

/**
 * Express app만 필요할 때도 사용할 수 있는 생성자. tests는 nextHandler를 생략해 API만 검증한다.
 */
export async function createApplication({ config = loadServerConfig(), stateStore, videoRepository, videoStorage, nextHandler } = {}) {
  const validator = state => validateState(state, {
    videoUrlValidator: url => isAllowedVideoUrl(url, { siteOrigin: config.siteOrigin }),
  });
  const store = stateStore || await createStateStore({
    databaseUrl: config.databaseUrl, file: config.stateFile, seedFile: config.seedFile, validator,
  });
  const repository = videoRepository || await createVideoRepository(config);
  const storage = videoStorage || createVideoStorage(config);
  const app = express();
  const adminOptions = { authConfig: config.auth, adminApiToken: config.adminApiToken };
  const authLimiter = rateLimit({
    windowMs: 60_000, limit: 20, standardHeaders: 'draft-8', legacyHeaders: false,
    handler: (_req, res) => error(res, 429, 'AUTH_RATE_LIMIT', '잠시 후 다시 시도해 주세요.'),
  });

  app.disable('x-powered-by');
  app.use((req, res, nextMiddleware) => {
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.set('Cache-Control', 'no-store');
    nextMiddleware();
  });
  app.use(deploymentGuard(config.deploymentEnvironment));
  app.use(express.json({ limit: '4mb', type: ['application/json', 'application/*+json'] }));

  app.get('/health', (_req, res) => res.json({ ok: true, service: 'willclub-next' }));

  app.use('/auth', authLimiter);
  app.get('/auth/login', (req, res) => oauthLogin(req, res, config.auth));
  app.get('/auth/callback', (req, res) => oauthCallback(req, res, config.auth));
  app.post('/auth/logout', (req, res) => logout(req, res, config.auth));

  app.get('/api/session', (req, res) => sessionResponse(req, res, config.auth));

  app.get('/api/admin/state', withAdminOrExpert(adminOptions), async (req, res) => {
    const snapshot = await store.snapshot();
    const state = req.willclubAuth.user.role === 'expert'
      ? restrictStateForExpert(snapshot.state, req.willclubAuth.user.expert)
      : snapshot.state;
    return res.json({ state, revision: snapshot.revision });
  });

  app.put('/api/admin/state', withAdminCsrf(adminOptions), async (req, res) => {
    const revision = expectedRevision(req);
    if (revision === null || !req.body || !Object.prototype.hasOwnProperty.call(req.body, 'state')) {
      return error(res, 400, 'STATE_REVISION_REQUIRED', 'If-Match 또는 본문의 revision과 state가 필요합니다.');
    }
    let checked;
    try {
      checked = validator(req.body.state);
    } catch (validationError) {
      if (validationError instanceof StateValidationError) {
        return error(res, 400, 'INVALID_STATE', validationError.message, validationError.details);
      }
      throw validationError;
    }
    const result = await store.replace(revision, checked);
    if (!result.ok) {
      return error(res, 409, 'STATE_REVISION_CONFLICT', '다른 변경이 먼저 저장되었습니다. 상태를 새로고침해 주세요.', {
        revision: result.currentRevision,
      });
    }
    return res.json({ state: result.state, revision: result.revision });
  });

  app.put('/api/expert/state',withAdminOrExpert(adminOptions),async(req,res)=>{
    const user=req.willclubAuth.user;
    if(user.role!=='expert'||!user.expert)return error(res,403,'EXPERT_REQUIRED','담당 전문가 계정이 필요합니다.');
    let csrfValid=false;
    requireCsrf(req,res,()=>{csrfValid=true;},{siteOrigin:config.siteOrigin});
    if(!csrfValid)return;
    const revision=expectedRevision(req);
    if(revision===null)return error(res,400,'STATE_REVISION_REQUIRED','revision이 필요합니다.');
    const snapshot=await store.snapshot();
    if(snapshot.revision!==revision)return error(res,409,'STATE_REVISION_CONFLICT','다른 변경이 먼저 저장되었습니다. 상태를 새로고침해 주세요.');
    let nextState;
    try{nextState=validator(mergeExpertRecords(snapshot.state,user.expert,req.body.records));}
    catch(cause){return error(res,cause.status||400,'EXPERT_SCOPE_INVALID',cause.message);}
    const result=await store.replace(revision,nextState);
    if(!result.ok)return error(res,409,'STATE_REVISION_CONFLICT','다른 변경이 먼저 저장되었습니다. 상태를 새로고침해 주세요.');
    return res.json({state:restrictStateForExpert(result.state,user.expert),revision:result.revision});
  });

  app.get('/api/public/menu',async(_req,res)=>{const snapshot=await store.snapshot();res.set('Cache-Control','no-store');return res.json(buildPublicMenu(snapshot.state));});

  app.get('/api/catalog', async (_req, res) => {
    const snapshot = await store.snapshot();
    return res.json({ items: buildCatalog(snapshot.state, { siteOrigin: config.siteOrigin }) });
  });

  app.get('/api/catalog/:id/coupons', async (req, res) => {
    const { session } = await readSession(req, config.auth);
    // Never reveal a user's coupons (or coupon codes) before the existing session verifier succeeds.
    if (!session) return res.json({ items: [], requiresLogin: true });
    const snapshot = await store.snapshot();
    const result = listVideoCoupons({ state: snapshot.state, videoId: req.params.id, session });
    return res.status(result.status).json(result.body);
  });

  app.post('/api/catalog/:id/coupon-quote', async (req, res) => {
    const { session } = await readSession(req, config.auth);
    if (!session) return error(res, 401, 'AUTH_REQUIRED', '로그인이 필요합니다.');
    // requireCsrf uses the same verified session context as the rest of the server's browser POST APIs.
    req.willclubAuth = { kind: 'session', ...session };
    return requireCsrf(req, res, async () => {
      const snapshot = await store.snapshot();
      const result = quoteVideoCoupon({ state: snapshot.state, videoId: req.params.id, session, payload: req.body });
      return res.status(result.status).json(result.body);
    }, { siteOrigin: config.auth.siteOrigin });
  });

  app.get('/api/catalog/:id/playback', async (req, res) => {
    const snapshot = await store.snapshot();
    const row=snapshot.state.records.videos.find(v=>v.id===req.params.id&&isPublicVideo(v));
    if(row && Number(row.amount)>0 && await canPlayVideo(req,row,config.auth)){
      if(!isAllowedVideoUrl(row.videoUrl,{siteOrigin:config.siteOrigin}))return error(res,404,'MEDIA_NOT_CONNECTED','재생 가능한 미디어가 연결되지 않았습니다.');
      return res.json({url:row.videoUrl,mimeType:row.mimeType||'video/mp4'});
    }
    const result = findPlaybackVideo(snapshot.state, req.params.id, { siteOrigin: config.siteOrigin });
    if (result.status) return error(res, result.status, result.code, result.message);
    return res.json(result);
  });

  // 원본 kit의 목록/상세 API는 URL을 포함하므로 관리자만 읽을 수 있게 명시적으로 차단한다.
  const videoRouter = await createVideoRouter({
    authenticateAdmin: withAdminCsrf(adminOptions),
    authorizeRead: withAdmin(adminOptions),
    repository,
    storage,
    tempDir: config.uploadTempDirectory,
    maxUploadBytes: config.maxUploadBytes,
    maxConcurrentUploads: config.maxConcurrentUploads,
  });
  app.use('/api', videoRouter);

  const mediaAuthorizer = async (req, res, nextMiddleware) => {
    let filename;
    try {
      filename = decodeURIComponent(req.path.slice(1));
    } catch {
      return error(res, 404, 'MEDIA_NOT_FOUND', '미디어를 찾을 수 없습니다.');
    }
    if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,180}\.(mp4|webm)$/i.test(filename)) {
      return error(res, 404, 'MEDIA_NOT_FOUND', '미디어를 찾을 수 없습니다.');
    }
    const snapshot = await store.snapshot();
    const rows = Array.isArray(snapshot.state?.records?.videos) ? snapshot.state.records.videos : [];
    let permitted=false;
    for(const row of rows){
      if(!isPublicVideo(row)||!referencesLocalMedia(row,filename,{siteOrigin:config.siteOrigin,localVideoBaseUrl:config.localVideoBaseUrl}))continue;
      if(Number(row.amount)<=0||await canPlayVideo(req,row,config.auth)){permitted=true;break;}
    }
    if (!permitted) return error(res, 403, 'MEDIA_ACCESS_DENIED', '공개 무료 미디어 연결이 필요합니다.');
    return nextMiddleware();
  };
  // express.static은 GET/HEAD Range를 포함하여 send 모듈의 안전한 파일 범위 응답을 사용한다.
  app.use('/media', mediaAuthorizer, express.static(config.mediaDirectory, { fallthrough: true, dotfiles: 'deny', acceptRanges: true }));
  app.use('/media', express.static(config.fixturesDirectory, { fallthrough: true, dotfiles: 'deny', acceptRanges: true }));
  app.use('/media', (_req, res) => error(res, 404, 'MEDIA_NOT_FOUND', '미디어 파일을 찾을 수 없습니다.'));

  if (nextHandler) {
    app.use((req, res, nextMiddleware) => {
      Promise.resolve(nextHandler(req, res)).catch(nextMiddleware);
    });
  } else {
    app.use((_req, res) => error(res, 404, 'NOT_FOUND', '요청 경로가 없습니다.'));
  }

  app.use((caught, _req, res, _next) => {
    if (res.headersSent) return;
    if (caught instanceof StateValidationError) return error(res, 400, 'INVALID_STATE', caught.message, caught.details);
    // 비밀값이 포함될 수 있는 DB/FTP/OAuth 오류 원문을 응답이나 로그에 남기지 않는다.
    console.error('server_request_failed', { name: caught?.name, code: caught?.code });
    return error(res, caught?.status === 413 ? 413 : 500, 'INTERNAL_ERROR', '요청을 처리하지 못했습니다.');
  });

  return {
    app,
    store,
    repository,
    async close() {
      await Promise.allSettled([store.close?.(), repository.close?.()]);
    },
  };
}

export async function startServer() {
  const { default: next } = await import(/* webpackIgnore: true */ 'next');
  const config = loadServerConfig();
  const nextApp = next({ dev: config.development, hostname: config.host, port: config.port });
  await nextApp.prepare();
  const service = await createApplication({ config, nextHandler: nextApp.getRequestHandler() });
  const server = service.app.listen(config.port, config.host, () => {
    console.log(`WillClub 서버가 ${config.host}:${config.port}에서 시작되었습니다.`);
  });
  server.requestTimeout = config.uploadTimeoutMs;
  server.headersTimeout = 60_000;
  server.timeout = config.uploadTimeoutMs;
  const shutdown = () => {
    server.close(() => { service.close().finally(() => process.exit(0)); });
    setTimeout(() => process.exit(1), config.uploadTimeoutMs + 1_000).unref();
  };
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
  return { server, service, config };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer().catch(errorValue => {
    console.error('서버 시작 실패: 환경변수·상태 저장소·비디오 설정을 확인해 주세요.', {
      name: errorValue?.name, code: errorValue?.code,
    });
    process.exitCode = 1;
  });
}
