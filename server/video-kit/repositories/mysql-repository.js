import mysql from 'mysql2/promise';

function mapRow(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    originalName: row.original_name,
    storageKey: row.storage_key,
    url: row.playback_url,
    mimeType: row.mime_type,
    sizeBytes: Number(row.size_bytes),
    sha256: row.sha256,
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export class MysqlVideoRepository {
  constructor(pool) { this.pool = pool; }

  static async connect(databaseUrl) {
    const pool = mysql.createPool({ uri: databaseUrl, connectionLimit: 5, timezone: 'Z', dateStrings: false });
    try {
      // 테이블 생성은 sql/schema.sql을 검토한 개발자가 수행한다.
      await pool.query('SELECT id FROM hosted_videos LIMIT 1');
      return new MysqlVideoRepository(pool);
    } catch (error) {
      await pool.end();
      throw error;
    }
  }

  async insert(video) {
    await this.pool.execute(
      `INSERT INTO hosted_videos
       (id,title,description,original_name,storage_key,playback_url,mime_type,size_bytes,sha256,created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [video.id, video.title, video.description, video.originalName, video.storageKey, video.url,
        video.mimeType, video.sizeBytes, video.sha256, new Date(video.createdAt)],
    );
    return video;
  }

  async list({ page, pageSize }) {
    const offset = (page - 1) * pageSize;
    const [rows] = await this.pool.query(
      'SELECT * FROM hosted_videos ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?',
      [pageSize, offset],
    );
    const [[count]] = await this.pool.query('SELECT COUNT(*) AS total FROM hosted_videos');
    return { items: rows.map(mapRow), total: Number(count.total) };
  }

  async getById(id) {
    const [[row]] = await this.pool.execute('SELECT * FROM hosted_videos WHERE id = ? LIMIT 1', [id]);
    return mapRow(row);
  }

  async close() { await this.pool.end(); }
}
