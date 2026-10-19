import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, access, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { createVideoRouter } from './router.js';
import { LocalStorage } from './storage/local-storage.js';
import { JsonVideoRepository } from './repositories/json-repository.js';
import { basicHeaders, exactCors } from './http.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.DEMO_PORT ?? 3100);
const mediaPort = Number(process.env.DEMO_MEDIA_PORT ?? 3101);
const origin = process.env.DEMO_PUBLIC_ORIGIN ?? `http://localhost:${port}`;
const mediaOrigin = process.env.DEMO_MEDIA_ORIGIN ?? `http://localhost:${mediaPort}`;
const directory = path.join(root, 'data/demo-media');
await mkdir(directory, { recursive: true });
const repository = new JsonVideoRepository(path.join(root, 'data/demo-videos.json'));
const sampleId = '00000000-0000-4000-8000-000000000001';
const sampleKey = `${sampleId}.mp4`;
try {
  const file = path.join(root, 'fixtures/sample.mp4');
  await access(file);
  if (!await repository.getById(sampleId)) {
    const sizeBytes = (await stat(file)).size;
    const hash = createHash('sha256');
    for await (const chunk of createReadStream(file)) hash.update(chunk);
    const storage = new LocalStorage(directory, `${mediaOrigin}/videos/`);
    const remote = await storage.upload(file, sampleKey, sizeBytes);
    await repository.insert({ id: sampleId, title: '호스팅 분리 재생 테스트', description: '8초 길이의 자체 제작 테스트 영상입니다. 실제 FTP가 아닌 별도 데모 미디어 서버에서 재생됩니다.',
      originalName: 'sample.mp4', storageKey: sampleKey, url: remote.url, mimeType: 'video/mp4', sizeBytes,
      sha256: hash.digest('hex'), createdAt: new Date().toISOString() });
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const mediaApp = express();
mediaApp.disable('x-powered-by');
mediaApp.use(basicHeaders);
mediaApp.use('/videos', (req, res, next) => {
  if (!/^\/[a-f0-9-]{36}\.(mp4|webm)$/.test(req.path)) return res.sendStatus(404);
  res.set('Cache-Control', 'public, max-age=3600');
  next();
}, express.static(directory, { dotfiles: 'deny', index: false, fallthrough: false }));
mediaApp.use((_req, res) => res.sendStatus(404));
const mediaServer = mediaApp.listen(mediaPort, '0.0.0.0', () => console.log(`데모 미디어 서버: ${mediaOrigin}`));

const app = express();
app.disable('x-powered-by');
app.use(basicHeaders);
app.use('/api', exactCors([origin, `http://localhost:${port}`]));
app.get('/health', (_req, res) => res.json({ ok: true, mode: 'demo' }));
app.get('/api/demo-info', (_req, res) => res.json({ mode: 'demo', maxUploadMB: 15, apiOrigin: origin, mediaOrigin,
  targetApiServer: '49.238.229.60', targetFtpHost: 'jnbstock3.mireene.com' }));
app.use('/api', await createVideoRouter({
  // 데모에서만 인증을 생략한다. 운영 라우터는 인증 미들웨어 없이는 생성되지 않는다.
  authenticateAdmin: (_req, _res, next) => next(), repository,
  storage: new LocalStorage(directory, `${mediaOrigin}/videos/`),
  tempDir: path.join(root, 'data/demo-tmp'), maxUploadBytes: 15 * 1024 * 1024, maxConcurrentUploads: 2,
}));
app.use(express.static(path.join(root, 'public'), { dotfiles: 'deny', index: 'index.html' }));
app.use((_req, res) => res.status(404).json({ error: { code: 'NOT_FOUND', message: '요청 경로가 없습니다.' } }));
app.use((error, _req, res, _next) => res.status(error.status === 403 ? 403 : 500).json({ error: { code: 'REQUEST_FAILED', message: '요청을 처리하지 못했습니다.' } }));
const server = app.listen(port, '0.0.0.0', () => console.log(`영상 연동 코드 시연: ${origin}\n주의: 운영 FTP 미접속. 공개 데모 업로드는 파일당 15MB, 전체 200MB로 제한됩니다.`));
server.requestTimeout = 120_000;
server.timeout = 120_000;
function shutdown() { server.close(); mediaServer.close(); }
process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
