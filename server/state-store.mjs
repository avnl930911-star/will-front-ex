import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

export class StateValidationError extends Error {
  constructor(message, details = []) {
    super(message);
    this.name = 'StateValidationError';
    this.details = details;
  }
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}

function validId(value) {
  return typeof value === 'string' && /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(value);
}

/**
 * 관리자 화면의 레코드 도메인은 확장 가능하게 두되, 저장 파일이 깨지거나
 * 행 식별자가 충돌하지 않도록 최소 불변식을 강제한다.
 */
export function validateState(state, { videoUrlValidator } = {}) {
  const issues = [];
  if (!isPlainObject(state)) issues.push('state는 객체여야 합니다.');
  if (!isPlainObject(state?.records)) issues.push('records는 객체여야 합니다.');
  if (!Array.isArray(state?.logs)) issues.push('logs는 배열이어야 합니다.');
  if (!Number.isSafeInteger(state?.version) || state.version < 1 || state.version > 1_000_000) {
    issues.push('version은 양의 정수여야 합니다.');
  }
  if (issues.length) throw new StateValidationError('상태 구조가 올바르지 않습니다.', issues);

  for (const [domain, rows] of Object.entries(state.records)) {
    if (!/^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(domain)) issues.push(`잘못된 도메인: ${domain}`);
    if (!Array.isArray(rows)) {
      issues.push(`${domain} 도메인은 배열이어야 합니다.`);
      continue;
    }
    const ids = new Set();
    for (const [index, row] of rows.entries()) {
      if (!isPlainObject(row)) {
        issues.push(`${domain}[${index}]은 객체여야 합니다.`);
        continue;
      }
      if (!validId(row.id)) issues.push(`${domain}[${index}].id가 올바르지 않습니다.`);
      if (ids.has(row.id)) issues.push(`${domain} 도메인에 중복 id가 있습니다: ${row.id}`);
      ids.add(row.id);
      if (domain === 'videos') {
        if (row.title !== undefined && (typeof row.title !== 'string' || row.title.length > 500)) {
          issues.push(`videos[${index}].title이 올바르지 않습니다.`);
        }
        if (row.amount !== undefined && (!Number.isFinite(Number(row.amount)) || Number(row.amount) < 0)) {
          issues.push(`videos[${index}].amount가 올바르지 않습니다.`);
        }
        if (row.videoUrl !== undefined && row.videoUrl !== '' &&
            !(typeof row.videoUrl === 'string' && (!videoUrlValidator || videoUrlValidator(row.videoUrl)))) {
          issues.push(`videos[${index}].videoUrl이 허용되지 않습니다.`);
        }
      }
    }
  }
  if (issues.length) throw new StateValidationError('상태 검증에 실패했습니다.', issues.slice(0, 20));
  return deepCopy(state);
}

async function readSeed(seedFile) {
  try {
    return JSON.parse(await readFile(seedFile, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return { version: 4, records: { videos: [] }, logs: [] };
    throw error;
  }
}

async function atomicWrite(file, payload) {
  await mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  const temporary = `${file}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, `${JSON.stringify(payload, null, 2)}\n`, { mode: 0o600 });
    await rename(temporary, file);
  } catch (error) {
    await rm(temporary, { force: true });
    throw error;
  }
}

/** JSON 모드는 한 Node.js 프로세스 전용이다. 모든 읽기·쓰기를 이 인스턴스에서 직렬화한다. */
export class LocalStateStore {
  constructor({ file, seedFile, validator = validateState }) {
    this.file = file;
    this.seedFile = seedFile;
    this.validator = validator;
    this.queue = Promise.resolve();
    this.current = null;
  }

  async initialize() {
    if (this.current) return;
    const operation = this.queue.then(async () => {
      if (this.current) return;
      try {
        const persisted = JSON.parse(await readFile(this.file, 'utf8'));
        if (!Number.isSafeInteger(persisted?.revision) || persisted.revision < 0 || !persisted.state) {
          throw new Error('상태 파일 형식 오류');
        }
        this.current = { revision: persisted.revision, state: this.validator(persisted.state) };
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        const state = this.validator(await readSeed(this.seedFile));
        this.current = { revision: 0, state };
        await atomicWrite(this.file, this.current);
      }
    });
    this.queue = operation.catch(() => {});
    await operation;
  }

  async snapshot() {
    await this.initialize();
    await this.queue;
    return deepCopy(this.current);
  }

  async replace(expectedRevision, nextState) {
    await this.initialize();
    const operation = this.queue.then(async () => {
      if (this.current.revision !== expectedRevision) {
        return { ok: false, currentRevision: this.current.revision };
      }
      const state = this.validator(nextState);
      const next = { revision: this.current.revision + 1, state };
      await atomicWrite(this.file, next);
      this.current = next;
      return { ok: true, revision: next.revision, state: deepCopy(state) };
    });
    this.queue = operation.catch(() => {});
    return operation;
  }

  async close() {}
}

/** DATABASE_URL이 명시된 경우에만 사용하는, 기존 테이블과 분리된 상태 테이블이다. */
export class MySqlStateStore {
  constructor(pool, validator = validateState) {
    this.pool = pool;
    this.validator = validator;
  }

  static async connect({ databaseUrl, initialState, validator = validateState }) {
    const mysql = await import('mysql2/promise');
    const pool = mysql.default.createPool({ uri: databaseUrl, connectionLimit: 5, timezone: 'Z' });
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS willclub_app_state (
        state_key VARCHAR(64) NOT NULL PRIMARY KEY,
        revision BIGINT UNSIGNED NOT NULL,
        state_json JSON NOT NULL,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);
      const state = validator(initialState);
      await pool.execute(
        'INSERT IGNORE INTO willclub_app_state (state_key, revision, state_json) VALUES (?, ?, ?)',
        ['primary', 0, JSON.stringify(state)],
      );
      return new MySqlStateStore(pool, validator);
    } catch (error) {
      await pool.end();
      throw error;
    }
  }

  async snapshot() {
    const [[row]] = await this.pool.execute(
      'SELECT revision, state_json FROM willclub_app_state WHERE state_key = ? LIMIT 1', ['primary'],
    );
    if (!row) throw new Error('willclub_app_state 초기 행이 없습니다.');
    const state = this.validator(typeof row.state_json === 'string' ? JSON.parse(row.state_json) : row.state_json);
    return { revision: Number(row.revision), state };
  }

  async replace(expectedRevision, nextState) {
    const state = this.validator(nextState);
    const [result] = await this.pool.execute(
      `UPDATE willclub_app_state
       SET revision = revision + 1, state_json = ?
       WHERE state_key = ? AND revision = ?`,
      [JSON.stringify(state), 'primary', expectedRevision],
    );
    if (result.affectedRows !== 1) {
      const current = await this.snapshot();
      return { ok: false, currentRevision: current.revision };
    }
    return { ok: true, revision: expectedRevision + 1, state };
  }

  async close() {
    await this.pool.end();
  }
}

export async function createStateStore({ databaseUrl, file, seedFile, validator = validateState }) {
  if (databaseUrl) {
    const initialState = validator(await readSeed(seedFile));
    return MySqlStateStore.connect({ databaseUrl, initialState, validator });
  }
  const store = new LocalStateStore({ file, seedFile, validator });
  await store.initialize();
  return store;
}
