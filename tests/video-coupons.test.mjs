import assert from 'node:assert/strict';
import test from 'node:test';
import os from 'node:os';
import path from 'node:path';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import request from 'supertest';
import { issueSession } from '../server/auth.mjs';
import { createApplication, loadServerConfig } from '../server/index.mjs';
import { listVideoCoupons, quoteVideoCoupon } from '../server/video-coupons.mjs';

const signingSecret = 'coupon-test-manus-jwt-secret-at-least-thirty-two-characters';
const now = new Date('2026-06-01T12:00:00.000Z');

function sampleState() {
  return {
    version: 4,
    records: {
      members: [
        { id: 'member-owner', loginId: 'owner-open-id', name: '동명이인', nickname: '같은닉네임', group: '무료회원', status: '정상' },
        { id: 'member-other', loginId: 'other-open-id', name: '동명이인', nickname: '같은닉네임', group: '무료회원', status: '정상' },
      ],
      videos: [
        { id: 'video-paid', title: '유료 공개 영상', amount: 100000, visibility: '공개', videoUrl: '/media/paid.mp4' },
        { id: 'video-free', title: '무료 공개 영상', amount: 0, visibility: '공개' },
        { id: 'video-private', title: '비공개 영상', amount: 100000, visibility: '비공개' },
      ],
      coupons: [
        {
          id: 'coupon-owner', title: '내 영상 할인', enabled: true, issueMethod: 'designated',
          targetMode: 'members', targetMemberIds: ['member-owner'], benefitType: 'amount', benefitValue: 30000,
          videoId: 'video-paid', start: '2020-01-01', end: '2030-12-31', usageUnlimited: true,
        },
        {
          id: 'coupon-code', title: '코드 전용 할인', enabled: true, issueMethod: 'couponCode', code: 'VIDEO-25',
          targetMode: 'members', targetMemberIds: ['member-owner'], benefitType: 'percentage', benefitValue: 25,
          targetVideoId: 'video-paid', startAt: '2020-01-01T00:00', endAt: '2030-12-31T23:59', usageUnlimited: true,
        },
        {
          id: 'coupon-other', title: '다른 회원 쿠폰', enabled: true, issueMethod: 'designated',
          targetMode: 'members', targetMemberIds: ['member-other'], benefitType: 'amount', benefitValue: 90000,
          videoIds: ['video-paid'], start: '2020-01-01', end: '2030-12-31', usageUnlimited: true,
        },
        {
          id: 'coupon-wrong-video', title: '다른 영상 전용', enabled: true, issueMethod: 'designated',
          targetMode: 'members', targetMemberIds: ['member-owner'], benefitType: 'amount', benefitValue: 99000,
          scope: 'singleVideo', scopeVideoIds: ['video-free'], start: '2020-01-01', end: '2030-12-31', usageUnlimited: true,
        },
        {
          id: 'coupon-exhausted', title: '소진 쿠폰', enabled: true, issueMethod: 'couponCode', code: 'SOLD-OUT', couponQuantity: 1,
          usedCount: 1, targetMode: 'members', targetMemberIds: ['member-owner'], benefitType: 'amount', benefitValue: 1,
          scope: 'singleVideo', scopeVideoIds: ['video-paid'], start: '2020-01-01', end: '2030-12-31', usageUnlimited: true,
        },
        {
          id: 'coupon-malformed', title: '잘못된 금액', enabled: true, issueMethod: 'designated',
          targetMode: 'members', targetMemberIds: ['member-owner'], benefitType: 'amount', benefitValue: '30,000',
          scopeVideoIds: ['video-paid'], start: '2020-01-01', end: '2030-12-31', usageUnlimited: true,
        },
      ],
      couponIssuances: [
        { id: 'issue-owner', couponId: 'coupon-owner', memberId: 'member-owner', status: '사용가능', usedCount: 0 },
        { id: 'issue-other', couponId: 'coupon-other', memberId: 'member-other', status: '사용가능', usedCount: 0 },
      ],
    },
    logs: [],
  };
}

const ownerSession = { user: { role: 'member', openId: 'owner-open-id' } };

