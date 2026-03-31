import Link from 'next/link';
import { BookOpen, Rss } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | GOVI Studio',
  description: 'AI Systems & Product Engineering insights for traditional businesses. Learn about automation, AI integration, and workflow optimization.',
  alternates: {
    types: {
      'application/rss+xml': 'https://govistudio.com/rss.xml',
    },
  },
};

export default async function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <nav className="fixed top-0 w-full z-50 px-8 py-4 backdrop-blur-xl border-b border-white/[0.06] bg-black/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">GOVI</span>
            <span className="text-gray-500 ml-1 font-normal">STUDIO</span>
          </Link>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500">
            <Link href="/ai" className="hover:text-white transition-colors">AI Feed</Link>
            <Link href="/rss.xml" className="flex items-center gap-1 hover:text-white transition-colors" target="_blank">
              <Rss className="w-3 h-3" />
              RSS
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <BookOpen className="w-3 h-3" />
            Insights & Strategy
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            The Business of AI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Practical guides and strategic insights on implementing AI systems for revenue-generating workflows in traditional industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              href={`/blog/${post.slug}`}
              summary={post.description}
              readTimeMinutes={5}
              tag={post.category}
            />
          ))}
        </div>

        <section className="mt-20 p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <h2 className="text-2xl font-bold mb-4">Subscribe to AI Updates</h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            Get the latest AI systems insights delivered to your feed reader. Subscribe via RSS or JSON Feed.
          </p>
          <div className="flex gap-4">
            <Link href="/rss.xml" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm" target="_blank">
              RSS Feed
            </Link>
            <Link href="/api/feed.json" className="border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all text-sm" target="_blank">
              JSON Feed
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
