import assert from 'node:assert/strict';
import test from 'node:test';
import express from 'express';
import request from 'supertest';
import {
  deploymentDecision,
  deploymentTarget,
  publicSiteOrigin,
} from '../lib/deployment.mjs';
import { deploymentGuard } from '../server/deployment-policy.mjs';

const frontendEnv = {
  WILLCLUB_DEPLOY_TARGET: 'frontend',
  NEXT_PUBLIC_ADMIN_SITE_URL: 'https://admin.example.test',
};
const adminEnv = {
  WILLCLUB_DEPLOY_TARGET: 'admin',
  NEXT_PUBLIC_FRONT_SITE_URL: 'https://front.example.test',
};

function guardedApplication(env) {
  const app = express();
  // An authenticated admin must not weaken a deployment gate placed before auth routes.
  app.use((req, _res, next) => {
    req.willclubAuth = { user: { role: 'admin' } };
    next();
  });
  app.use(deploymentGuard(env));
  app.use((req, res) => res.status(200).json({ reached: true, path: req.path }));
  return app;
}

test('deploymentTarget은 명시 환경 변수를 우선하고 잘못된 값을 거절한다', () => {
  assert.equal(deploymentTarget({}), 'all');
  assert.equal(deploymentTarget({ WILLCLUB_DEPLOY_TARGET: 'admin' }), 'admin');
  assert.throws(() => deploymentTarget({ WILLCLUB_DEPLOY_TARGET: 'administrator' }), /all, frontend, admin/);
});

test('publicSiteOrigin은 안전한 origin만 수용하고 비밀 URL을 오류에 반영하지 않는다', () => {
  assert.equal(publicSiteOrigin('SITE', 'https://front.example.test'), 'https://front.example.test');
  assert.equal(publicSiteOrigin('SITE', 'http://localhost:3000'), 'http://localhost:3000');
  assert.throws(() => publicSiteOrigin('SITE', 'http://front.example.test'), /localhost/);
  assert.throws(() => publicSiteOrigin('SITE', 'https://front.example.test/path'), /경로/);
  assert.throws(() => publicSiteOrigin('SITE', 'https://secret-user:secret-pass@front.example.test'), error => {
    assert.match(error.message, /인증 정보/);
    assert.doesNotMatch(error.message, /secret-user|secret-pass/);
    return true;
  });
});

test('frontend 배포는 관리자 페이지를 안전하게 외부 관리자 origin으로 보낸다', async () => {
  const app = guardedApplication(frontendEnv);
  const response = await request(app).get('/admin/reports?tab=users').expect(302);
  assert.equal(response.headers.location, 'https://admin.example.test/admin/reports?tab=users');

  // protocol-relative/absolute 입력은 목적지로 승격되지 않는다.
  const unsafe = deploymentDecision('//evil.example/paidInfo', 'GET', adminEnv, 'https://admin.example.test');
  assert.equal(unsafe.status, 200);
});

test('frontend 배포는 percent encoded/case-insensitive 관리자 API를 역할과 무관하게 차단한다', async () => {
  const app = guardedApplication(frontendEnv);
  for (const path of ['/api/admin/state', '/api/%61dmin/state', '/api/EXPERT/state/', '/api/videos', '/api/%76ideos/abc']) {
    const response = await request(app).get(path).expect(403);
    assert.equal(response.body.error.code, 'ADMIN_API_UNAVAILABLE');
  }
  await request(app).get('/api/catalog/item').expect(200);
  const unavailable = await request(app).get('/api/private').expect(404);
  assert.equal(unavailable.body.error.code, 'FRONTEND_API_UNAVAILABLE');
});

test('frontend 관리자 리다이렉트는 구성 누락/동일 origin을 503 JSON으로 실패한다', async () => {
  const missing = guardedApplication({ WILLCLUB_DEPLOY_TARGET: 'frontend' });
  const missingResponse = await request(missing).get('/admin').expect(503);
  assert.equal(missingResponse.type, 'application/json');
  assert.equal(missingResponse.body.error.code, 'DEPLOYMENT_CONFIG_INVALID');

  const loop = deploymentDecision('/admin', 'GET', frontendEnv, 'https://admin.example.test');
  assert.equal(loop.status, 503);
  assert.equal(loop.error.code, 'DEPLOYMENT_REDIRECT_LOOP');
});

test('admin 배포는 루트를 로컬 /admin으로, 명시 공개 페이지를 프런트 origin으로 보낸다', async () => {
  const app = guardedApplication(adminEnv);
  const root = await request(app).get('/?source=mail').expect(302);
  assert.equal(root.headers.location, '/admin?source=mail');

  const publicPage = await request(app).get('/paidInfo?plan=gold').expect(302);
  assert.equal(publicPage.headers.location, 'https://front.example.test/paidInfo?plan=gold');
  await request(app).get('/admin/dashboard').expect(200);
  await request(app).get('/api/catalog').expect(200);
  await request(app).get('/_next/chunk.js').expect(200);
});

test('admin 공개 페이지의 프런트 구성 누락은 fallback 없이 JSON 503이며 all은 완전 no-op이다', async () => {
  const missing = guardedApplication({ WILLCLUB_DEPLOY_TARGET: 'admin' });
  const response = await request(missing).get('/guide').expect(503);
  assert.equal(response.body.error.code, 'DEPLOYMENT_CONFIG_INVALID');

  const all = guardedApplication({ WILLCLUB_DEPLOY_TARGET: 'all' });
  await request(all).get('/admin').expect(200);
  await request(all).get('/api/admin/state').expect(200);
  await request(all).get('/paidInfo').expect(200);
});
