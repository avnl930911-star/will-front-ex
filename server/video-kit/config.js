import path from 'node:path';
import { isIP } from 'node:net';

export function positiveInteger(value, fallback, label, max = Number.MAX_SAFE_INTEGER) {
  const result = value === undefined || value === '' ? fallback : Number(value);
  if (!Number.isSafeInteger(result) || result < 1 || result > max) throw new Error(`${label} 값은 1~${max} 범위의 정수여야 합니다.`);
  return result;
}

export function httpsBase(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    throw new Error('VIDEO_PUBLIC_BASE_URL은 인증정보·쿼리 없이 HTTPS 주소여야 합니다.');
  }
  url.pathname = `${url.pathname.replace(/\/+$/, '')}/`;
  return url.href;
}

export function loadConfig(env = process.env) {
  for (const name of ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_REMOTE_DIR', 'VIDEO_PUBLIC_BASE_URL', 'DATABASE_URL', 'ADMIN_API_TOKEN']) {
    if (!env[name]) throw new Error(`${name} 환경변수를 설정해 주세요.`);
  }
  if (env.ADMIN_API_TOKEN.length < 32) throw new Error('ADMIN_API_TOKEN은 무작위 32자 이상이어야 합니다.');
  const dir = env.FTP_REMOTE_DIR;
  if (dir.split('/').some(part => part === '..' || part === '.') || /[\r\n\0\\]/.test(dir)) throw new Error('잘못된 FTP_REMOTE_DIR입니다.');
  const secure = env.FTP_SECURE ?? 'true';
  if (!['true', 'false', 'implicit'].includes(secure)) throw new Error('FTP_SECURE는 true, false, implicit 중 하나여야 합니다.');
  const origins = (env.ALLOWED_ORIGINS ?? '').split(',').map(v => v.trim()).filter(Boolean);
  for (const value of origins) {
    const origin = new URL(value);
    if (origin.origin !== value || !['https:', 'http:'].includes(origin.protocol)) throw new Error('ALLOWED_ORIGINS에는 정확한 origin만 입력해 주세요.');
  }
  const host = env.HOST ?? '127.0.0.1';
  if (!isIP(host) && host !== 'localhost') throw new Error('HOST는 바인딩할 IP 또는 localhost여야 합니다.');
  const trustedProxyIps = (env.TRUSTED_PROXY_IPS ?? '').split(',').map(value => value.trim()).filter(Boolean);
  if (trustedProxyIps.some(value => !isIP(value))) throw new Error('TRUSTED_PROXY_IPS에는 정확한 프록시 IP만 입력해 주세요.');
  return {
    host, trustedProxyIps,
    port: positiveInteger(env.PORT, 3100, 'PORT', 65535),
    maxUploadBytes: positiveInteger(env.MAX_UPLOAD_MB, 500, 'MAX_UPLOAD_MB', 2048) * 1024 * 1024,
    maxConcurrentUploads: positiveInteger(env.MAX_CONCURRENT_UPLOADS, 2, 'MAX_CONCURRENT_UPLOADS', 20),
    uploadTimeoutMs: positiveInteger(env.UPLOAD_TIMEOUT_SECONDS, 1800, 'UPLOAD_TIMEOUT_SECONDS', 7200) * 1000,
    tempDir: path.resolve(env.UPLOAD_TEMP_DIR ?? './data/tmp'),
    adminToken: env.ADMIN_API_TOKEN, allowedOrigins: origins, databaseUrl: env.DATABASE_URL,
    ftp: {
      host: env.FTP_HOST,
      port: positiveInteger(env.FTP_PORT, secure === 'implicit' ? 990 : 21, 'FTP_PORT', 65535),
      user: env.FTP_USER, password: env.FTP_PASSWORD,
      secure: secure === 'implicit' ? 'implicit' : secure === 'true',
      remoteDir: dir, publicBaseUrl: httpsBase(env.VIDEO_PUBLIC_BASE_URL),
      timeoutMs: positiveInteger(env.FTP_TIMEOUT_SECONDS, 120, 'FTP_TIMEOUT_SECONDS', 3600) * 1000,
    },
  };
}
