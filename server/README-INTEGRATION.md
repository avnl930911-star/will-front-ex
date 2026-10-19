# 서버 API 연결 계약

설치·전체 운영 안내는 프로젝트 루트의 [README](../README.md)와 [.env.example](../.env.example)을 기준으로 사용하세요. Next.js와 Express는 동일 Node.js 프로세스에서 실행됩니다.

| 메서드 | 경로 | 계약 |
| --- | --- | --- |
| GET | `/health` | 공개 서버 상태 |
| GET | `/api/session` | 현재 검증된 사용자와 `csrfToken`. 미인증은 null |
| GET | `/api/admin/state` | 관리자 전체 또는 전문가 담당 범위 상태 `{state,revision}` |
| PUT | `/api/admin/state` | 관리자만. `{state,revision}` 또는 `If-Match` 필수, 오래된 revision은 409 |
| PUT | `/api/expert/state` | 전문가 담당 영상·게시글만 서버 원본에 병합. 소유권·CSRF·revision 검사 |
| POST | `/api/admin/videos` | 관리자 multipart `{title,description,video}`. 성공 `201 {video:{id,url,...}}` |
| GET | `/api/videos`, `/api/videos/:id` | 관리자만 업로드 메타데이터 조회. 공개 URL 누출을 막기 위해 고객 API와 분리 |
| GET | `/api/catalog` | 공개 영상만 고객용 `Video[]`로 반환. 원본 URL·회원 정보 제외 |
| GET | `/api/catalog/:id/playback` | 공개 무료 또는 서버 시청권 어댑터가 허용한 구매 영상의 URL |
| GET/HEAD | `/media/:file` | 위 조건을 충족하고 상태에 등록된 로컬 파일만 제공. Range 지원 |
| GET | `/auth/login` | 기존 인증 어댑터 또는 기본 OAuth 연결 |
| GET | `/auth/callback` | 기본 OAuth의 code/nonce/identity 검증 후 관리자 화면으로 이동 |
| POST | `/auth/logout` | 세션 CSRF 검증 후 기본/기존 인증 세션 해제 |

브라우저의 변경 요청은 정확한 `SITE_ORIGIN`과 `X-CSRF-Token`을 요구합니다. 인증되지 않은 업로드는 파일 처리 전에 차단합니다. 서버용 Bearer `ADMIN_API_TOKEN`은 32자 이상이며 프론트에 포함하면 안 됩니다.

## 기존 인증 및 구매 시청권

`.env`의 `AUTH_ADAPTER_MODULE`에 실제 구현 모듈을 설정합니다. [예제](./auth-adapter.example.mjs)의 `getSession`, `login`, `logout`, `canPlayVideo`에 운영 서비스 세션/역할/구매 DB를 연결하세요. 어댑터가 없다면 기본 OAuth 설정과 관리자/전문가 allowlist가 필요합니다.

실제 전문가 계정은 담당 데이터만 조회하고 전화·이메일 등을 받지 않습니다. 전체 상태 PUT은 거부합니다. 전문가 콘텐츠 변경은 전용 API로 담당 영상·게시글만 병합합니다. 실제 결제/시청권 발급은 기존 운영 서비스 연결 대상입니다. 클라이언트의 ‘구매 흐름 미리보기’는 권한을 발급하지 않습니다.

## 업로드와 등록

업로드 API가 반환한 URL과 ID를 `videoUrl`, `hostedVideoId`에 저장한 뒤 최신 revision으로 관리자 상태를 저장합니다. 업로드가 성공해도 상태 등록 전에는 로컬 파일을 공개하지 않습니다. 업로드 메타데이터 목록은 관리자만 볼 수 있습니다. 카탈로그에는 가격/공개상태/카테고리/제목/설명의 최신 관리자 값이 반영됩니다.

원본 `server/video-kit` 소스는 수정하지 않았습니다. 실제 MP4/WebM 검사, 임시 파일 정리, FTP `.part → SIZE → RENAME`, 저장 결과 재확인 및 실패 정리를 유지합니다.

## 저장소

FTP 5개 값이 **전부 비어 있으면** 로컬 저장소를 사용합니다. 하나라도 설정했다면 5개를 모두 설정해야 하며 누락 시 시작을 거부합니다. FTP 공개 base는 HTTPS가 필요합니다. 실제 호스팅 접속/계정 검증은 수행하지 않았습니다.

로컬 JSON은 단일 프로세스 전용입니다. 운영 다중 인스턴스는 MySQL을 설정하고, 로컬 파일은 영속 볼륨 또는 외부 저장소로 유지하세요. FTP의 공개 URL 직접 접근은 별도 호스팅 보호 기능이 필요합니다.

```bash
npm test
npm run test:video
npm run check
npm run build
```

## 영상 결제 팝업의 쿠폰

기존 결제 팝업에 영상 쿠폰 선택·코드 입력·적용·해제만 추가했습니다. `GET /api/catalog/:id/coupons`는 로그인 사용자가 보유하고 해당 영상에 적용할 수 있는 쿠폰만 `{items,requiresLogin}`으로 반환합니다. 비로그인에는 쿠폰 내역을 공개하지 않으며 코드형 쿠폰은 목록에 노출하지 않습니다.

`POST /api/catalog/:id/coupon-quote`에 `{couponId}` 또는 `{code}`와 세션의 `X-CSRF-Token`을 전달하면 `{videoId,coupon:{id,title},originalAmount,discountAmount,totalAmount}`를 반환합니다. 원본 가격·대상 영상·기간·수량·사용자 소유권은 서버에서 검증합니다. 소유권은 서버에서 검증된 `openId`와 회원의 `openId/loginId`, 또는 기존 인증 어댑터가 제공한 신뢰할 수 있는 `memberId`와 회원의 `id/memberId`를 연결합니다. 이름·닉네임으로 쿠폰을 연결하지 않습니다.

쿠폰 quote는 조회·할인 계산 전용으로, 쿠폰 수량·사용횟수·구매 시청권을 변경하지 않습니다. 현재 구매 미리보기와 실제 결제 미연결 상태는 그대로입니다. 운영 결제 API를 연결할 때에는 서버에서 쿠폰과 최종 가격을 다시 검증하고 결제 확정 시에만 쿠폰 차감·사용 기록·시청권 처리를 해야 합니다.
