import defaults from '../deployment.config.json' with { type: 'json' };

const TARGETS = new Set(['all', 'frontend', 'admin']);
const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F-\u009F]/;
const REQUEST_BASE = 'https://deployment-request.invalid';

function configError(message) {
  const error = new Error(message);
  error.code = 'DEPLOYMENT_CONFIG_INVALID';
  return error;
}

function configFailure(error = configError('배포 설정을 확인해 주세요.')) {
  return {
    status: 503,
    error: {
      code: error.code === 'DEPLOYMENT_REDIRECT_LOOP' ? error.code : 'DEPLOYMENT_CONFIG_INVALID',
      // 설정값 자체를 반환하지 않아 URL에 들어 있을 수 있는 민감 정보를 노출하지 않는다.
      message: error.message || '배포 설정을 확인해 주세요.',
    },
  };
}

function isPathPrefix(pathname, prefix) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

/**
 * 환경 변수가 있으면 그것을 우선하고, 없으면 저장소의 안전한 기본값을 사용한다.
 */
export function deploymentTarget(env = process.env) {
  const target = env?.WILLCLUB_DEPLOY_TARGET === undefined
    ? defaults.target
    : env.WILLCLUB_DEPLOY_TARGET;
  if (typeof target !== 'string' || !TARGETS.has(target)) {
    throw configError('WILLCLUB_DEPLOY_TARGET은 all, frontend, admin 중 하나여야 합니다.');
  }
  return target;
}

/**
 * 교차 사이트 리다이렉트에 쓸 수 있는 정확한 HTTP(S) origin만 반환한다.
 * 일반 인터넷 origin은 HTTPS만 허용하고, HTTP는 로컬 개발의 localhost만 허용한다.
 */
export function publicSiteOrigin(envKey, value) {
  if (typeof envKey !== 'string' || !envKey) {
    throw configError('배포 origin 환경 변수 이름이 올바르지 않습니다.');
  }
  if (typeof value !== 'string' || !value) {
    throw configError(`${envKey} 설정이 필요합니다.`);
  }
  if (CONTROL_CHARACTERS.test(value) || value.trim() !== value) {
    throw configError(`${envKey}에는 제어 문자 또는 공백을 포함할 수 없습니다.`);
  }

  let url;
  try {
    url = new URL(value);
  } catch {
    throw configError(`${envKey}은 올바른 HTTP(S) origin이어야 합니다.`);
  }

  if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) {
    throw configError(`${envKey}은 올바른 HTTP(S) origin이어야 합니다.`);
  }
  if (url.username || url.password) {
    throw configError(`${envKey}에는 인증 정보를 포함할 수 없습니다.`);
  }
  if (url.search || url.hash || url.pathname !== '/') {
    throw configError(`${envKey}에는 경로, 쿼리 또는 fragment를 포함할 수 없습니다.`);
  }
  if (url.protocol === 'http:' && url.hostname !== 'localhost') {
    throw configError(`${envKey}의 HTTP origin은 로컬 개발용 localhost만 허용됩니다.`);
  }
  return url.origin;
}

/**
 * 사용자 입력 request target은 절대 URL이나 protocol-relative URL로 승격시키지 않는다.
 * URL을 이용해 pathname/search를 분리하되, 목적지는 이 값이 아니라 검증된 설정 origin이다.
 */
function requestParts(requestPath) {
  if (typeof requestPath !== 'string' ||
      !requestPath.startsWith('/') || requestPath.startsWith('//') ||
      requestPath.includes('\\') || CONTROL_CHARACTERS.test(requestPath) || requestPath.includes('#')) {
    return null;
  }
  try {
    const url = new URL(requestPath, REQUEST_BASE);
    if (url.origin !== REQUEST_BASE || url.username || url.password || url.hash) return null;
    return { pathname: url.pathname, search: url.search };
  } catch {
    return null;
  }
}

/** Express req.path처럼 raw percent encoding을 받을 수 있는 path를 API 비교용으로만 정규화한다. */
export function canonicalDeploymentPathname(requestPath) {
  const parts = requestParts(requestPath);
  if (!parts) return null;
  try {
    const decoded = decodeURIComponent(parts.pathname);
    if (CONTROL_CHARACTERS.test(decoded)) return null;
    return decoded.toLowerCase();
  } catch {
    return null;
  }
}

function isAdminApi(pathname) {
  return isPathPrefix(pathname, '/api/admin') ||
    isPathPrefix(pathname, '/api/expert') ||
    isPathPrefix(pathname, '/api/videos');
}

