/**
 * 기존 윌클럽 로그인/DB가 있는 경우 이 파일을 복사해 구현하고
 * AUTH_ADAPTER_MODULE=./server/my-existing-auth.mjs 를 설정합니다.
 * 쿠키를 단순 decode하거나 브라우저의 role/purchased 값을 신뢰하지 마세요.
 * 서버 DB/서명 검증으로 확인된 세션만 반환해야 합니다.
 */
export async function getSession(req) {
  // 예: const session=await existingSessionStore.verifyCookie(req.headers.cookie);
  // if(!session)return null;
  // return {user:{openId:session.userId,name:session.name,role:session.serverRole,expert:session.expert},csrf:session.csrfToken};
  return null;
}
export function login(_req,res) {
  // 기존 서버의 실제 로그인 URL로 연결하도록 프로그래머가 구현합니다.
  res.status(503).json({error:{code:'EXISTING_LOGIN_NOT_CONNECTED',message:'기존 운영 로그인 어댑터를 연결해주세요.'}});
}
export async function logout(_req,res) {
  // 기존 세션 저장소에서 현재 세션을 무효화한 뒤 쿠키를 해제합니다.
  res.status(204).end();
}
export async function canPlayVideo(req,video) {
  // getSession으로 검증된 회원 ID의 해당 영상 구매/서비스 기간을 서버 DB에서 조회합니다.
  // return Boolean(session && await purchases.hasValidEntitlement(session.user.openId, video.id));
  return false;
}
