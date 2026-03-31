export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/blog', '/api/feed.json', '/rss.xml'],
        disallow: ['/api/', '/admin'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
      },
    ],
    sitemap: 'https://govistudio.com/sitemap.xml',
  };
}
