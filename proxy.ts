import { NextRequest, NextResponse } from 'next/server';
import { deploymentDecision } from './lib/deployment.mjs';

// Next 16 proxy는 기본적으로 Node.js runtime에서 실행된다.
export function proxy(request: NextRequest) {
  const decision = deploymentDecision(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.method,
    process.env,
    request.nextUrl.origin,
  );

  if (decision.status === 200) return NextResponse.next();
  if ('location' in decision) {
    // 상대 경로(/ -> /admin)는 요청 URL을 기준으로 same-origin absolute URL로 만든다.
    const location = decision.location.startsWith('/')
      ? new URL(decision.location, request.url)
      : new URL(decision.location);
    return NextResponse.redirect(location, decision.status);
  }
  if ('error' in decision) {
    return NextResponse.json({ error: decision.error }, { status: decision.status });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
