import express from 'express';
import multer from 'multer';
import { rateLimit } from 'express-rate-limit';
import { fileTypeFromFile } from 'file-type';
import { randomUUID, createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { persistVideo } from './persist-video.js';

class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message); this.status = status; this.code = code; this.details = details;
  }
}

function publicVideo(video) {
  return {
    id: video.id, title: video.title, description: video.description,
    url: video.url, mimeType: video.mimeType, sizeBytes: video.sizeBytes, createdAt: video.createdAt,
  };
}

function pagination(value, fallback, max) {
  if (value === undefined) return fallback;
  if (typeof value !== 'string' || !/^\d+$/.test(value)) throw new ApiError(400, 'INVALID_PAGINATION', '페이지 값을 확인해 주세요.');
  const number = Number(value);
  if (!Number.isSafeInteger(number) || number < 1 || number > max) throw new ApiError(400, 'INVALID_PAGINATION', '페이지 범위를 확인해 주세요.');
  return number;
}

async function checksum(file) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}

/** 필수 인증·저장소 주입. 기본은 공개 VOD. 회원 제한은 authorizeRead로 연결. */
export async function createVideoRouter({
  authenticateAdmin, authorizeRead = (_req, _res, next) => next(),
  repository, storage, tempDir, maxUploadBytes = 500 * 1024 * 1024,
  maxConcurrentUploads = 2, rateLimitUploads = true, logger = console,
}) {
  if (typeof authenticateAdmin !== 'function') throw new Error('관리자 인증 미들웨어가 반드시 필요합니다.');
  for (const method of ['insert', 'list', 'getById']) {
    if (typeof repository?.[method] !== 'function') throw new Error(`repository.${method}가 필요합니다.`);
  }
  for (const method of ['upload', 'remove']) {
    if (typeof storage?.[method] !== 'function') throw new Error(`storage.${method}가 필요합니다.`);
  }
  if (!tempDir || !Number.isSafeInteger(maxUploadBytes) || maxUploadBytes < 1 ||
      !Number.isSafeInteger(maxConcurrentUploads) || maxConcurrentUploads < 1) {
    throw new Error('임시 경로와 업로드 제한을 확인해 주세요.');
  }
  await mkdir(tempDir, { recursive: true, mode: 0o700 });
  const router = express.Router();
  let activeUploads = 0;
  const upload = multer({
    storage: multer.diskStorage({ destination: tempDir, filename: (_req, _file, done) => done(null, `${randomUUID()}.upload`) }),
    limits: { fileSize: maxUploadBytes, files: 1, fields: 2, fieldSize: 8192, parts: 3 },
  }).single('video');
  const limiter = rateLimitUploads
    ? rateLimit({ windowMs: 60_000, limit: 10, standardHeaders: 'draft-8', legacyHeaders: false,
      handler: (_req, res) => res.status(429).json({ error: { code: 'UPLOAD_RATE_LIMIT', message: '잠시 후 업로드해 주세요.' } }) })
    : (_req, _res, next) => next();
  router.use((_req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });

  router.get('/videos', authorizeRead, async (req, res) => {
    if (Object.keys(req.query).some(key => !['page', 'pageSize'].includes(key))) {
      throw new ApiError(400, 'INVALID_PAGINATION', '허용되지 않은 조회 필드입니다.');
    }
    const page = pagination(req.query.page, 1, 1_000_000);
    const pageSize = pagination(req.query.pageSize, 12, 100);
    const result = await repository.list({ page, pageSize });
    res.json({ items: result.items.map(publicVideo), page, pageSize, total: result.total });
  });

  router.get('/videos/:id', authorizeRead, async (req, res) => {
    if (!/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(req.params.id)) {
      throw new ApiError(400, 'INVALID_ID', '잘못된 영상 ID입니다.');
    }
    const video = await repository.getById(req.params.id);
    if (!video) throw new ApiError(404, 'VIDEO_NOT_FOUND', '영상을 찾을 수 없습니다.');
    res.json({ video: publicVideo(video) });
  });

  router.post('/admin/videos', authenticateAdmin, limiter, async (req, res, next) => {
    // 인증을 먼저 실행해 비인가 업로드의 디스크·FTP 사용을 막는다.
    if (activeUploads >= maxConcurrentUploads) {
      res.set('Retry-After', '10');
      return res.status(503).json({ error: { code: 'UPLOAD_BUSY', message: '전송 작업이 진행 중입니다. 잠시 후 다시 시도해 주세요.' } });
    }
    activeUploads += 1;
    let remote = null;
    let preserveRemote = false;
    let video;
    let failure;
    try {
      await new Promise((resolve, reject) => upload(req, res, error => error ? reject(error) : resolve()));
      if (!req.file) throw new ApiError(400, 'VIDEO_REQUIRED', '영상 파일을 선택해 주세요.');
      if (req.file.size === 0) throw new ApiError(400, 'EMPTY_VIDEO', '빈 영상 파일은 업로드할 수 없습니다.');
      const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
      const description = req.body.description === undefined ? '' :
        typeof req.body.description === 'string' ? req.body.description.trim() : null;
      if (!title || [...title].length > 120) throw new ApiError(400, 'INVALID_TITLE', '제목은 1~120자로 입력해 주세요.');
      if (description === null || [...description].length > 2000) throw new ApiError(400, 'INVALID_DESCRIPTION', '설명은 2,000자 이내로 입력해 주세요.');
      let type;
      try { type = await fileTypeFromFile(req.file.path); } catch { type = undefined; }
      if (!type || !['video/mp4', 'video/webm'].includes(type.mime)) {
        throw new ApiError(415, 'UNSUPPORTED_VIDEO', '실제 MP4 또는 WebM 파일만 업로드할 수 있습니다.');
      }
      const id = randomUUID();
      const sha256 = await checksum(req.file.path);
      try { remote = await storage.upload(req.file.path, `${id}.${type.ext}`, req.file.size); } catch (error) {
        logger.error('video_storage_failed', { name: error.name, code: error.code });
        throw new ApiError(error.status === 507 ? 507 : 502, 'VIDEO_STORAGE_FAILED', '영상 호스팅 전송에 실패했습니다. 설정·용량을 확인해 주세요.');
      }
      video = {
        id, title, description,
        originalName: path.basename(req.file.originalname.replaceAll('\\', '/')).replace(/[\x00-\x1f\x7f]/g, '').slice(0, 255),
        storageKey: remote.key, url: remote.url, mimeType: type.mime, sizeBytes: req.file.size,
        sha256, createdAt: new Date().toISOString(),
      };
      const result = await persistVideo(repository, video, logger);
      preserveRemote = result.state !== 'not_saved';
      if (result.state === 'unknown') {
        throw new ApiError(503, 'METADATA_STATUS_UNKNOWN', '저장 결과를 확인하지 못했습니다. 재업로드 전 관리자에게 확인해 주세요.', { videoId: id });
      }
      if (result.state === 'not_saved') {
        throw new ApiError(503, 'METADATA_SAVE_FAILED', '영상 정보를 저장하지 못했습니다. 관리자에게 문의해 주세요.');
      }
      video = result.video;
    } catch (error) { failure = error; }
    finally {
      if (remote && !preserveRemote) {
        try { await storage.remove(remote.key); } catch (error) {
          logger.error('video_orphan_cleanup_failed', { key: remote.key, name: error.name });
        }
      }
      if (req.file?.path) {
        try { await rm(req.file.path, { force: true }); } catch (error) { logger.error('video_temp_cleanup_failed', { name: error.name }); }
      }
      activeUploads -= 1;
    }
    if (failure) return next(failure);
    return res.status(201).json({ video: publicVideo(video) });
  });

  router.use((error, _req, res, _next) => {
    if (res.headersSent) return _next(error);
    if (error instanceof multer.MulterError) {
      const large = error.code === 'LIMIT_FILE_SIZE';
      return res.status(large ? 413 : 400).json({ error: {
        code: error.code,
        message: large ? `영상은 ${Math.floor(maxUploadBytes / 1024 / 1024)}MB 이하로 업로드해 주세요.` : '업로드 필드·파일 개수를 확인해 주세요.',
      } });
    }
    if (error instanceof ApiError) return res.status(error.status).json({ error: { code: error.code, message: error.message, ...(error.details ? { details: error.details } : {}) } });
    logger.error('video_api_failed', { name: error.name, code: error.code });
    return res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: '요청을 처리하지 못했습니다.' } });
  });
  return router;
}
