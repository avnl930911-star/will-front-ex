import assert from 'node:assert/strict';
import test from 'node:test';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import request from 'supertest';
import { issueSession } from '../server/auth.mjs';
import { buildCatalog } from '../server/catalog.mjs';
import { createApplication, loadServerConfig } from '../server/index.mjs';
import { LocalStateStore } from '../server/state-store.mjs';

const signingSecret = 'test-manus-jwt-secret-at-least-thirty-two-characters-long';
const bearer = 'test-admin-api-token-at-least-thirty-two-characters-long';

function sampleState() {
  return {
    version: 4,
    records: {
      videos: [
        {
          id: 'free-1', title: '무료 영상', expert: '골드마스터', category: '분석', amount: 0,
          image: '/images/free.jpg', videoUrl: '/media/sample.mp4', duration: '08:00', date: '2026-10-01',
          visibility: '공개', views: 4, content: '<p>공개 설명</p>',
          frontend: { summary: '요약', description: '<b>설명</b>', hue:210, sub: 'analysis' },
        },
        {
          id: 'paid-1', title: '유료 영상', expert: '꽃게', category: '교육', amount: 20000,
          image: '/images/paid.jpg', videoUrl: 'https://media.example.test/paid.mp4', duration: '12:00', date: '2026-10-02',
          visibility: '공개', views: 7, content: '<p>비공개 URL 금지</p>',
          frontend: { summary: '유료 요약', description: '유료 설명', hue: '#333', sub: 'education' },
        },
      ],
      members: [{ id: 'member-1', name: '회원', group:'골드마스터반', phone: '010-0000-0000', email: 'member@example.test' }],
      products:[{id:'product-1',title:'골드마스터반',expert:'골드마스터'}],
      articles: [{ id: 'article-1', expert: '골드마스터', title: '글' }],
    },
    logs: [],
  };
}

async function temporaryConfig(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'willclub-server-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await writeFile(path.join(directory, 'seed.json'), JSON.stringify(sampleState()));
  const config = loadServerConfig({
    NODE_ENV: 'development', SITE_ORIGIN: 'http://localhost:4300',
    MANUS_PROJECT_ID: 'test-app', MANUS_JWT_SECRET: signingSecret,
    WILLCLUB_ADMIN_OPEN_IDS: 'admin-open-id', WILLCLUB_EXPERT_OPEN_IDS: '{"expert-open-id":"골드마스터"}',
    ADMIN_API_TOKEN: bearer,
    STATE_FILE: 'runtime/state.json', SEED_FILE: 'seed.json',
    LOCAL_VIDEO_DIRECTORY: 'runtime/media', FIXTURES_DIRECTORY: 'fixtures',
    VIDEO_METADATA_FILE: 'runtime/video-metadata.json', UPLOAD_TEMP_DIR: 'runtime/tmp',
  }, directory);
  return { directory, config };
}

test('LocalStateStore는 revision 충돌을 거절하고 원자적으로 영속화한다', async t => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'willclub-state-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const seedFile = path.join(directory, 'seed.json');
  const stateFile = path.join(directory, 'runtime', 'state.json');
  await writeFile(seedFile, JSON.stringify(sampleState()));
  const store = new LocalStateStore({ file: stateFile, seedFile });
  await store.initialize();
  const initial = await store.snapshot();
  assert.equal(initial.revision, 0);
  const next = structuredClone(initial.state);
  next.records.videos[0].title = '변경됨';
  assert.equal((await store.replace(0, next)).revision, 1);
  const stale = await store.replace(0, next);
  assert.deepEqual(stale, { ok: false, currentRevision: 1 });
  const persisted = JSON.parse(await readFile(stateFile, 'utf8'));
  assert.equal(persisted.revision, 1);
  assert.equal(persisted.state.records.videos[0].title, '변경됨');
});

test('공개 카탈로그는 영상 URL·회원 개인정보를 포함하지 않는다', () => {
  const catalog = buildCatalog(sampleState(), { siteOrigin: 'http://localhost:4300' });
  assert.equal(catalog.length, 2);
  assert.equal(catalog[0].hasMedia, true);
  assert.equal(catalog[0].expert, 'goldmaster');
  assert.equal(catalog[0].description, '공개 설명');
  assert.equal(catalog[0].hue,210);
  assert.equal(JSON.stringify(catalog).includes('videoUrl'), false);
  assert.equal(JSON.stringify(catalog).includes('010-0000'), false);
  assert.equal(JSON.stringify(catalog).includes('member@example'), false);
});

test('서명 오류는 인증되지 않고, 관리 상태 PUT은 origin과 CSRF 및 revision을 요구한다', async t => {
  const { config } = await temporaryConfig(t);
  const service = await createApplication({ config });
  t.after(() => service.close());
  const good = await issueSession({ openId: 'admin-open-id' }, config.auth, 'csrf-good');
  const wrong = await issueSession(
    { openId: 'admin-open-id' },
    { ...config.auth, secret: new TextEncoder().encode('different-test-secret-at-least-thirty-two-characters') },
    'csrf-good',
  );
  const cookie = token => `${'webdev_app_session'}=${encodeURIComponent(token)}`;
  await request(service.app).get('/api/admin/state').set('Cookie', cookie(wrong.token)).expect(401);
  await request(service.app).put('/api/admin/state').set('Cookie', cookie(good.token)).send({ revision: 0, state: sampleState() }).expect(403);
  await request(service.app).put('/api/admin/state').set('Cookie', cookie(good.token)).set('Origin', config.siteOrigin)
    .send({ revision: 0, state: sampleState() }).expect(403);
  const saved = await request(service.app).put('/api/admin/state').set('Cookie', cookie(good.token)).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', 'csrf-good').set('If-Match', '0').send({ state: sampleState() }).expect(200);
  assert.equal(saved.body.revision, 1);
  const conflict = await request(service.app).put('/api/admin/state').set('Cookie', cookie(good.token)).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', 'csrf-good').send({ revision: 0, state: sampleState() }).expect(409);
  assert.equal(conflict.body.error.code, 'STATE_REVISION_CONFLICT');
});

