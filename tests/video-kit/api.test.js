import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import request from 'supertest';
import { mkdtemp, readdir, rm, readFile, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createVideoRouter } from '../../server/video-kit/router.js';
import { JsonVideoRepository } from '../../server/video-kit/repositories/json-repository.js';
import { LocalStorage } from '../../server/video-kit/storage/local-storage.js';
import { bearerAdmin, exactCors } from '../../server/video-kit/http.js';
import { loadConfig } from '../../server/video-kit/config.js';

const sample = path.resolve('fixtures/sample.mp4');
const token = 'test-token-not-a-production-secret-123456';
const quietLogger = { error() {} };

async function setup(t, options = {}) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'video-api-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const repository = options.repository ?? new JsonVideoRepository(path.join(directory, 'db.json'));
  const storage = options.storage ?? new LocalStorage(path.join(directory, 'media'), 'https://media.example.test/videos/');
  const tempDir = path.join(directory, 'tmp');
  const app = express();
  app.use('/api', await createVideoRouter({ authenticateAdmin: bearerAdmin(token), repository, storage, tempDir,
    rateLimitUploads: false, logger: quietLogger, ...options }));
  return { app, repository, storage, tempDir, directory };
}

function upload(app, title = '영상 테스트') {
  return request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`).field('title', title).field('description', '직접 재생 확인').attach('video', sample);
}

async function emptyTemp(tempDir) {
  // 응답 전후 finally 정리가 끝날 때까지 짧게 대기한다.
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (!(await readdir(tempDir)).length) return;
    await new Promise(resolve => setTimeout(resolve, 10));
  }
  assert.deepEqual(await readdir(tempDir), []);
}

test('관리자 인증 미들웨어 없이 라우터를 만들 수 없다', async () => {
  await assert.rejects(createVideoRouter({}), /관리자 인증/);
});

test('유효한 MP4 업로드 후 목록·상세에서 미디어 주소를 반환한다', async t => {
  const { app, tempDir, directory } = await setup(t);
  const response = await upload(app).expect(201);
  const video = response.body.video;
  assert.equal(video.mimeType, 'video/mp4');
  assert.ok(video.url.startsWith('https://media.example.test/videos/'));
  assert.equal(video.sizeBytes, (await stat(sample)).size);
  assert.equal('storageKey' in video, false);
  assert.equal('originalName' in video, false);
  const actual = await readFile(path.join(directory, 'media', `${video.id}.mp4`));
  assert.deepEqual(actual, await readFile(sample));
  const list = await request(app).get('/api/videos').expect(200);
  assert.equal(list.body.total, 1);
  assert.equal(list.body.items[0].id, video.id);
  assert.equal(list.headers['cache-control'], 'no-store');
  const detail = await request(app).get(`/api/videos/${video.id}`).expect(200);
  assert.equal(detail.body.video.url, video.url);
  await emptyTemp(tempDir);
});

test('인증되지 않은 업로드는 파일·FTP·DB 작업 전에 차단된다', async t => {
  const { app, tempDir, repository } = await setup(t);
  await request(app).post('/api/admin/videos').field('title', '허용 안 됨').attach('video', sample).expect(401);
  assert.deepEqual(await readdir(tempDir), []);
  assert.equal((await repository.list({ page: 1, pageSize: 12 })).total, 0);
});

test('빈 제목을 차단하고 임시 파일을 삭제한다', async t => {
  const { app, tempDir } = await setup(t);
  const result = await upload(app, ' ').expect(400);
  assert.equal(result.body.error.code, 'INVALID_TITLE');
  await emptyTemp(tempDir);
});

test('실제 파일 내용이 영상이 아니면 MP4 확장자라도 차단한다', async t => {
  const { app, tempDir } = await setup(t);
  const result = await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`)
    .field('title', '위장 파일').attach('video', Buffer.from('<script>bad</script>'), { filename: 'fake.mp4', contentType: 'video/mp4' }).expect(415);
  assert.equal(result.body.error.code, 'UNSUPPORTED_VIDEO');
  await emptyTemp(tempDir);
});

test('크기 제한 초과는 413을 반환하고 파일을 삭제한다', async t => {
  const { app, tempDir } = await setup(t, { maxUploadBytes: 100 });
  const result = await upload(app).expect(413);
  assert.equal(result.body.error.code, 'LIMIT_FILE_SIZE');
  await emptyTemp(tempDir);
});

test('파일 없는 요청 및 빈 파일을 차단한다', async t => {
  const { app, tempDir } = await setup(t);
  const missing = await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`).field('title', '파일 없음').expect(400);
  assert.equal(missing.body.error.code, 'VIDEO_REQUIRED');
  const empty = await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`).field('title', '빈 파일')
    .attach('video', Buffer.alloc(0), 'empty.mp4').expect(400);
  assert.equal(empty.body.error.code, 'EMPTY_VIDEO');
  await emptyTemp(tempDir);
});

