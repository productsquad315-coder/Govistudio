import fs from 'fs';
import path from 'path';

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
}

export function getAllPostSlugs(): string[] {
  const postsDir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir).filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''));
}

export function parseFrontmatter(md: string): { frontmatter: Record<string, string>; content: string } {
  const clean = md.replace(/\r\n/g, '\n').trim();
  const lines = clean.split('\n');
  const frontmatter: Record<string, string> = {};
  let i = 0;
  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#')) break;
    const match = /^([\w-]+):\s*(.+)$/.exec(line);
    if (match) {
      frontmatter[match[1]] = match[2];
    }
  }
  return { frontmatter, content: lines.slice(i).join('\n') };
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  const { frontmatter } = parseFrontmatter(content);
  const title = frontmatter.title ?? (() => {
    const lines = content.split('\n');
    const titleLine = lines.find(l => l.startsWith('# '));
    return titleLine ? titleLine.replace('# ', '').trim() : slug;
  })();
  return {
    slug,
    title,
    description: frontmatter.description ?? '',
    author: frontmatter.author ?? 'GOVI Studio',
    publishedAt: frontmatter.publishedAt ?? new Date().toISOString().split('T')[0],
    updatedAt: frontmatter.updatedAt ?? frontmatter.publishedAt ?? new Date().toISOString().split('T')[0],
    category: frontmatter.category ?? 'AI Systems',
    tags: (frontmatter.tags ?? '').split(',').map(t => t.trim()).filter(Boolean),
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map(getPostMeta).filter(Boolean) as PostMeta[];
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