test('video coupon pure conditions enforce exact scope, trusted identity, code secrecy, expiry/quota, and server price', () => {
  const state = sampleState();
  const listed = listVideoCoupons({ state, videoId: 'video-paid', session: ownerSession, now });
  assert.equal(listed.status, 200);
  assert.deepEqual(listed.body, {
    items: [{ id: 'coupon-owner', title: '내 영상 할인', discountLabel: '30,000원 할인' }],
    requiresLogin: false,
  });
  assert.equal(JSON.stringify(listed.body).includes('VIDEO-25'), false);
  assert.equal(JSON.stringify(listed.body).includes('member-other'), false);

  const quoted = quoteVideoCoupon({ state, videoId: 'video-paid', session: ownerSession, payload: { code: 'VIDEO-25', amount: 1 }, now });
  assert.equal(quoted.status, 200);
  assert.deepEqual(quoted.body, {
    videoId: 'video-paid', coupon: { id: 'coupon-code', title: '코드 전용 할인' },
    originalAmount: 100000, discountAmount: 25000, totalAmount: 75000,
  });
  assert.equal(quoteVideoCoupon({ state, videoId: 'video-paid', session: ownerSession, payload: { couponId: 'coupon-other' }, now }).status, 403);
  assert.equal(quoteVideoCoupon({ state, videoId: 'video-paid', session: ownerSession, payload: { couponId: 'coupon-code' }, now }).body.error.code, 'COUPON_CODE_REQUIRED');
  assert.equal(quoteVideoCoupon({ state, videoId: 'video-paid', session: ownerSession, payload: { couponId: 'coupon-owner', code: 'VIDEO-25' }, now }).status, 403);
  assert.equal(quoteVideoCoupon({ state, videoId: 'video-free', session: ownerSession, payload: { couponId: 'coupon-owner' }, now }).status, 404);
});

async function temporaryService(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'willclub-video-coupon-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  await writeFile(path.join(directory, 'seed.json'), JSON.stringify(sampleState()));
  const config = loadServerConfig({
    NODE_ENV: 'development', SITE_ORIGIN: 'http://localhost:4301', MANUS_PROJECT_ID: 'coupon-test-app',
    MANUS_JWT_SECRET: signingSecret, STATE_FILE: 'runtime/state.json', SEED_FILE: 'seed.json',
    LOCAL_VIDEO_DIRECTORY: 'runtime/media', FIXTURES_DIRECTORY: 'fixtures', VIDEO_METADATA_FILE: 'runtime/video-metadata.json',
    UPLOAD_TEMP_DIR: 'runtime/tmp',
  }, directory);
  const service = await createApplication({ config });
  t.after(() => service.close());
  return { config, service };
}

function cookie(token) {
  return `webdev_app_session=${encodeURIComponent(token)}`;
}

test('coupon HTTP API hides unauthenticated lists, requires CSRF for quote, checks ownership, and never consumes a coupon', async t => {
  const { config, service } = await temporaryService(t);
  const owner = await issueSession({ openId: 'owner-open-id' }, config.auth, 'csrf-owner');
  const other = await issueSession({ openId: 'other-open-id' }, config.auth, 'csrf-other');

  const anonymous = await request(service.app).get('/api/catalog/video-paid/coupons').expect(200);
  assert.deepEqual(anonymous.body, { items: [], requiresLogin: true });
  const listed = await request(service.app).get('/api/catalog/video-paid/coupons').set('Cookie', cookie(owner.token)).expect(200);
  assert.deepEqual(listed.body.items, [{ id: 'coupon-owner', title: '내 영상 할인', discountLabel: '30,000원 할인' }]);

  await request(service.app).post('/api/catalog/video-paid/coupon-quote').set('Cookie', cookie(owner.token))
    .send({ couponId: 'coupon-owner' }).expect(403);
  await request(service.app).post('/api/catalog/video-paid/coupon-quote').set('Cookie', cookie(owner.token)).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', 'wrong-token').send({ couponId: 'coupon-owner' }).expect(403);
  const quote = await request(service.app).post('/api/catalog/video-paid/coupon-quote').set('Cookie', cookie(owner.token)).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', owner.csrf).send({ couponId: 'coupon-owner', amount: 1, totalAmount: 1 }).expect(200);
  assert.deepEqual(quote.body, {
    videoId: 'video-paid', coupon: { id: 'coupon-owner', title: '내 영상 할인' },
    originalAmount: 100000, discountAmount: 30000, totalAmount: 70000,
  });
  await request(service.app).post('/api/catalog/video-paid/coupon-quote').set('Cookie', cookie(other.token)).set('Origin', config.siteOrigin)
    .set('X-CSRF-Token', other.csrf).send({ couponId: 'coupon-owner' }).expect(403);

  const snapshot = await service.store.snapshot();
  assert.equal(snapshot.revision, 0);
  assert.equal(snapshot.state.records.coupons.find(row => row.id === 'coupon-owner').usedCount, undefined);
  assert.equal(snapshot.state.records.couponIssuances.find(row => row.id === 'issue-owner').usedCount, 0);
});
