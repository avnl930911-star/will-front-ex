/** 관리자·고객 화면과 API는 같은 Node.js 프로세스에서 제공합니다. */
const config = {
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ['express', 'serverless-http'],
  outputFileTracingIncludes: {
    '/api/*': ['./data/seed.json', './fixtures/**/*', './server/**/*'],
    '/auth/*': ['./data/seed.json', './server/**/*'],
    '/media/*': ['./data/seed.json', './fixtures/**/*', './server/**/*'],
    '/health': ['./data/seed.json', './server/**/*'],
  },
  experimental: { cpus: 2 },
};
export default config;
