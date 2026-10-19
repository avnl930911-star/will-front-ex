import path from 'node:path';
import { copyFile, mkdir, rename, rm, stat, readdir } from 'node:fs/promises';
import { validateKey } from './ftp-storage.js';

export class LocalStorage {
  constructor(directory, publicBaseUrl, maxTotalBytes = 200 * 1024 * 1024) {
    this.directory = directory;
    this.publicBaseUrl = publicBaseUrl.endsWith('/') ? publicBaseUrl : `${publicBaseUrl}/`;
    this.maxTotalBytes = maxTotalBytes;
    this.queue = Promise.resolve();
  }

  async upload(localPath, key, expectedBytes) {
    validateKey(key);
    const operation = this.queue.then(async () => {
      await mkdir(this.directory, { recursive: true });
      const entries = await readdir(this.directory);
      let total = 0;
      for (const entry of entries) {
        const info = await stat(path.join(this.directory, entry));
        if (info.isFile()) total += info.size;
      }
      if (total + expectedBytes > this.maxTotalBytes) {
        const error = new Error('데모 저장 공간이 가득 찼습니다.');
        error.status = 507;
        throw error;
      }
      const final = path.join(this.directory, key);
      const temporary = `${final}.part`;
      try {
        await copyFile(localPath, temporary);
        if ((await stat(temporary)).size !== expectedBytes) throw new Error('데모 파일 크기가 일치하지 않습니다.');
        await rename(temporary, final);
        return { key, url: new URL(key, this.publicBaseUrl).href };
      } catch (error) {
        await rm(temporary, { force: true });
        throw error;
      }
    });
    this.queue = operation.catch(() => {});
    return operation;
  }

  async remove(key) {
    validateKey(key);
    await rm(path.join(this.directory, key), { force: true });
  }
}
