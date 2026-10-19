import path from 'node:path';
import {pathToFileURL} from 'node:url';
import { randomBytes, timingSafeEqual } from 'node:crypto';
import { jwtVerify, SignJWT } from 'jose';

export const SESSION_COOKIE = 'webdev_app_session';
const NONCE_COOKIE = 'willclub_oauth_nonce';
const encoder = new TextEncoder();

function parseCookie(header = '') {
  const result = {};
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index < 1) continue;
    const name = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (!Object.prototype.hasOwnProperty.call(result, name)) {
      try { result[name] = decodeURIComponent(value); } catch { /* malformed cookie is ignored */ }
    }
  }
  return result;
}

function exactOrigin(value, name) {
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash ||
      (url.pathname !== '/' && url.pathname !== '')) {
    throw new Error(`${name}은 경로·인증정보·쿼리 없는 정확한 origin이어야 합니다.`);
  }
  return url.origin;
}

function parseExpertMap(raw) {
  if (!raw) return {};
  let parsed;
  try { parsed = JSON.parse(raw); } catch { throw new Error('WILLCLUB_EXPERT_OPEN_IDS는 openId→전문가명 JSON 객체여야 합니다.'); }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('WILLCLUB_EXPERT_OPEN_IDS는 JSON 객체여야 합니다.');
  }
  const map = {};
  for (const [openId, expert] of Object.entries(parsed)) {
    if (typeof openId !== 'string' || !openId || typeof expert !== 'string' || !expert.trim()) {
      throw new Error('WILLCLUB_EXPERT_OPEN_IDS의 키와 값은 비어 있지 않은 문자열이어야 합니다.');
    }
    map[openId] = expert.trim();
  }
  return map;
}

export function loadAuthConfig(env, { siteOrigin }) {
  const secret = env.MANUS_JWT_SECRET ? encoder.encode(env.MANUS_JWT_SECRET) : null;
  return {
    siteOrigin: exactOrigin(siteOrigin, 'SITE_ORIGIN'),
    adapterPath: env.AUTH_ADAPTER_MODULE ? path.resolve(env.AUTH_ADAPTER_MODULE) : '',
    secret,
    projectId: env.MANUS_PROJECT_ID || '',
    oauthPortalUrl: env.MANUS_OAUTH_PORTAL_URL ? exactOrigin(env.MANUS_OAUTH_PORTAL_URL, 'MANUS_OAUTH_PORTAL_URL') : '',
    oauthApiUrl: env.MANUS_OAUTH_API_URL ? exactOrigin(env.MANUS_OAUTH_API_URL, 'MANUS_OAUTH_API_URL') : '',
    adminOpenIds: new Set((env.WILLCLUB_ADMIN_OPEN_IDS || '').split(',').map(value => value.trim()).filter(Boolean)),
    expertByOpenId: parseExpertMap(env.WILLCLUB_EXPERT_OPEN_IDS),
  };
}

function sessionCookieOptions(config, maxAgeSeconds = 8 * 60 * 60) {
  const publicHttps = new URL(config.siteOrigin).protocol === 'https:';
  return {
    httpOnly: true,
    secure: publicHttps,
    sameSite: publicHttps ? 'None' : 'Lax',
    path: '/',
    maxAge: maxAgeSeconds,
  };
}

function serializeCookie(name, value, options) {
  const attributes = [`${name}=${encodeURIComponent(value)}`];
  if (options.maxAge !== undefined) attributes.push(`Max-Age=${Math.max(0, Math.floor(options.maxAge))}`);
  if (options.path) attributes.push(`Path=${options.path}`);
  if (options.httpOnly) attributes.push('HttpOnly');
  if (options.secure) attributes.push('Secure');
  if (options.sameSite) attributes.push(`SameSite=${options.sameSite}`);
  return attributes.join('; ');
}

function addCookie(res, cookie) {
  const current = res.getHeader('Set-Cookie');
  const all = current ? (Array.isArray(current) ? current : [current]) : [];
  res.setHeader('Set-Cookie', [...all, cookie]);
}

export function setCookie(res, name, value, options) {
  addCookie(res, serializeCookie(name, value, options));
}

function clearCookie(res, name, config, path = '/') {
  setCookie(res, name, '', { ...sessionCookieOptions(config, 0), path, maxAge: 0 });
}