test('유료 재생 API는 URL을 반환하지 않고 PURCHASE_REQUIRED로 차단한다', async t => {
  const { config } = await temporaryConfig(t);
  const service = await createApplication({ config });
  t.after(() => service.close());
  const response = await request(service.app).get('/api/catalog/paid-1/playback').expect(403);
  assert.equal(response.body.error.code, 'PURCHASE_REQUIRED');
  assert.equal(JSON.stringify(response.body).includes('media.example.test'), false);
  const publicCatalog = await request(service.app).get('/api/catalog').expect(200);
  assert.equal(JSON.stringify(publicCatalog.body).includes('media.example.test'), false);
});

test('전문가는 자기 영상·글만 받고 회원 전화와 이메일 및 전체 상태 변경 권한은 받지 않는다', async t => {
  const { config } = await temporaryConfig(t);
  const service = await createApplication({ config });
  t.after(() => service.close());
  const expert = await issueSession({ openId: 'expert-open-id' }, config.auth, 'csrf-expert');
  const cookie = `webdev_app_session=${encodeURIComponent(expert.token)}`;
  const response = await request(service.app).get('/api/admin/state').set('Cookie', cookie).expect(200);
  assert.equal(response.body.state.records.videos.length, 1);
  assert.equal(response.body.state.records.videos[0].id, 'free-1');
  assert.equal(response.body.state.records.articles.length, 1);
  assert.equal('phone' in response.body.state.records.members[0], false);
  assert.equal('email' in response.body.state.records.members[0], false);
  await request(service.app).put('/api/admin/state').set('Cookie', cookie).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', 'csrf-expert').send({ revision: 0, state: sampleState() }).expect(403);
});

test('Bearer 관리자 자격증명은 서버 통합 PUT에서 CSRF 없이 허용하되 Origin 불일치는 차단한다', async t => {
  const { config } = await temporaryConfig(t);
  const service = await createApplication({ config });
  t.after(() => service.close());
  await request(service.app).get('/api/admin/state').set('Authorization', `Bearer ${bearer}`).expect(200);
  await request(service.app).put('/api/admin/state').set('Authorization', `Bearer ${bearer}`)
    .set('Origin', 'https://evil.example.test').send({ revision: 0, state: sampleState() }).expect(403);
  const response = await request(service.app).put('/api/admin/state').set('Authorization', `Bearer ${bearer}`)
    .send({ revision: 0, state: sampleState() }).expect(200);
  assert.equal(response.body.revision, 1);
});

test('전문가 담당 콘텐츠 저장은 영속화하되 타 전문가 항목과 전체 회원 정보는 덮어쓰지 않는다', async t => {
  const { config } = await temporaryConfig(t);
  const service = await createApplication({ config });
  t.after(() => service.close());
  const expert = await issueSession({ openId: 'expert-open-id' }, config.auth, 'csrf-expert');
  const cookie = `webdev_app_session=${encodeURIComponent(expert.token)}`;
  const snapshot = (await request(service.app).get('/api/admin/state').set('Cookie', cookie)).body;
  const records = { videos: snapshot.state.records.videos, articles: snapshot.state.records.articles };
  records.videos[0].title = '전문가 수정 영속화'; records.videos[0].views = 999999;
  const saved = await request(service.app).put('/api/expert/state').set('Cookie', cookie)
    .set('Origin', config.siteOrigin).set('X-CSRF-Token', 'csrf-expert')
    .send({ records, revision: snapshot.revision }).expect(200);
  const administrator = (await request(service.app).get('/api/admin/state').set('Authorization', `Bearer ${bearer}`)).body;
  assert.equal(administrator.state.records.videos.find(v=>v.id==='free-1').title, '전문가 수정 영속화');
  assert.equal(administrator.state.records.videos.find(v=>v.id==='free-1').views, 4);
  assert.equal(administrator.state.records.videos.find(v=>v.id==='paid-1').expert, '꽃게');
  assert.equal(administrator.state.records.members[0].phone, '010-0000-0000');
  assert.equal('phone' in saved.body.state.records.members[0], false);
  const foreign = { ...administrator.state.records.videos.find(v=>v.id==='paid-1'), expert:'골드마스터' };
  await request(service.app).put('/api/expert/state').set('Cookie', cookie)
    .set('Origin', config.siteOrigin).set('X-CSRF-Token', 'csrf-expert')
    .send({ records:{...records,videos:[...records.videos,foreign]}, revision:saved.body.revision }).expect(403);
  await request(service.app).put('/api/expert/state').set('Cookie', cookie)
    .set('Origin', config.siteOrigin).set('X-CSRF-Token', 'csrf-expert')
    .send({ records, revision:0 }).expect(409);
});
