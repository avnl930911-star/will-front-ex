import assert from 'node:assert/strict';
import test from 'node:test';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import {
  MAX_SERVERLESS_BODY_BYTES,
  awsResultToWebResponse,
  createNextRuntime,
  createReadOnlySeedStore,
  loadNextRuntimeConfig,
  webRequestToAwsEvent,
} from '../server/next-runtime.mjs';
import { issueSession } from '../server/auth.mjs';

const secret = 'next-runtime-test-secret-at-least-thirty-two-characters';
const bearer = 'next-runtime-test-admin-token-at-least-thirty-two-characters';

function sampleState() {
  return {
    version: 4,
    records: {
      videos: [
        { id: 'free-1', title: '무료', expert: '골드마스터', category: '분석', amount: 0, visibility: '공개', image: '/free.jpg', videoUrl: '/media/sample.mp4', duration: '01:00', date: '2026-10-01', content: '<b>무료 설명</b>' },
        { id: 'paid-1', title: '유료', expert: '꽃게', category: '교육', amount: 20000, visibility: '공개', image: '/paid.jpg', videoUrl: 'https://media.example.test/paid.mp4', duration: '02:00', date: '2026-10-02', content: '유료 설명' },
      ],
      members: [], products: [], articles: [],
    },
    logs: [],
  };
}

async function setup(t, { vercel = false, secureOrigin = false } = {}) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'willclub-next-runtime-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await writeFile(path.join(directory, 'seed.json'), JSON.stringify(sampleState()));
  await writeFile(path.join(directory, 'sample.mp4'), Buffer.from('0123456789abcdef'));
  const siteOrigin = secureOrigin ? 'https://will.example.test' : 'http://localhost:4300';
  const env = {
    NODE_ENV: vercel ? 'production' : 'development',
    SITE_ORIGIN: vercel ? undefined : siteOrigin,
    ...(vercel ? { VERCEL: '1', VERCEL_URL: 'willclub-preview.vercel.app' } : {}),
    MANUS_PROJECT_ID: 'test-app', MANUS_JWT_SECRET: secret,
    WILLCLUB_ADMIN_OPEN_IDS: 'admin-open-id', ADMIN_API_TOKEN: bearer,
    ...(secureOrigin ? { SITE_ORIGIN: siteOrigin, MANUS_OAUTH_PORTAL_URL: 'https://portal.example.test', MANUS_OAUTH_API_URL: 'https://api.example.test' } : {}),
    STATE_FILE: 'runtime/state.json', SEED_FILE: 'seed.json',
    LOCAL_VIDEO_DIRECTORY: 'runtime/media', FIXTURES_DIRECTORY: '.',
    VIDEO_METADATA_FILE: 'runtime/video-metadata.json', UPLOAD_TEMP_DIR: 'runtime/tmp',
  };
  const runtime = await createNextRuntime({ env, cwd: directory });
  t.after(() => runtime.close());
  return { directory, env, runtime, siteOrigin: runtime.config.siteOrigin };
}

async function body(response) {
  assert.match(response.headers.get('content-type') || '', /application\/json/);
  return response.json();
}

