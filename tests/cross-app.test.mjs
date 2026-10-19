import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, rm } from 'node:fs/promises';
import request from 'supertest';
import { createApplication, loadServerConfig } from '../server/index.mjs';

test('실제 MP4 업로드→관리자 등록→고객 카탈로그/Range 재생→비공개·유료 상태 전환', async t => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'willclub-cross-app-'));
  const token = 'integration-only-admin-token-32-characters-or-more';
  const config = loadServerConfig({
    NODE_ENV: 'development', SITE_ORIGIN: 'http://localhost:4300', ADMIN_API_TOKEN: token,
    STATE_FILE: path.join(directory, 'state.json'), SEED_FILE: 'data/seed.json',
    LOCAL_VIDEO_DIRECTORY: path.join(directory, 'media'), VIDEO_METADATA_FILE: path.join(directory, 'videos.json'),
    UPLOAD_TEMP_DIR: path.join(directory, 'tmp'),
  });
  const service = await createApplication({ config });
  t.after(async () => { await service.close(); await rm(directory, { recursive: true, force: true }); });
  const authorization = `Bearer ${token}`;
  const uploaded = await request(service.app).post('/api/admin/videos').set('Authorization', authorization)
    .field('title', '통합 검증 강의').field('description', '업로드 검증용 강의 설명').attach('video', 'fixtures/sample.mp4').expect(201);
  const media = uploaded.body.video;
  const mediaPath = new URL(media.url).pathname;
  await request(service.app).get(mediaPath).expect(403);
  const snapshot = (await request(service.app).get('/api/admin/state').set('Authorization', authorization).expect(200)).body;
  const state = snapshot.state;
  state.records.videos.unshift({ id: media.id, title: media.title, expert: '골드마스터', category: '무료영상', amount: 0,
    visibility: '공개', videoUrl: media.url, hostedVideoId: media.id, date: '2026-10-17', duration: '00:08', views: 0,
    image: '', content: '새로 수정한 강의 설명', frontend: { description: '오래된 설명', hue: 210 } });
  let response = await request(service.app).put('/api/admin/state').set('Authorization', authorization)
    .send({ state, revision: snapshot.revision }).expect(200);
  const listed = (await request(service.app).get('/api/catalog').expect(200)).body.items.find(row => row.id === media.id);
  assert.equal(listed.hasMedia, true); assert.equal(listed.paid, false); assert.equal(listed.sub, 'free');
  assert.equal(listed.hue, 210); assert.equal(listed.description, '새로 수정한 강의 설명');
  assert.equal('videoUrl' in listed, false);
  const playback = await request(service.app).get(`/api/catalog/${media.id}/playback`).expect(200);
  assert.equal(playback.body.url, media.url);
  const range = await request(service.app).get(mediaPath).set('Range', 'bytes=0-31').expect(206);
  assert.match(range.headers['content-range'], /^bytes 0-31\//);
  assert.equal(range.headers['content-length'], '32');
  const row = state.records.videos[0]; row.visibility = '비공개';
  response = await request(service.app).put('/api/admin/state').set('Authorization', authorization)
    .send({ state, revision: response.body.revision }).expect(200);
  assert.equal((await request(service.app).get('/api/catalog')).body.items.some(v => v.id === row.id), false);
  await request(service.app).get(`/api/catalog/${media.id}/playback`).expect(404);
  await request(service.app).get(mediaPath).expect(403);
  row.visibility = '공개'; row.amount = 12345; row.category = '시황분석';
  await request(service.app).put('/api/admin/state').set('Authorization', authorization)
    .send({ state, revision: response.body.revision }).expect(200);
  const paid = (await request(service.app).get('/api/catalog')).body.items.find(v => v.id === row.id);
  assert.equal(paid.paid, true); assert.equal(paid.price, 12345); assert.equal(paid.sub, 'market');
  await request(service.app).get(`/api/catalog/${media.id}/playback`).expect(403);
  await request(service.app).get(mediaPath).expect(403);
  await request(service.app).get('/api/videos').expect(401);
});