function equalText(left, right) {
  if (typeof left !== 'string' || typeof right !== 'string') return false;
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function sessionUser(payload, config) {
  const openId = typeof payload.openId === 'string' ? payload.openId : '';
  if (!openId) return null;
  let role = 'member';
  let expert;
  if (config.adminOpenIds.has(openId)) role = 'admin';
  else if (config.expertByOpenId[openId]) {
    role = 'expert';
    expert = config.expertByOpenId[openId];
  }
  const user = { role, openId };
  if (expert) user.expert = expert;
  if (typeof payload.name === 'string' && payload.name) user.name = payload.name.slice(0, 200);
  if (typeof payload.email === 'string' && payload.email) user.email = payload.email.slice(0, 320);
  return user;
}

/** Preview가 주입한 쿠키와 앱이 발급한 쿠키 모두 HS256/appId/openId로 검증한다. */
const adapters=new Map();
export async function authAdapter(config){
  if(!config.adapterPath)return null;
  if(!adapters.has(config.adapterPath))adapters.set(config.adapterPath,import(/* webpackIgnore: true */ pathToFileURL(config.adapterPath).href));
  return adapters.get(config.adapterPath);
}
export async function canPlayVideo(req,video,config){
  const adapter=await authAdapter(config);
  if(typeof adapter?.canPlayVideo!=='function')return false;
  try{return await adapter.canPlayVideo(req,video)===true;}catch{return false;}
}
export async function readSession(req, config) {
  if(config.adapterPath){
    try{
      const adapter=await authAdapter(config),session=await adapter?.getSession?.(req);
      if(!session)return {session:null,invalid:false};
      if(!session.user?.openId||!['admin','expert','member'].includes(session.user.role)||!session.csrf)return {session:null,invalid:true};
      if(session.user.role==='expert'&&!session.user.expert)return {session:null,invalid:true};
      return {session,invalid:false};
    }catch{return {session:null,invalid:true};}
  }
  const token = parseCookie(req.headers.cookie)[SESSION_COOKIE];
  if (!token || !config.secret || !config.projectId) return { session: null, invalid: Boolean(token) };
  try {
    const { payload } = await jwtVerify(token, config.secret, { algorithms: ['HS256'] });
    if (typeof payload.exp !== 'number' || payload.exp <= Math.floor(Date.now()/1000) || payload.appId !== config.projectId) return { session: null, invalid: true };
    const user = sessionUser(payload, config);
    if (!user) return { session: null, invalid: true };
    return {
      session: {
        user,
        csrf: typeof payload.csrf === 'string' ? payload.csrf : '',
        claims: payload,
      },
      invalid: false,
    };
  } catch {
    return { session: null, invalid: true };
  }
}

export async function issueSession({ openId, name, email }, config, csrf = randomBytes(32).toString('base64url')) {
  if (!config.secret || !config.projectId) throw new Error('Manus OAuth 세션 서명이 설정되지 않았습니다.');
  const payload = { openId, csrf, appId: config.projectId };
  if (typeof name === 'string' && name) payload.name = name.slice(0, 200);
  if (typeof email === 'string' && email) payload.email = email.slice(0, 320);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(config.secret);
  return { token, csrf };
}

export function writeSession(res, token, config) {
  setCookie(res, SESSION_COOKIE, token, sessionCookieOptions(config));
}

export function clearSession(res, config) {
  clearCookie(res, SESSION_COOKIE, config);
}

export function bearerMatches(req, expectedToken) {
  if (!expectedToken) return false;
  const header = req.get?.('Authorization') || req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  return equalText(token, expectedToken);
}

export async function requireAdmin(req, res, next, { authConfig, adminApiToken }) {
  if (bearerMatches(req, adminApiToken)) {
    req.willclubAuth = { kind: 'bearer', user: { role: 'admin', openId: 'server-token' } };
    return next();
  }
  const { session } = await readSession(req, authConfig);
  if (!session) return res.status(401).json({ error: { code: 'AUTH_REQUIRED', message: '로그인이 필요합니다.' } });
  if (session.user.role !== 'admin') return res.status(403).json({ error: { code: 'ADMIN_REQUIRED', message: '관리자 권한이 필요합니다.' } });
  req.willclubAuth = { kind: 'session', ...session };
  return next();
}

export async function requireAdminOrExpert(req, res, next, { authConfig, adminApiToken }) {
  if (bearerMatches(req, adminApiToken)) {
    req.willclubAuth = { kind: 'bearer', user: { role: 'admin', openId: 'server-token' } };
    return next();
  }
  const { session } = await readSession(req, authConfig);
  if (!session) return res.status(401).json({ error: { code: 'AUTH_REQUIRED', message: '로그인이 필요합니다.' } });
  if (!['admin', 'expert'].includes(session.user.role)) {
    return res.status(403).json({ error: { code: 'STATE_ACCESS_DENIED', message: '상태 조회 권한이 없습니다.' } });
  }
  req.willclubAuth = { kind: 'session', ...session };
  return next();
}

/** 브라우저 세션 변조 요청은 정확한 Origin + 세션별 CSRF를 모두 요구한다. */
export function requireCsrf(req, res, next, { siteOrigin }) {
  const origin = req.get('Origin');
  const auth = req.willclubAuth;
  if (origin && origin !== siteOrigin) {
    return res.status(403).json({ error: { code: 'ORIGIN_FORBIDDEN', message: '허용되지 않은 요청 origin입니다.' } });
  }
  // Bearer는 브라우저에 노출하지 않는 서버 간 검증·테스트용 자격증명이다.
  if (auth?.kind === 'bearer') return next();
  if (!origin) return res.status(403).json({ error: { code: 'ORIGIN_REQUIRED', message: '동일 origin 요청만 허용됩니다.' } });
  const supplied = req.get('X-CSRF-Token') || '';
  if (!supplied || !auth?.csrf || !equalText(supplied, auth.csrf)) {
    return res.status(403).json({ error: { code: 'CSRF_INVALID', message: 'CSRF 토큰이 올바르지 않습니다.' } });
  }
  return next();
}

function oauthReady(config) {
  return Boolean(config.secret && config.projectId && config.oauthPortalUrl && config.oauthApiUrl);
}

function callbackUrl(config) {
  return `${config.siteOrigin}/auth/callback`;
}

export async function oauthLogin(req, res, config) {
  if(config.adapterPath){const adapter=await authAdapter(config);return adapter?.login?adapter.login(req,res):res.status(503).json({error:{code:'LOGIN_ADAPTER_MISSING',message:'기존 로그인 어댑터를 연결해주세요.'}});}
  if (!oauthReady(config)) {
    return res.status(503).json({ error: { code: 'OAUTH_NOT_CONFIGURED', message: 'Manus OAuth 환경 설정이 필요합니다.' } });
  }
  const nonce = randomBytes(32).toString('base64url');
  const redirectUri = callbackUrl(config);
  const state = Buffer.from(JSON.stringify({ redirectUri, nonce })).toString('base64url');
  setCookie(res, NONCE_COOKIE, nonce, { ...sessionCookieOptions(config, 600), path: '/auth/callback', maxAge: 600 });
  const url = new URL('/app-auth', config.oauthPortalUrl);
  url.searchParams.set('appId', config.projectId);
  url.searchParams.set('redirectUri', redirectUri);
  url.searchParams.set('state', state);
  url.searchParams.set('responseType', 'code');
  return res.redirect(302, url.href);
}

function decodeState(raw) {
  try {
    const value = JSON.parse(Buffer.from(raw, 'base64url').toString('utf8'));
    return value && typeof value === 'object' ? value : null;
  } catch {
    return null;
  }
}

export async function oauthCallback(req, res, config) {
  clearCookie(res, NONCE_COOKIE, config, '/auth/callback');
  if (!oauthReady(config)) return res.status(503).send('Manus OAuth 환경 설정이 필요합니다.');
  const state = typeof req.query.state === 'string' ? decodeState(req.query.state) : null;
  const code = typeof req.query.code === 'string' ? req.query.code : '';
  const nonce = parseCookie(req.headers.cookie)[NONCE_COOKIE] || '';
  if (!code || !state || state.redirectUri !== callbackUrl(config) || !equalText(state.nonce, nonce)) {
    return res.status(400).send('로그인 요청 검증에 실패했습니다. 다시 시도해 주세요.');
  }
  try {
    const exchange = await fetch(`${config.oauthApiUrl}/webdev.v1.WebDevAuthPublicService/ExchangeToken`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clientId: config.projectId, grantType: 'authorization_code', code, redirectUri: callbackUrl(config) }),
    });
    if (!exchange.ok) throw new Error('token_exchange_failed');
    const token = await exchange.json();
    if (!token?.accessToken || typeof token.accessToken !== 'string') throw new Error('token_missing');
    const identityResponse = await fetch(`${config.oauthApiUrl}/webdev.v1.WebDevAuthPublicService/GetUserInfo`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ accessToken: token.accessToken }),
    });
    if (!identityResponse.ok) throw new Error('identity_lookup_failed');
    const identity = await identityResponse.json();
    if (!identity?.openId || typeof identity.openId !== 'string') throw new Error('openid_missing');
    const session = await issueSession(identity, config);
    writeSession(res, session.token, config);
    return res.redirect(302, config.loginSuccessPath === '/' ? '/' : '/admin');
  } catch {
    return res.status(502).send('Manus 로그인 처리에 실패했습니다. 잠시 후 다시 시도해 주세요.');
  }
}

/** 세션 정보 응답 시 Preview 쿠키에 CSRF claim이 없으면 안전하게 앱 세션으로 교체한다. */
export async function sessionResponse(req, res, config) {
  const result = await readSession(req, config);
  if (!result.session) {
    if (result.invalid) clearSession(res, config);
    return res.json({ user: null, csrfToken: null });
  }
  let csrf = result.session.csrf;
  if (!csrf) {
    const renewed = await issueSession(result.session.user, config);
    writeSession(res, renewed.token, config);
    csrf = renewed.csrf;
  }
  return res.json({ user: result.session.user, csrfToken: csrf });
}

export async function logout(req, res, config) {
  const { session } = await readSession(req, config);
  if (session) {
    const origin = req.get('Origin');
    const supplied = req.get('X-CSRF-Token') || '';
    if (origin !== config.siteOrigin || !equalText(supplied, session.csrf || '')) {
      return res.status(403).json({ error: { code: 'CSRF_INVALID', message: 'CSRF 토큰이 올바르지 않습니다.' } });
    }
  }
  if(config.adapterPath){const adapter=await authAdapter(config);if(adapter?.logout)return adapter.logout(req,res);}
  clearSession(res, config);
  return res.status(204).end();
}
