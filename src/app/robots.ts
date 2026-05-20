export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Anthropic-AI', 'Applebot-Extended', 'Bytespider', 'CCBot', 'cohere-ai'],
        allow: [
          '/',
          '/case-studies/',
          '/faq/',
          '/blog/',
          '/ai/',
          '/about/',
          '/use-cases/',
          '/llms.txt',
        ],
      },
    ],
    sitemap: [
      'https://govistudio.com/sitemap.xml',
    ],
    host: 'https://govistudio.com',
  };
}