test('Next runtime bridge retains existing native API behavior, CSRF, query values, pricing and Range media', async t => {
  const { runtime, siteOrigin } = await setup(t);

  const event = await webRequestToAwsEvent(new Request(`${siteOrigin}/api/catalog?tag=one&tag=two&encoded=%2Fkeep`));
  assert.equal(event.path, '/api/catalog');
  assert.deepEqual(event.multiValueQueryStringParameters, { tag: ['one', 'two'], encoded: ['/keep'] });
  const encodedPath = await webRequestToAwsEvent(new Request(`${siteOrigin}/api/catalog/%ED%85%8C%EC%8A%A4%ED%8A%B8`));
  assert.equal(encodedPath.path, '/api/catalog/%ED%85%8C%EC%8A%A4%ED%8A%B8');

  const health = await runtime.handle(new Request(`${siteOrigin}/health`));
  assert.equal(health.status, 200);
  assert.deepEqual(await body(health), { ok: true, service: 'willclub-next' });

  const catalog = await runtime.handle(new Request(`${siteOrigin}/api/catalog?tag=one&tag=two`));
  const catalogBody = await body(catalog);
  assert.equal(catalogBody.items.find(item => item.id === 'paid-1').price, 20000);
  assert.equal(JSON.stringify(catalogBody).includes('media.example.test'), false);

  const session = await runtime.handle(new Request(`${siteOrigin}/api/session`));
  assert.deepEqual(await body(session), { user: null, csrfToken: null });

  const anonymous = await runtime.handle(new Request(`${siteOrigin}/api/admin/state`));
  assert.equal(anonymous.status, 401);
  assert.equal((await body(anonymous)).error.code, 'AUTH_REQUIRED');

  const signed = await issueSession({ openId: 'admin-open-id' }, runtime.config.auth, 'csrf-next-runtime');
  const cookie = `webdev_app_session=${encodeURIComponent(signed.token)}`;
  const stateView = await runtime.handle(new Request(`${siteOrigin}/api/admin/state`, { headers: { Cookie: cookie } }));
  assert.equal(stateView.status, 200);
  const current = await body(stateView);
  const browserSave = await runtime.handle(new Request(`${siteOrigin}/api/admin/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, Origin: siteOrigin, 'X-CSRF-Token': 'csrf-next-runtime', 'If-Match': '0', 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: current.state }),
  }));
  assert.equal(browserSave.status, 200);
  assert.equal((await body(browserSave)).revision, 1);

  const bearerView = await runtime.handle(new Request(`${siteOrigin}/api/admin/state`, { headers: { Authorization: `Bearer ${bearer}` } }));
  assert.equal((await body(bearerView)).revision, 1);

  const paid = await runtime.handle(new Request(`${siteOrigin}/api/catalog/paid-1/playback`));
  assert.equal(paid.status, 403);
  assert.equal((await body(paid)).error.code, 'PURCHASE_REQUIRED');

  const media = await runtime.handle(new Request(`${siteOrigin}/media/sample.mp4`));
  assert.equal(media.status, 200);
  const etag = media.headers.get('etag');
  assert.ok(etag);
  const unmodified = await runtime.handle(new Request(`${siteOrigin}/media/sample.mp4`, { headers: { 'If-None-Match': etag } }));
  assert.equal(unmodified.status, 304);
  assert.equal(await unmodified.text(), '');

  const range = await runtime.handle(new Request(`${siteOrigin}/media/sample.mp4`, { headers: { Range: 'bytes=0-15' } }));
  assert.equal(range.status, 206);
  assert.equal(range.headers.get('content-range'), 'bytes 0-15/16');
  assert.deepEqual(Buffer.from(await range.arrayBuffer()), Buffer.from('0123456789abcdef'));

  const logout = await runtime.handle(new Request(`${siteOrigin}/auth/logout`, {
    method: 'POST', headers: { Cookie: cookie, Origin: siteOrigin, 'X-CSRF-Token': 'csrf-next-runtime' },
  }));
  assert.equal(logout.status, 204);
  assert.equal(await logout.text(), '');
});

test('bridge preserves redirect location and multiple cookie flags from existing auth routes', async t => {
  const { runtime } = await setup(t, { secureOrigin: true });
  const login = await runtime.handle(new Request('https://will.example.test/auth/login'));
  assert.equal(login.status, 302);
  assert.match(login.headers.get('location') || '', /^https:\/\/portal\.example\.test\/app-auth\?/);
  const cookies = login.headers.getSetCookie();
  assert.equal(cookies.length, 1);
  assert.match(cookies[0], /Path=\/auth\/callback/);
  assert.match(cookies[0], /HttpOnly/);
  assert.match(cookies[0], /Secure/);
  assert.match(cookies[0], /SameSite=None/);

  const multipleCookies = awsResultToWebResponse({
    statusCode: 200, isBase64Encoded: true, body: Buffer.from('{"ok":true}').toString('base64'),
    headers: { 'content-type': 'application/json' },
    multiValueHeaders: { 'set-cookie': ['first=1; HttpOnly', 'second=2; Secure'] },
  });
  assert.deepEqual(multipleCookies.headers.getSetCookie(), ['first=1; HttpOnly', 'second=2; Secure']);
});

test('Vercel uses validated read-only seed storage, retains public reads, and gates persistence after authentication', async t => {
  const { directory, env, runtime } = await setup(t, { vercel: true });
  const config = loadNextRuntimeConfig(env, directory);
  assert.equal(config.isVercel, true);
  assert.equal(config.siteOrigin, 'https://willclub-preview.vercel.app');
  for (const target of [config.dataDirectory, config.stateFile, config.mediaDirectory, config.videoMetadataFile, config.uploadTempDirectory]) {
    assert.equal(target.startsWith('/tmp/willclub-nextjs'), true);
    assert.equal(target.startsWith(directory), false);
  }

  const directStore = await createReadOnlySeedStore({ seedFile: path.join(directory, 'seed.json') });
  const first = await directStore.snapshot();
  first.state.records.videos[0].title = '변조';
  assert.equal((await directStore.snapshot()).state.records.videos[0].title, '무료');
  await assert.rejects(directStore.replace(0, first.state), error => error.status === 503 && error.code === 'PERSISTENT_STORAGE_REQUIRED');

  const publicCatalog = await runtime.handle(new Request(`${config.siteOrigin}/api/catalog`));
  assert.equal(publicCatalog.status, 200);
  assert.equal((await body(publicCatalog)).items.length, 2);
  await assert.rejects(readFile(config.stateFile), error => error.code === 'ENOENT');

  const anonymousWrite = await runtime.handle(new Request(`${config.siteOrigin}/api/admin/state`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ revision: 0, state: sampleState() }) }));
  assert.equal(anonymousWrite.status, 401);
  assert.equal((await body(anonymousWrite)).error.code, 'AUTH_REQUIRED');

  const signed = await issueSession({ openId: 'admin-open-id' }, config.auth, 'csrf-vercel');
  const cookie = `webdev_app_session=${encodeURIComponent(signed.token)}`;
  const authenticatedRead = await runtime.handle(new Request(`${config.siteOrigin}/api/admin/state`, { headers: { Cookie: cookie } }));
  assert.equal(authenticatedRead.status, 200);
  const blocked = await runtime.handle(new Request(`${config.siteOrigin}/api/admin/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, Origin: config.siteOrigin, 'X-CSRF-Token': 'csrf-vercel', 'Content-Type': 'application/json' },
    body: JSON.stringify({ revision: 0, state: sampleState() }),
  }));
  assert.equal(blocked.status, 503);
  assert.equal((await body(blocked)).error.code, 'PERSISTENT_STORAGE_REQUIRED');

  const upload = await runtime.handle(new Request(`${config.siteOrigin}/api/admin/videos`, { method: 'POST', headers: { Authorization: `Bearer ${bearer}` } }));
  assert.equal(upload.status, 503);
  assert.equal((await body(upload)).error.code, 'PERSISTENT_STORAGE_REQUIRED');
  assert.equal(MAX_SERVERLESS_BODY_BYTES, 4 * 1024 * 1024);
});