test('잘못된 파일 필드명과 여러 파일을 차단한다', async t => {
  const { app, tempDir } = await setup(t);
  await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`).field('title', '다른 필드').attach('other', sample).expect(400);
  await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`).field('title', '여러 파일').attach('video', sample).attach('video', sample).expect(400);
  await emptyTemp(tempDir);
});

test('과도한 설명과 제목을 차단한다', async t => {
  const { app, tempDir } = await setup(t);
  await upload(app, '가'.repeat(121)).expect(400);
  const response = await request(app).post('/api/admin/videos').set('Authorization', `Bearer ${token}`)
    .field('title', '긴 설명').field('description', '가'.repeat(2001)).attach('video', sample).expect(400);
  assert.equal(response.body.error.code, 'INVALID_DESCRIPTION');
  await emptyTemp(tempDir);
});

test('FTP 전송 실패는 DB에 기록하지 않고 내부 오류를 노출하지 않는다', async t => {
  const storage = { async upload() { throw new Error('PASSWORD=private-value'); }, async remove() {} };
  const { app, repository, tempDir } = await setup(t, { storage });
  const response = await upload(app).expect(502);
  assert.equal(response.body.error.code, 'VIDEO_STORAGE_FAILED');
  assert.ok(!JSON.stringify(response.body).includes('private-value'));
  assert.equal((await repository.list({ page: 1, pageSize: 12 })).total, 0);
  await emptyTemp(tempDir);
});

test('DB 저장 실패 시 이미 전송한 원격 파일을 정리한다', async t => {
  const removed = [];
  const repository = { async insert() { throw new Error('DB down'); }, async list() { return { items: [], total: 0 }; }, async getById() { return null; } };
  const storage = { async upload(_file, key) { return { key, url: `https://media.example.test/${key}` }; }, async remove(key) { removed.push(key); } };
  const { app, tempDir } = await setup(t, { repository, storage });
  const result = await upload(app).expect(503);
  assert.equal(result.body.error.code, 'METADATA_SAVE_FAILED');
  await emptyTemp(tempDir);
  assert.equal(removed.length, 1);
  assert.match(removed[0], /\.mp4$/);
});

test('동시 업로드 한도에 도달하면 새 업로드를 503으로 차단한다', async t => {
  let release;
  let started;
  const waiting = new Promise(resolve => { release = resolve; });
  const begun = new Promise(resolve => { started = resolve; });
  const storage = { async upload(_file, key) { started(); await waiting; return { key, url: `https://media.example.test/${key}` }; }, async remove() {} };
  const { app } = await setup(t, { storage, maxConcurrentUploads: 1 });
  const first = upload(app).then(result => result);
  await begun;
  const busy = await upload(app).expect(503);
  assert.equal(busy.body.error.code, 'UPLOAD_BUSY');
  assert.equal(busy.headers['retry-after'], '10');
  release();
  assert.equal((await first).status, 201);
});

test('페이지네이션 범위·형식을 검증하고 상세 404를 구분한다', async t => {
  const { app } = await setup(t);
  for (const query of ['page=0', 'page=-1', 'page=1.5', 'pageSize=101', 'page[a]=1']) {
    await request(app).get(`/api/videos?${query}`).expect(400);
  }
  await request(app).get('/api/videos/not-uuid').expect(400);
  await request(app).get('/api/videos/00000000-0000-4000-8000-000000000099').expect(404);
});

test('조회 인증 미들웨어도 기존 회원 권한에 연결할 수 있다', async t => {
  const { app } = await setup(t, { authorizeRead: (_req, res) => res.status(403).json({ error: { code: 'MEMBER_REQUIRED' } }) });
  await request(app).get('/api/videos').expect(403);
});

test('JSON 저장소는 단일 프로세스의 병렬 INSERT를 직렬화한다', async t => {
  const { repository } = await setup(t);
  const rows = Array.from({ length: 20 }, (_, index) => ({ id: String(index), createdAt: new Date().toISOString() }));
  await Promise.all(rows.map(row => repository.insert(row)));
  assert.equal((await repository.list({ page: 1, pageSize: 100 })).total, 20);
  assert.equal((await repository.list({ page: 2, pageSize: 7 })).items.length, 7);
});

test('허용되지 않은 Origin은 CORS에서 차단한다', async () => {
  const app = express();
  app.use(exactCors(['https://site.example.test']));
  app.get('/', (_req, res) => res.json({ ok: true }));
  app.use((error, _req, res, _next) => res.status(error.status).json({ error: 'blocked' }));
  await request(app).get('/').set('Origin', 'https://evil.example.test').expect(403);
  const allowed = await request(app).get('/').set('Origin', 'https://site.example.test').expect(200);
  assert.equal(allowed.headers['access-control-allow-origin'], 'https://site.example.test');
});

