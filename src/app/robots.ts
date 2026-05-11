export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: [
      'https://govistudio.com/sitemap.xml',
      'https://govistudio.com/ai-sitemap.xml'
    ],
  };
}
