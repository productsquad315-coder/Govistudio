export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/blog', '/api/feed.json'],
      disallow: ['/api/', '/admin'],
    },
    sitemap: 'https://govistudio.com/sitemap.xml',
  };
}
