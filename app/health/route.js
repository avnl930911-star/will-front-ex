import { handleNextRequest } from '../../server/next-runtime.mjs';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;

export const GET = handleNextRequest;
export const POST = handleNextRequest;
export const PUT = handleNextRequest;
export const PATCH = handleNextRequest;
export const DELETE = handleNextRequest;
export const HEAD = handleNextRequest;
export const OPTIONS = handleNextRequest;
