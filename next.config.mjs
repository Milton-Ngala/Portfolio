import { execSync } from 'child_process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    // Injected at build time — safe to expose, no secrets
    NEXT_PUBLIC_COMMIT_SHA: (() => {
      try {
        return execSync('git rev-parse --short HEAD').toString().trim();
      } catch {
        return 'unknown';
      }
    })(),
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
