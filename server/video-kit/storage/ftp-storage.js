import { Client } from 'basic-ftp';
import path from 'node:path';
import { httpsBase } from '../config.js';

export function validateKey(key) {
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.(mp4|webm)$/.test(key)) {
    throw new Error('잘못된 영상 저장 키입니다.');
  }
}

export class FtpStorage {
  constructor(config, createClient = () => new Client(config.timeoutMs ?? 120_000)) {
    if (!config.host || !config.user || !config.password || !config.remoteDir) throw new Error('FTP 계정·경로 설정이 필요합니다.');
    if (config.remoteDir.split('/').some(part => part === '..' || part === '.') || /[\r\n\0\\]/.test(config.remoteDir)) {
      throw new Error('잘못된 FTP 원격 경로입니다.');
    }
    if (config.secure !== true && config.secure !== false && config.secure !== 'implicit') {
      throw new Error('FTP 보안 연결 방식을 명시해야 합니다.');
    }
    this.config = { ...config, publicBaseUrl: httpsBase(config.publicBaseUrl) };
    this.createClient = createClient;
  }

  async connect(client) {
    const { host, port, user, password, secure } = this.config;
    client.ftp.verbose = false;
    await client.access({ host, port, user, password, secure, secureOptions: { rejectUnauthorized: true } });
    // 운영 경로는 관리자가 미리 생성해야 한다. 잘못된 경로를 자동 생성하지 않는다.
    await client.cd(this.config.remoteDir);
  }

  async upload(localPath, key, expectedBytes) {
    validateKey(key);
    const client = this.createClient();
    const temporary = `${key}.part`;
    let connected = false;
    try {
      await this.connect(client);
      connected = true;
      await client.uploadFrom(localPath, temporary);
      if (await client.size(temporary) !== expectedBytes) throw new Error('원격 영상 크기가 일치하지 않습니다.');
      await client.rename(temporary, key);
      return { url: new URL(encodeURIComponent(key), this.config.publicBaseUrl).href, key };
    } catch (error) {
      // UUID key는 이 업로드가 독점 소유한다. RNTO 응답 유실도 고려해 두 이름을 정리.
      for (const target of [temporary, key]) {
        try {
          if (!connected || client.closed) { await this.connect(client); connected = true; }
          await client.remove(target, true);
        } catch {
          connected = false;
          // 서버 장애로 정리가 실패한 파일은 운영자가 대조·정리한다.
        }
      }
      throw error;
    } finally { client.close(); }
  }

  async remove(key) {
    validateKey(key);
    const client = this.createClient();
    try {
      await this.connect(client);
      await client.remove(path.posix.basename(key), true);
    } finally { client.close(); }
  }
}
