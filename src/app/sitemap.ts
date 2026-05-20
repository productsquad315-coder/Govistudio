import { getAllPosts } from '@/lib/blog';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

export default function sitemap() {
  const baseUrl = 'https://govistudio.com';
  const posts = getAllPosts();
  const caseStudySlugs = getAllCaseStudySlugs();

  const urls = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/use-cases`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/ai`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/rss.xml`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/api/feed.json`, lastModified: new Date(), priority: 0.3 },
    // Case study pages (high priority for GEO)
    ...caseStudySlugs.map(slug => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date(),
      priority: 0.85,
    })),
    // Blog posts
    ...posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      priority: 0.7,
    })),
  ];

  return urls.map(({ url, lastModified, priority }) => ({
    url,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: priority ?? 0.5,
  }));
}
