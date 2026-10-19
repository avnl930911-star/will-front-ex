# 영상 API 명세

기본 경로는 `/api`입니다. 운영 예제는 Express 5 기반이며 동일 도메인에서 프록시하는 구성을 권장합니다. 관리자·프론트의 실제 호스트는 `49.238.229.60`이지만, HTTPS 도메인·기존 서비스 포트는 제공되지 않아 예제에서 확정하지 않았습니다.

## 엔드포인트

| 메서드 | 경로 | 권한 | 목적 |
| --- | --- | --- | --- |
| POST | `/api/admin/videos` | 기존 관리자 인증 + 세션 방식이면 CSRF | MP4/WebM 업로드 후 FTP 전송·DB 저장 |
| GET | `/api/videos?page=1&pageSize=12` | 기본 공개, 미들웨어로 회원 권한 연결 가능 | 등록 완료 영상 목록 |
| GET | `/api/videos/:id` | 목록과 동일 | 영상 상세·재생 URL |
| GET | `/health` | 공개 | 독립 실행 예제의 프로세스 응답 확인 |

`/health`는 FTP·DB의 실시간 정상 상태를 보증하지 않습니다. 기존 Express에 라우터만 장착할 때는 기존 health 정책을 사용합니다.

## 업로드

`multipart/form-data`로 보냅니다. `Content-Type`의 boundary는 브라우저/HTTP 클라이언트가 설정해야 합니다.

| 필드 | 형식 | 조건 |
| --- | --- | --- |
| `video` | 파일 1개 | 내용 시그니처가 MP4 또는 WebM. 확장자/클라이언트 MIME만 신뢰하지 않음 |
| `title` | 문자열 | 앞뒤 공백 제거 후 1~120자 |
| `description` | 문자열 | 선택, 최대 2,000자 |

운영 예제 파일 최대 크기는 500MiB이며 환경변수로 1~2,048MiB 범위에서 조정할 수 있습니다. 동시 업로드는 Node.js 프로세스당 기본 2개, 라우터별 IP당 분당 10회입니다. 별도 데모는 15MiB/파일, 200MiB 총 저장 공간으로 제한합니다. 제목·설명 필드 각각 8KiB를 넘으면 파서가 거부합니다.

처리 순서는 관리자 권한 확인 → 서버 임시 파일 저장 → 필드·유형 검증 → SHA-256 계산 → FTP `.part` 업로드 → 원격 SIZE 확인 → 최종 파일명 변경 → 메타데이터 INSERT → 임시 파일 삭제 → 응답입니다. 완료 전에는 목록에 등록되지 않습니다. FTP 크기 비교는 바이트 수 검사이며 원격 해시 대조는 아닙니다.

```bash
# 독립 운영 예제의 서버 간 검증용 호출. 토큰을 프론트 소스에 넣지 마세요.
curl "$API_BASE/api/admin/videos" \
  -H "Authorization: Bearer $ADMIN_API_TOKEN" \
  -F 'title=영상 제목' \
  -F 'description=영상 설명' \
  -F 'video=@sample.mp4'
```

성공 응답은 HTTP `201`입니다.

```json
{
  "video": {
    "id": "00000000-0000-4000-8000-000000000001",
    "title": "영상 제목",
    "description": "영상 설명",
    "url": "https://media.example.com/videos/00000000-0000-4000-8000-000000000001.mp4",
    "mimeType": "video/mp4",
    "sizeBytes": 1020274,
    "createdAt": "2026-10-16T22:58:00.000Z"
  }
}
```

위 `media.example.com`은 명세용 예시이며 실제 `jnbstock3.mireene.com`의 재생 경로가 아닙니다. 응답에 FTP 사용자·비밀번호·원격 경로·원본 파일명·SHA-256은 포함하지 않습니다.

## 목록·상세

`page`는 1~1,000,000, `pageSize`는 1~100입니다. 기본값은 1과 12입니다. 다른 쿼리 키·중복 배열·잘못된 숫자는 400으로 거부합니다. 생성 시각 내림차순, 동일 시각이면 ID 내림차순으로 조회합니다.

