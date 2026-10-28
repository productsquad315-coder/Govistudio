import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next's built-in "/:path+/" → "/:path+" 308 runs before rewrites, so the
  // kit folder can never answer both slash forms while it is enabled.
  // The redirects() rule below puts that 308 back for every other path.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/calculator.html',
        destination: '/enquiry-follow-up-kit/calculator.html',
        permanent: true,
      },
      // Landing-page links are directory-relative. On the canonical no-slash
      // URL the browser requests these at the site root; send them to the kit.
      {
        source: '/docs/tracker-template.csv',
        destination: '/enquiry-follow-up-kit/docs/tracker-template.csv',
        permanent: true,
      },
      {
        source: '/docs/tracker-template.tsv',
        destination: '/enquiry-follow-up-kit/docs/tracker-template.tsv',
        permanent: true,
      },
      {
        source: '/docs/tracker-howto.md',
        destination: '/enquiry-follow-up-kit/docs/tracker-howto.md',
        permanent: true,
      },
      {
        source: '/LICENSE',
        destination: '/enquiry-follow-up-kit/LICENSE',
        permanent: true,
      },
      {
        source: '/README.md',
        destination: '/enquiry-follow-up-kit/README.md',
        permanent: true,
      },
      {
        source: '/:path((?!enquiry-follow-up-kit/$).+)/',
        destination: '/:path',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          // Non-internal routes also match one trailing slash, so this
          // serves index.html for both /enquiry-follow-up-kit and
          // /enquiry-follow-up-kit/ with status 200.
          source: '/enquiry-follow-up-kit',
          destination: '/enquiry-follow-up-kit/index.html',
        },
      ],
    }
  },
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
  generateEtags: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/assets/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
