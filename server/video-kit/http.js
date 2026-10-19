import { timingSafeEqual } from 'node:crypto';
import cors from 'cors';

export function bearerAdmin(expectedToken) {
  const expected = Buffer.from(expectedToken);
  return (req, res, next) => {
    const header = req.get('Authorization') ?? '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    const supplied = Buffer.from(token);
    if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) {
      return res.status(401).json({ error: { code: 'ADMIN_AUTH_REQUIRED', message: '관리자 인증이 필요합니다.' } });
    }
    next();
  };
}

export function exactCors(origins) {
  return cors({
    origin(origin, done) {
      // 서버 간 호출 및 같은 origin 호출 허용. Origin이 있으면 반드시 allowlist 일치.
      if (!origin || origins.includes(origin)) return done(null, true);
      const error = new Error('허용되지 않은 호출 도메인입니다.');
      error.status = 403;
      done(error);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    credentials: true,
    maxAge: 600,
  });
}

export function basicHeaders(_req, res, next) {
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
}
