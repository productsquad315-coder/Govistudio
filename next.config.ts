import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    // Public folder assets (logos, images) aren't content-hashed, so
    // updating a file's contents without renaming it must still reach
    // visitors in a reasonable time — a short max-age with
    // stale-while-revalidate, not a year-long immutable lock.
    // (Next.js already applies its own correct long-cache immutable
    // headers to hashed /_next/static/* build assets automatically —
    // that must never be overridden by a blanket rule here, which
    // previously also caught every HTML page and forced browsers to
    // serve a fully cached, non-revalidated page for up to a year.)
    {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400',
        },
      ],
    },
  ],
};

export default nextConfig;
