-- MySQL 8 / MariaDB 호환 예시. 기존 DB 스키마와 충돌 여부 확인 후 실행.
-- 영상 바이너리는 저장하지 않음. 완료된 영상만 이 테이블에 INSERT.
CREATE TABLE IF NOT EXISTS hosted_videos (
  id CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  storage_key VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  playback_url VARCHAR(2048) NOT NULL,
  mime_type VARCHAR(32) CHARACTER SET ascii NOT NULL,
  size_bytes BIGINT UNSIGNED NOT NULL,
  sha256 CHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  created_at DATETIME(3) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_hosted_videos_storage_key (storage_key),
  KEY idx_hosted_videos_created (created_at, id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
