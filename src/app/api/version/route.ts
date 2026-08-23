import { NextResponse } from 'next/server';

/**
 * GET /api/version
 *
 * Returns a safe, non-sensitive deployment diagnostic payload.
 * Useful for verifying which commit is actually running in production.
 *
 * Values are injected at build time by next.config.mjs via env.
 * No secrets, API keys, or private config are exposed.
 */
export const GET = () => {
  return NextResponse.json({
    commit: process.env.NEXT_PUBLIC_COMMIT_SHA ?? 'unknown',
    buildTime: process.env.NEXT_PUBLIC_BUILD_TIME ?? 'unknown',
    environment: process.env.NODE_ENV ?? 'unknown',
  });
};
