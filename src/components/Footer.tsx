import Link from 'next/link';
import { getLatestBlogs, pickTopAiInsights, type BlogMeta } from '@/lib/content';
import Logo from '@/components/Logo';

export default function Footer() {
  // Limit to 3 items each to keep the footer compact
  const latest = getLatestBlogs(3);
  const aiInsights = pickTopAiInsights({ limit: 3 });

  return (
    <footer className="border-t border-white/[0.05] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <Logo href="/" showText={true} />
            <p className="text-sm leading-relaxed text-zinc-500 max-w-xs">
              Personalized business systems for growing clinics.
            </p>
            <div className="pt-2">
              <a href="mailto:hello@govistudio.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
                hello@govistudio.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Navigation</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#problems">How We Help</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#solutions">What We Build</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/#process">How It Works</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/about">About</Link>
              <Link className="text-zinc-500 hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3: Articles */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Articles</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              {latest.map((post: BlogMeta) => (
                <Link key={post.path} className="text-zinc-500 hover:text-white transition-colors line-clamp-1" href={post.path}>
                  {post.title}
                </Link>
              ))}
              <Link className="text-cyan-500 hover:text-cyan-400 transition-colors pt-2" href="/blog">View All →</Link>
            </div>
          </div>

          {/* Column 4: AI Insights */}
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">AI Feeds</div>
            <div className="flex flex-col space-y-2.5 text-sm">
              {aiInsights.map((item) => (
                <Link key={item.path} className="text-zinc-500 hover:text-white transition-colors line-clamp-1" href={item.path}>
                  {item.title}
                </Link>
              ))}
              <Link className="text-cyan-500 hover:text-cyan-400 transition-colors pt-2" href="/ai">Explore Feeds →</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom strip */}
      <div className="py-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Govistudio. All rights reserved.
          </p>
          <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white transition-colors">
            Talk to Govistudio
          </a>
        </div>
      </div>
    </footer>
  );
}
