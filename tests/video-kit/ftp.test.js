import test from 'node:test';
import assert from 'node:assert/strict';
import { FtpStorage } from '../../server/video-kit/storage/ftp-storage.js';

const config = { host: 'ftp.example.test', port: 21, user: 'test', password: 'test-only', secure: true,
  remoteDir: '/www/videos', publicBaseUrl: 'https://media.example.test/videos/', timeoutMs: 1000 };
const key = '00000000-0000-4000-8000-000000000001.mp4';

function fake({ size = 123, failUpload = false, failRename = false } = {}) {
  const calls = [];
  return {
    calls, ftp: {}, closed: false,
    async access(options) { calls.push(['access', options]); },
    async cd(directory) { calls.push(['cd', directory]); },
    async uploadFrom(file, target) { calls.push(['upload', file, target]); if (failUpload) throw new Error('transfer failed'); },
    async size(target) { calls.push(['size', target]); return size; },
    async rename(from, to) { calls.push(['rename', from, to]); if (failRename) throw new Error('rename failed'); },
    async remove(target) { calls.push(['remove', target]); },
    close() { calls.push(['close']); this.closed = true; },
  };
}

test('FTP는 .part 업로드 → SIZE 확인 → RENAME 순서로 확정한다', async () => {
  const client = fake();
  const storage = new FtpStorage(config, () => client);
  const result = await storage.upload('/tmp/example.mp4', key, 123);
  assert.deepEqual(client.calls.map(call => call[0]), ['access', 'cd', 'upload', 'size', 'rename', 'close']);
  assert.equal(client.calls[2][2], `${key}.part`);
  assert.equal(client.calls[0][1].secureOptions.rejectUnauthorized, true);
  assert.equal(result.url, `https://media.example.test/videos/${key}`);
  assert.equal(client.closed, true);
});

test('FTP 크기가 다르면 최종 이름을 만들지 않고 .part를 정리한다', async () => {
  const client = fake({ size: 100 });
  const storage = new FtpStorage(config, () => client);
  await assert.rejects(storage.upload('/tmp/file', key, 123), /크기가 일치/);
  assert.equal(client.calls.some(call => call[0] === 'rename'), false);
  assert.ok(client.calls.some(call => call[0] === 'remove' && call[1] === `${key}.part`));
  assert.equal(client.closed, true);
});

test('FTP 전송 및 이름 변경 실패에도 .part 정리와 연결 종료를 시도한다', async () => {
  for (const settings of [{ failUpload: true }, { failRename: true }]) {
    const client = fake(settings);
    const storage = new FtpStorage(config, () => client);
    await assert.rejects(storage.upload('/tmp/file', key, 123));
    assert.ok(client.calls.some(call => call[0] === 'remove' && call[1] === `${key}.part`));
    assert.equal(client.closed, true);
  }
});

test('원격 제거도 지정 폴더 안 UUID 영상으로 한정한다', async () => {
  const client = fake();
  const storage = new FtpStorage(config, () => client);
  await storage.remove(key);
  assert.deepEqual(client.calls.map(call => call[0]), ['access', 'cd', 'remove', 'close']);
  await assert.rejects(storage.remove('../private.txt'));
});

test('외부 FTP 입력 대신 서버 설정과 생성된 영상 키만 사용한다', async () => {
  const client = fake();
  const storage = new FtpStorage(config, () => client);
  await assert.rejects(storage.upload('/tmp/file', 'https://evil.example.test/', 123));
  assert.equal(client.calls.length, 0);
});


test('FTP RENAME은 서버에서 성공했지만 응답이 유실되면 두 이름 모두 정리한다', async () => {
  const files = new Set();
  const client = fake();
  client.access = async options => { client.closed = false; client.calls.push(['access', options]); };
  client.uploadFrom = async (_file, target) => { files.add(target); };
  client.rename = async (from, to) => {
    files.delete(from); files.add(to); client.closed = true;
    throw new Error('RNTO acknowledgement lost');
  };
  client.remove = async target => { client.calls.push(['remove', target]); files.delete(target); };
  const storage = new FtpStorage(config, () => client);
  await assert.rejects(storage.upload('/tmp/file', key, 123));
  assert.deepEqual([...files], []);
  assert.ok(client.calls.some(call => call[0] === 'remove' && call[1] === `${key}.part`));
  assert.ok(client.calls.some(call => call[0] === 'remove' && call[1] === key));
});
