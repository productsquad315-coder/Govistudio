import Link from 'next/link';
import { getLatestBlogs, pickTopAiInsights, type BlogMeta } from '@/lib/content';

export default function Footer() {
  const latest = getLatestBlogs(5);
  const aiInsights = pickTopAiInsights({ limit: 4 });

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Main heading */}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-12">Insights &amp; Resources</h2>

        {/* 6-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Column 1: GOVISTUDIO */}
          <div className="space-y-4">
            <div className="text-sm font-bold text-white">GOVISTUDIO</div>
            <p className="text-sm leading-relaxed text-gray-500">
              GOVISTUDIO builds software-based AI systems for traditional businesses, focusing on automation, decision-making, and revenue-generating workflows.
            </p>
          </div>

          {/* Column 2: Blog Topics */}
          <div className="space-y-4">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Blog Topics</div>
            <div className="space-y-3 text-sm">
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/blog/ai-systems-overview">
                AI Systems
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/blog/ai-for-daily-business-operations">
                Automation
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/blog/what-is-ai-in-business-simple-guide">
                AI for Business
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/blog/ai-use-cases-in-real-businesses">
                Case Studies
              </Link>
            </div>
          </div>

          {/* Column 3: Latest Articles */}
          <div className="space-y-4">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Latest Articles</div>
            <div className="space-y-3 text-sm">
              {latest.map((post: BlogMeta) => (
                <Link
                  key={post.path}
                  className="block text-gray-500 hover:text-white transition-colors line-clamp-1"
                  href={post.path}
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: AI Insights */}
          <div className="space-y-4">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">AI Insights</div>
            <div className="space-y-3 text-sm">
              {aiInsights.map((item) => (
                <Link
                  key={item.path}
                  className="block text-gray-500 hover:text-white transition-colors line-clamp-1"
                  href={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Resources */}
          <div className="space-y-4">
            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Resources</div>
            <div className="space-y-3 text-sm">
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/use-cases/lead-conversion">
                Lead Conversion
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/use-cases/quoting-pricing">
                Quoting & Pricing
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/use-cases/operations-visibility">
                Operations Visibility
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/use-cases/task-execution">
                Task Execution
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/use-cases/payments-collections">
                Payments & Collections
              </Link>
              <div className="pt-2 border-t border-white/[0.06]" />
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/blog">
                View All Articles
              </Link>
              <Link className="block text-gray-500 hover:text-white transition-colors" href="/ai">
                Explore AI Feed
              </Link>
            </div>
          </div>

          {/* Column 6: Company / Legal / Contact (merged, lower visual weight) */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">Company</div>
              <div className="space-y-2 text-sm">
                <Link className="block text-gray-600 hover:text-gray-400 transition-colors" href="/about">About Us</Link>
                <Link className="block text-gray-600 hover:text-gray-400 transition-colors" href="/use-cases">Use Cases</Link>
                <Link className="block text-gray-600 hover:text-gray-400 transition-colors" href="/blog">Blog</Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">Legal</div>
              <div className="space-y-2 text-sm">
                <Link className="block text-gray-600 hover:text-gray-400 transition-colors" href="/privacy">Privacy Policy</Link>
                <Link className="block text-gray-600 hover:text-gray-400 transition-colors" href="/terms">Terms</Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">Contact</div>
              <div className="space-y-2 text-sm">
                <a href="https://calendly.com/vijay-01" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-gray-400 transition-colors">Schedule a Call</a>
                <a href="mailto:hello@govistudio.com" className="block text-gray-600 hover:text-gray-400 transition-colors">hello@govistudio.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thin bottom strip */}
      <div className="py-6 border-t border-white/[0.04] text-center">
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Govistudio. AI Systems & Product Engineering.
        </p>
      </div>
    </footer>
  );
}
