import { getAllPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getAllPosts();
  const items = posts.map(post => ({
    id: `https://govistudio.com/blog/${post.slug}`,
    url: `https://govistudio.com/blog/${post.slug}`,
    title: post.title,
    summary: post.description,
    dateModified: new Date(post.updatedAt).toISOString(),
    datePublished: new Date(post.publishedAt).toISOString(),
    author: {
      name: post.author,
      url: 'https://govistudio.com',
    },
  }));
  return NextResponse.json({
    version: 'https://jsonfeed.org/version/1.1',
    title: 'GOVI Studio Blog',
    description: 'AI Systems & Product Engineering insights',
    home_page_url: 'https://govistudio.com',
    feed_url: 'https://govistudio.com/api/feed.json',
    language: 'en',
    items,
  });
}
