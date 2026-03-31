import { getAllPosts } from '@/lib/blog';

export default function sitemap() {
  const baseUrl = 'https://govistudio.com';
  const posts = getAllPosts();
  const urls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/rss.xml`, lastModified: new Date() },
    { url: `${baseUrl}/api/feed.json`, lastModified: new Date() },
    { url: `${baseUrl}/ai`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
    })),
  ];
  return urls.map(({ url, lastModified }) => ({
    url,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: url === baseUrl ? 1 : url.includes('/blog/') ? 0.8 : 0.6,
  }));
}
