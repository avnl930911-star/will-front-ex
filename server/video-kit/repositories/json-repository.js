import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile, rename, rm } from 'node:fs/promises';

// 데모 전용: 단일 Node.js 프로세스만 사용 가능. PM2 cluster/운영 DB로 사용하지 않는다.
export class JsonVideoRepository {
  constructor(file) { this.file = file; this.queue = Promise.resolve(); }

  async readAll() {
    try {
      const rows = JSON.parse(await readFile(this.file, 'utf8'));
      if (!Array.isArray(rows)) throw new Error('영상 메타데이터 파일 형식 오류');
      return rows;
    } catch (error) {
      if (error.code === 'ENOENT') return [];
      throw error;
    }
  }

  async insert(video) {
    const operation = this.queue.then(async () => {
      await mkdir(path.dirname(this.file), { recursive: true });
      const rows = await this.readAll();
      if (rows.some(row => row.id === video.id)) throw new Error('중복 영상 ID');
      const temporary = `${this.file}.${randomUUID()}.tmp`;
      try {
        await writeFile(temporary, `${JSON.stringify([video, ...rows], null, 2)}\n`, { mode: 0o600 });
        await rename(temporary, this.file);
      } catch (error) {
        await rm(temporary, { force: true });
        throw error;
      }
      return video;
    });
    this.queue = operation.catch(() => {});
    return operation;
  }

  async list({ page, pageSize }) {
    await this.queue;
    const rows = (await this.readAll()).sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id));
    return { items: rows.slice((page - 1) * pageSize, page * pageSize), total: rows.length };
  }

  async getById(id) { await this.queue; return (await this.readAll()).find(row => row.id === id) ?? null; }
}
