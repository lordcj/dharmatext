import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 80],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Optimizations for 100k+ pages
  experimental: {
    // Prevent OOM errors during massive builds
    staticGenerationRetryCount: 3,
    staticGenerationMaxConcurrency: 8,
  },
};

export default nextConfig;
