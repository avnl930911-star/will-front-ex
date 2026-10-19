import 'dotenv/config';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { loadConfig } from './config.js';
import { FtpStorage } from './storage/ftp-storage.js';
import { MysqlVideoRepository } from './repositories/mysql-repository.js';
import { createVideoRouter } from './router.js';
import { bearerAdmin, exactCors, basicHeaders } from './http.js';

let repository;
try {
  const config = loadConfig();
  repository = await MysqlVideoRepository.connect(config.databaseUrl);
  const app = express();
  app.disable('x-powered-by');
  if (config.trustedProxyIps.length) app.set('trust proxy', config.trustedProxyIps);
  app.use(basicHeaders);
  app.use('/api', exactCors(config.allowedOrigins));
  app.use('/api/admin', rateLimit({ windowMs: 60_000, limit: 30, standardHeaders: 'draft-8', legacyHeaders: false,
    handler: (_req, res) => res.status(429).json({ error: { code: 'AUTH_RATE_LIMIT', message: '잠시 후 다시 시도해 주세요.' } }) }));
  app.get('/health', (_req, res) => res.json({ ok: true, service: 'video-api' }));
  app.use('/api', await createVideoRouter({
    authenticateAdmin: bearerAdmin(config.adminToken), repository, storage: new FtpStorage(config.ftp),
    tempDir: config.tempDir, maxUploadBytes: config.maxUploadBytes, maxConcurrentUploads: config.maxConcurrentUploads,
  }));
  app.use((_req, res) => res.status(404).json({ error: { code: 'NOT_FOUND', message: '요청 경로가 없습니다.' } }));
  app.use((error, _req, res, _next) => res.status(error.status === 403 ? 403 : 500).json({
    error: { code: error.status === 403 ? 'ORIGIN_FORBIDDEN' : 'INTERNAL_ERROR', message: '요청을 처리하지 못했습니다.' },
  }));
  const server = app.listen(config.port, config.host, () => console.log(`영상 API: ${config.host}:${config.port}. 프론트는 기존 사이트에서 제공합니다.`));
  server.requestTimeout = config.uploadTimeoutMs;
  server.headersTimeout = 60_000;
  server.timeout = config.uploadTimeoutMs;
  const shutdown = () => {
    console.log('진행 중 요청을 마친 후 종료합니다.');
    server.close(async () => { await repository.close(); process.exit(0); });
    setTimeout(() => process.exit(1), config.uploadTimeoutMs + 1000).unref();
  };
  process.once('SIGTERM', shutdown);
  process.once('SIGINT', shutdown);
} catch (error) {
  // DB/FTP 오류 원문에는 인증정보가 포함될 수 있어 출력하지 않는다.
  console.error('영상 API 시작 실패: 환경변수·DB 연결·hosted_videos 테이블을 확인해 주세요.', { name: error.name, code: error.code });
  if (repository) await repository.close();
  process.exitCode = 1;
}