function isFrontendApiAllowed(pathname) {
  return isPathPrefix(pathname, '/api/catalog') ||
    isPathPrefix(pathname, '/api/session') ||
    isPathPrefix(pathname, '/auth') ||
    isPathPrefix(pathname, '/media') ||
    isPathPrefix(pathname, '/health');
}

function isApiCandidate(pathname, requestPath) {
  if (pathname) return pathname === '/api' || pathname.startsWith('/api/');
  // decodeURIComponent 실패 경로도 /api/로 시작하면 프런트 배포에서 fail closed 한다.
  return typeof requestPath === 'string' && /^\/api(?:\/|%2f|$)/i.test(requestPath);
}

function isPublicFrontendPage(pathname) {
  return new Set(['/paidinfo', '/freeinfo', '/about', '/guide', '/vip', '/login', '/myinfo']).has(pathname) ||
    isPathPrefix(pathname, '/support') || isPathPrefix(pathname, '/freeinfo/articles');
}

function currentOrigin(requestOrigin) {
  if (typeof requestOrigin !== 'string' || CONTROL_CHARACTERS.test(requestOrigin)) return null;
  try {
    const url = new URL(requestOrigin);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
    return url.origin;
  } catch {
    return null;
  }
}

function redirectToConfiguredSite(envKey, env, parts, requestOrigin) {
  let destinationOrigin;
  try {
    destinationOrigin = publicSiteOrigin(envKey, env?.[envKey]);
  } catch (error) {
    return configFailure(error);
  }

  if (currentOrigin(requestOrigin) === destinationOrigin) {
    const error = configError(`${envKey}은 현재 배포와 다른 origin을 가리켜야 합니다.`);
    error.code = 'DEPLOYMENT_REDIRECT_LOOP';
    return configFailure(error);
  }

  // parts.pathname은 단일 '/'로 시작하는 안전한 request target에서 나온 값이다.
  const location = new URL(`${parts.pathname}${parts.search}`, destinationOrigin);
  if (location.origin !== destinationOrigin) return configFailure();
  return { status: 302, location: location.href };
}

function unavailable(status, code, message) {
  return { status, error: { code, message } };
}

/**
 * Express middleware와 Next proxy가 공통으로 쓰는 순수 정책 결정 함수.
 * requestPath는 pathname 또는 pathname+query여야 하며, requestOrigin은 현재 public origin이다.
 */
export function deploymentDecision(requestPath, method = 'GET', env = process.env, requestOrigin) {
  // method는 정책 인터페이스의 일부다. 현재 API/page gate는 HTTP method와 무관하게 적용한다.
  void method;

  let target;
  try {
    target = deploymentTarget(env);
  } catch (error) {
    return configFailure(error);
  }
  if (target === 'all') return { status: 200 };

  const parts = requestParts(requestPath);
  const pathname = canonicalDeploymentPathname(requestPath);

  if (target === 'frontend') {
    // 관리자 API는 로그인 역할과 무관하게 프런트 배포에서 절대 노출하지 않는다.
    if (pathname && isAdminApi(pathname)) {
      return unavailable(403, 'ADMIN_API_UNAVAILABLE', '관리자 API는 관리자 배포에서만 사용할 수 있습니다.');
    }
    if (isApiCandidate(pathname, requestPath)) {
      if (pathname && isFrontendApiAllowed(pathname)) return { status: 200 };
      return unavailable(404, 'FRONTEND_API_UNAVAILABLE', '이 API는 프런트 배포에서 제공되지 않습니다.');
    }
    if (pathname && isPathPrefix(pathname, '/admin')) {
      if (!parts) return unavailable(404, 'INVALID_REQUEST_PATH', '요청 경로가 올바르지 않습니다.');
      return redirectToConfiguredSite('NEXT_PUBLIC_ADMIN_SITE_URL', env, parts, requestOrigin);
    }
    return { status: 200 };
  }

  // admin target: only explicitly public customer pages leave this origin.
  if (!parts || !pathname) return { status: 200 };
  if (pathname === '/') {
    return { status: 302, location: new URL(`/admin${parts.search}`, REQUEST_BASE).pathname + parts.search };
  }
  if (isPublicFrontendPage(pathname)) {
    return redirectToConfiguredSite('NEXT_PUBLIC_FRONT_SITE_URL', env, parts, requestOrigin);
  }
  // /api, /auth, /media, /health, /admin-assets, /assets, /renewal-assets, /_next, /manus-routes and
  // administrator pages deliberately fall through to the local application. /api/catalog is thus available.
  return { status: 200 };
}