```json
{
  "items": ["실제 응답은 위 video 형태의 객체 배열"],
  "page": 1,
  "pageSize": 12,
  "total": 1
}
```

상세는 `{ "video": { ... } }`이며 없는 ID는 404, UUID 형식이 잘못된 ID는 400입니다. API 응답은 `Cache-Control: no-store`입니다.

## 오류 계약

```json
{ "error": { "code": "VIDEO_STORAGE_FAILED", "message": "영상 호스팅 전송에 실패했습니다. 설정·용량을 확인해 주세요." } }
```

| HTTP | 대표 코드 | 의미 |
| --- | --- | --- |
| 400 | `VIDEO_REQUIRED`, `EMPTY_VIDEO`, `INVALID_TITLE`, `INVALID_DESCRIPTION`, `INVALID_PAGINATION`, `INVALID_ID`, Multer 제한 코드 | 입력·파일 필드·형식 오류 |
| 401/403 | `ADMIN_AUTH_REQUIRED`, 기존 인증 미들웨어 코드 | 미로그인·권한/CSRF 문제 |
| 404 | `VIDEO_NOT_FOUND` | 미등록 영상 |
| 413 | `LIMIT_FILE_SIZE` | 파일 크기 초과 |
| 415 | `UNSUPPORTED_VIDEO` | 실제 MP4/WebM 시그니처 아님 |
| 429 | `UPLOAD_RATE_LIMIT`, `AUTH_RATE_LIMIT` | 요청 빈도 제한 |
| 502 | `VIDEO_STORAGE_FAILED` | FTP 접속·전송·원격 크기·이름 변경 실패 |
| 503 | `UPLOAD_BUSY`, `METADATA_SAVE_FAILED` | 동시 작업 제한·메타데이터 저장 실패 |
| 507 | `VIDEO_STORAGE_FAILED` | 데모 저장 공간 초과 |
| 500 | `INTERNAL_ERROR` | 처리 오류 |

프록시의 413/502 등은 JSON이 아닌 HTML일 수 있습니다. 프론트 모듈은 응답 형식·네트워크 오류도 안내합니다. 클라이언트 대기 시간 초과나 연결 중단 뒤 서버는 작업을 완료할 수 있으므로 자동 재업로드하지 않고 목록을 먼저 확인합니다. 멱등 업로드 키·처리 상태 폴링 API는 이번 모듈에 포함하지 않았습니다.

## 재생 연결

```js
const { video } = await fetch(`/api/videos/${id}`).then(response => response.json());
player.src = video.url;
player.load();
```

조회 응답의 `video.url`을 사용자 브라우저가 직접 요청해야 합니다. API에서 파일을 다운로드해 프록시하거나 Base64로 전달하면 트래픽 분리 목적을 달성할 수 없습니다. MP4 기본 재생에는 `crossOrigin`을 강제하지 않습니다. 추후 HLS·캔버스 처리 시 미디어 호스트의 별도 CORS 설정이 필요합니다.

## DB 저장 결과 불확정 상태

INSERT 오류 뒤 쓰기 DB(primary)에서 동일 레코드를 재확인할 수 있으면 201로 복구합니다. 미저장이 확인된 경우에만 원격 파일을 삭제합니다. 재확인 실패/메타데이터 불일치이면 원격 영상을 보존하고 다음 응답을 반환합니다.

```json
{
  "error": {
    "code": "METADATA_STATUS_UNKNOWN",
    "message": "저장 결과를 확인하지 못했습니다. 재업로드 전 관리자에게 확인해 주세요.",
    "details": { "videoId": "00000000-0000-4000-8000-000000000001" }
  }
}
```

HTTP 503이며 운영자가 해당 ID·로그의 저장 키·SHA-256으로 DB와 파일을 대조해야 합니다. 저장소의 `getById`는 비동기 복제 지연이 있을 수 있는 read replica를 사용하면 안 됩니다. 자동 재시작 복구·영속 조정 큐는 별도 구현 대상입니다. FTP RENAME 응답 유실 때는 이 요청의 임시·최종 이름을 모두 정리 시도합니다.
