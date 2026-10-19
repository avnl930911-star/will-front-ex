import { deploymentDecision } from '../lib/deployment.mjs';

function requestOrigin(req) {
  const host = typeof req.get === 'function' ? req.get('host') : req.headers?.host;
  if (!host) return undefined;
  const protocol = req.protocol || (req.socket?.encrypted ? 'https' : 'http');
  return `${protocol}://${host}`;
}

/**
 * createApplication()의 보안 헤더 다음, auth/API 라우트 이전에 app.use(deploymentGuard())로 결합한다.
 * env 인자를 받아 테스트와 별도 배포 프로세스에서 런타임으로 대상을 선택할 수 있다.
 */
export function deploymentGuard(env = process.env) {
  return function deploymentGuardMiddleware(req, res, next) {
    const decision = deploymentDecision(
      req.originalUrl || req.url || req.path || '/',
      req.method,
      env,
      requestOrigin(req),
    );

    if (decision.status === 200) return next();
    if (decision.location) return res.redirect(decision.status, decision.location);
    return res.status(decision.status).type('application/json').json({ error: decision.error });
  };
}