test('운영 설정은 필수 값·HTTPS·FTP 경로·토큰 길이를 검증한다', () => {
  const valid = { FTP_HOST: 'ftp.example.test', FTP_USER: 'u', FTP_PASSWORD: 'p', FTP_REMOTE_DIR: '/www/videos',
    VIDEO_PUBLIC_BASE_URL: 'https://media.example.test/videos', DATABASE_URL: 'mysql://u:p@localhost/db', ADMIN_API_TOKEN: token };
  assert.equal(loadConfig(valid).ftp.publicBaseUrl, 'https://media.example.test/videos/');
  assert.equal(loadConfig(valid).ftp.secure, true);
  assert.throws(() => loadConfig({ ...valid, FTP_REMOTE_DIR: '../videos' }));
  assert.throws(() => loadConfig({ ...valid, VIDEO_PUBLIC_BASE_URL: 'http://media.example.test/' }));
  assert.throws(() => loadConfig({ ...valid, ADMIN_API_TOKEN: 'short' }));
  assert.throws(() => loadConfig({ ...valid, ALLOWED_ORIGINS: '*' }));
  assert.throws(() => loadConfig({ ...valid, MAX_UPLOAD_MB: 'NaN' }));
});


test('DB가 INSERT 후 응답 유실로 오류를 던져도 재확인 후 파일을 보존한다', async t => {
  const rows = new Map();
  const removed = [];
  const repository = {
    async insert(video) { rows.set(video.id, video); throw new Error('commit acknowledgement lost'); },
    async getById(id) { return rows.get(id) ?? null; },
    async list() { return { items: [...rows.values()], total: rows.size }; },
  };
  const storage = { async upload(_file, key) { return { key, url: `https://media.example.test/${key}` }; }, async remove(key) { removed.push(key); } };
  const { app, tempDir } = await setup(t, { repository, storage });
  const result = await upload(app).expect(201);
  assert.equal(rows.size, 1);
  assert.equal(result.body.video.id, [...rows.keys()][0]);
  assert.deepEqual(removed, []);
  await emptyTemp(tempDir);
});

test('DB 저장 결과를 재확인할 수 없으면 원격 파일을 보존하고 ID를 알려준다', async t => {
  const removed = [];
  const repository = {
    async insert() { throw new Error('connection lost'); },
    async getById() { throw new Error('database unavailable'); },
    async list() { return { items: [], total: 0 }; },
  };
  const storage = { async upload(_file, key) { return { key, url: `https://media.example.test/${key}` }; }, async remove(key) { removed.push(key); } };
  const { app, tempDir } = await setup(t, { repository, storage });
  const result = await upload(app).expect(503);
  assert.equal(result.body.error.code, 'METADATA_STATUS_UNKNOWN');
  assert.match(result.body.error.details.videoId, /^[a-f0-9-]{36}$/);
  assert.deepEqual(removed, []);
  await emptyTemp(tempDir);
});

test('DB 재확인에서 일치하지 않는 행이면 무조건 삭제하지 않는다', async t => {
  const removed = [];
  const repository = {
    async insert() { throw new Error('uncertain'); },
    async getById() { return { storageKey: 'different' }; },
    async list() { return { items: [], total: 0 }; },
  };
  const storage = { async upload(_file, key) { return { key, url: `https://media.example.test/${key}` }; }, async remove(key) { removed.push(key); } };
  const { app } = await setup(t, { repository, storage });
  const result = await upload(app).expect(503);
  assert.equal(result.body.error.code, 'METADATA_STATUS_UNKNOWN');
  assert.deepEqual(removed, []);
});

test('신뢰한 로컬 프록시에서만 X-Forwarded-For를 사용하고 가짜 앞쪽 IP를 무시한다', async () => {
  const trusted = express();
  trusted.set('trust proxy', ['127.0.0.1', '::1']);
  trusted.get('/', (req, res) => res.json({ ip: req.ip }));
  const a = await request(trusted).get('/').set('X-Forwarded-For', '192.0.2.200, 203.0.113.10').expect(200);
  assert.equal(a.body.ip, '203.0.113.10');
  const untrusted = express();
  untrusted.set('trust proxy', ['192.0.2.1']);
  untrusted.get('/', (req, res) => res.json({ ip: req.ip }));
  const b = await request(untrusted).get('/').set('X-Forwarded-For', '203.0.113.99').expect(200);
  assert.notEqual(b.body.ip, '203.0.113.99');
});

test('운영 API는 기본 loopback 바인딩이고 전체 프록시 신뢰를 허용하지 않는다', () => {
  const valid = { FTP_HOST: 'ftp.example.test', FTP_USER: 'u', FTP_PASSWORD: 'p', FTP_REMOTE_DIR: '/videos',
    VIDEO_PUBLIC_BASE_URL: 'https://media.example.test/videos/', DATABASE_URL: 'mysql://u:p@localhost/db', ADMIN_API_TOKEN: token };
  assert.equal(loadConfig(valid).host, '127.0.0.1');
  assert.deepEqual(loadConfig(valid).trustedProxyIps, []);
  assert.deepEqual(loadConfig({ ...valid, TRUSTED_PROXY_IPS: '127.0.0.1,::1' }).trustedProxyIps, ['127.0.0.1', '::1']);
  assert.throws(() => loadConfig({ ...valid, TRUSTED_PROXY_IPS: 'true' }));
  assert.throws(() => loadConfig({ ...valid, TRUSTED_PROXY_IPS: '*' }));
});
