/**
 * INSERT 응답 유실을 단순 미저장으로 취급하지 않는다.
 * repository.getById는 read replica가 아닌 쓰기 DB(primary)를 조회해야 한다.
 */
export async function persistVideo(repository, video, logger = console) {
  try {
    await repository.insert(video);
    return { state: 'saved', video };
  } catch (error) {
    logger.error('video_metadata_failed', { name: error.name, code: error.code });
    try {
      const existing = await repository.getById(video.id);
      if (!existing) return { state: 'not_saved' };
      if (existing.storageKey === video.storageKey && existing.sha256 === video.sha256 &&
          existing.sizeBytes === video.sizeBytes && existing.url === video.url) {
        logger.warn?.('video_metadata_commit_recovered', { id: video.id });
        return { state: 'saved', video: existing };
      }
    } catch (verificationError) {
      logger.error('video_metadata_recheck_failed', { id: video.id, name: verificationError.name });
    }
    // 확인 실패/불일치일 때는 미디어를 보존하고 운영자에게 조정 대상을 기록한다.
    logger.error('video_metadata_status_unknown', { id: video.id, key: video.storageKey, sha256: video.sha256 });
    return { state: 'unknown' };
  }
}
