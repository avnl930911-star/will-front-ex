/** API가 HTML 로그인/404 페이지로 응답한 경우 JSON 파서 원문을 표시하지 않습니다. */
export async function readApiJson<T = Record<string, unknown>>(response: Response, fallback = '서버 응답을 확인하지 못했습니다.'): Promise<T> {
  const body = await response.text();
  const type = response.headers.get('content-type') || '';
  if (/^\s*</.test(body) || type.toLowerCase().includes('text/html')) {
    const path = (() => { try { return new URL(response.url).pathname; } catch { return '/api'; } })();
    throw new Error(`API 연결 오류: ${path}에서 JSON 대신 웹페이지가 응답했습니다. 배포 서버의 API 실행·프록시 설정을 확인해주세요.`);
  }
  if (!body.trim()) throw new Error(`${fallback} 서버가 빈 응답을 반환했습니다.`);
  try { return JSON.parse(body) as T; }
  catch { throw new Error(`${fallback} 서버가 올바른 JSON을 반환하지 않았습니다.`); }
}
