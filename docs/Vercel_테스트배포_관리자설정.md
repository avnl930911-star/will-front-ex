# Vercel 테스트 배포와 관리자 연결

## 이번 오류의 원인과 수정

기존 패키지는 `npm start`로 Next.js 화면과 Express API를 함께 실행하는 구조였습니다. Vercel 기본 Next.js 배포에서는 별도 Express 실행 파일이 시작되지 않아 `/api/catalog`, `/api/session` 등에서 JSON 대신 HTML 페이지가 응답했습니다. 브라우저가 이를 JSON으로 읽으면서 `Unexpected token '<'` 오류가 발생한 것입니다.

수정본에는 Next.js의 `app/api`, `app/auth`, `app/media`, `app/health` 서버 라우트를 추가해 기존 Express API에 연결했습니다. 기존 단독 Node.js 실행 방식과 디자인은 유지합니다. JSON 대신 HTML이 응답하는 경우에는 배포 API 연결을 확인하라는 안내를 표시합니다.

메인의 주식교육영상 4개는 교육영상 페이지와 동일한 `/api/catalog`에서 최신 등록일순으로 가져옵니다. 메인에 고정된 예시 영상 목록을 대체 데이터로 사용하지 않으며 새로고침 또는 탭·창으로 돌아올 때 갱신합니다.

## Vercel에서 다시 배포

수정 ZIP의 `willclub-nextjs` 폴더를 프로젝트 루트로 사용합니다. `package.json`과 `app` 폴더가 같은 루트에 있어야 합니다. Vercel Framework Preset은 **Next.js**, Install Command는 `npm ci`, Build Command는 `npm run build`로 설정하고 Output Directory는 Next.js 기본값을 사용합니다. 정적 export나 SPA용 모든 요청을 `index.html`로 돌리는 rewrite는 사용하지 않습니다. 별도로 입력한 `npm start` 또는 Express 실행 명령을 Vercel의 Build Command로 사용하지 않습니다.

Vercel 환경변수 `SITE_ORIGIN`에는 실제 테스트 사이트의 정확한 origin을 입력합니다. 예를 들어 `https://프로젝트이름.vercel.app`이며 `/admin` 경로나 마지막 `/`는 붙이지 않습니다. Production과 Preview는 서로 다른 주소를 사용할 수 있으므로 테스트할 배포의 origin과 일치해야 합니다. 비밀번호·DB 접속문자열·JWT 서명값은 Vercel 환경변수에만 입력하고 `NEXT_PUBLIC_` 이름이나 Git 소스에 넣지 마세요. 환경변수 변경 후 새로 배포합니다.

배포 후 `/health`와 `/api/catalog`, `/api/session`을 브라우저에서 열어 HTML 화면이 아닌 JSON이 응답하는지 확인합니다. `/api/session`이 `user: null`을 반환하는 것은 로그인 전의 정상 응답입니다. `/api/admin/state`가 미로그인 상태에서 401을 반환하는 것도 정상 보안 동작입니다.

## 관리자 페이지는 어떻게 접속하나요?

관리자 주소는 같은 사이트의 `/admin`입니다. 푸터의 `WILLCLUB` 링크도 이 주소로 연결됩니다. API 연결과 관리자 인증은 별개입니다. API가 정상이어도 관리자로 인증된 세션이 없으면 업무 화면은 열리지 않습니다. 이 패키지에는 공용 기본 관리자 아이디·비밀번호가 없고, 배포했다고 모든 방문자에게 관리자 권한을 부여하지 않습니다.

기존 윌클럽 로그인 서비스가 있으면 `server/auth-adapter.example.mjs`를 실제 구현 파일로 복사합니다. 해당 서버에서 세션 서명·회원 DB를 검증하는 `getSession`과 로그인 동작인 `login`을 연결하고, 환경변수 `AUTH_ADAPTER_MODULE`에 실제 모듈의 경로를 설정합니다. 서버가 확인한 관리자 사용자만 `role: 'admin'`을 반환해야 합니다. 예제 파일을 이름만 바꿔 설정하는 것으로는 로그인되지 않습니다.

기존 인증이 없다면 현재 패키지의 기본 Manus OAuth 연결을 구성해야 합니다. 서비스에서 발급받은 실제 `MANUS_PROJECT_ID`, `MANUS_JWT_SECRET`, `MANUS_OAUTH_PORTAL_URL`, `MANUS_OAUTH_API_URL`을 서버 환경변수에 설정합니다. OAuth 서비스가 실제 배포 주소의 `/auth/callback`을 허용하는지도 확인해야 합니다. 로그인 사용자의 검증된 `openId`를 `WILLCLUB_ADMIN_OPEN_IDS`에 등록한 뒤 재배포합니다. 실제 로그인 설정 없이 임의 ID나 임의 서명값만 입력해서 관리자 로그인 기능이 완성되는 것은 아닙니다.

관리자 로그인은 `/auth/login`에서 시작합니다. 로그인 후 `/api/session`이 실제 사용자와 `role: 'admin'`을 반환하면 `/admin` 업무 화면을 열 수 있습니다. 로그인이 되더라도 일반 회원 역할이라면 관리자 데이터 조회는 거부됩니다. CSRF 검증 때문에 `SITE_ORIGIN`도 실제 테스트 주소와 맞아야 합니다.

## Vercel에서 변경 내용을 저장하려면

Vercel 함수의 임시 파일을 영속 DB처럼 사용할 수 없습니다. `DATABASE_URL`이 없으면 공개 목록과 인증된 관리자 조회는 제공하되, 관리자 변경 저장을 성공으로 표시하지 않습니다. 따라서 조회 가능한 상태와 회원·영상·쿠폰 변경을 계속 유지할 수 있는 상태를 구분해야 합니다.

테스트 서버에서 관리자 변경·쿠폰 발급·영상 목록 갱신까지 확인하려면 외부 MySQL의 `DATABASE_URL`을 설정하세요. 기존 `server/state-store.mjs`가 전용 `willclub_app_state` 테이블을 사용합니다. 기존 회원·결제 DB를 자동으로 이관하거나 기존 테이블을 덮어쓰지는 않습니다. 최초 데이터는 제공 시안의 `data/seed.json`이며 실제 운영 영상 데이터로 전환하려면 관리자 등록 또는 별도 DB 이관이 필요합니다.

Vercel의 함수 요청·응답은 4.5MB 제한이 있습니다. 실제 강의 파일의 대용량 업로드 검증은 추후 단독 Node.js 서버에서 진행하세요. Vercel에서 업로드를 검증한다면 외부 영상 저장소와 영속 영상 메타데이터 DB가 필요하며, 로컬 임시 업로드 파일이 계속 유지된다고 가정해서는 안 됩니다.

## 단독 서버로 옮길 때

같은 ZIP을 Node.js 22 이상 서버에 배포하고 `npm ci`, `npm run build`, `npm start`를 실행합니다. `SITE_ORIGIN`을 최종 서비스 주소로 변경하고 실제 로그인·DB·영상 호스팅 환경변수를 설정합니다. 기존 Express 서버가 Next.js와 API를 같은 포트에서 실행하므로 별도 프론트·관리자 프로젝트를 만들 필요가 없습니다. 기본 JSON 모드는 단일 서버 프로세스와 영속 디스크가 있을 때만 사용하고, 다중 인스턴스는 MySQL을 사용하세요.

## 공식 문서

[Next.js 커스텀 서버 실행·컴파일 방식](https://nextjs.org/docs/pages/guides/custom-server)

[Vercel 함수 요청·응답 제한과 파일 추적 설정](https://vercel.com/docs/functions/limitations)
