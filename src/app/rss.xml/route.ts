import { getAllPosts, getPostMeta } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

function getPostContent(slug: string): string {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return '';
  const content = fs.readFileSync(filePath, 'utf8');
  // Remove frontmatter lines (key: value before first #)
  const lines = content.split('\n');
  const contentLines: string[] = [];
  let started = false;
  for (const line of lines) {
    if (line.startsWith('#')) started = true;
    if (started) contentLines.push(line);
  }
  // Return first ~500 chars as summary
  const text = contentLines.join('\n').replace(/[#>*_`]+/g, '').trim();
  return text.length > 500 ? text.slice(0, 500) + '…' : text;
}

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = 'https://govistudio.com';
  
  const items = posts.map(post => {
    const content = getPostContent(post.slug);
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <lastBuildDate>${new Date(post.updatedAt).toUTCString()}</lastBuildDate>
      <author><![CDATA[${post.author}]]></author>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map(t => `<category><![CDATA[${t}]]></category>`).join('\n      ')}
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GOVI Studio Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>AI Systems &amp; Product Engineering insights for traditional businesses</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js RSS Generator</generator>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
