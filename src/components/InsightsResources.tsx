import Link from "next/link";
import { getLatestBlogs, pickTopAiInsights, type BlogMeta } from "@/lib/content";

export default function InsightsResources() {
  const latest = getLatestBlogs(5);
  const aiInsights = pickTopAiInsights({ limit: 4 });

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-white/[0.06]">
      <div className="flex flex-col gap-4 mb-10">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Insights &amp; Resources</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
        <div className="space-y-4">
          <div className="text-sm font-bold text-white">GOVISTUDIO</div>
          <p className="text-sm leading-relaxed text-gray-400">
            GOVISTUDIO builds software-based AI systems for traditional businesses, focusing on automation,
            decision-making, and revenue-generating workflows.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-white">Blog Topics</div>
          <div className="space-y-3 text-sm">
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/blog/ai-systems-overview">
              AI Systems
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/blog/ai-for-daily-business-operations">
              Automation
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/blog/what-is-ai-in-business-simple-guide">
              AI for Business
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/blog/ai-use-cases-in-real-businesses">
              Case Studies
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-white">Latest Articles</div>
          <div className="space-y-3 text-sm">
            {latest.map((post: BlogMeta) => (
              <Link
                key={post.path}
                className="block text-gray-400 hover:text-white hover:underline underline-offset-4"
                href={post.path}
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-white">AI Insights</div>
          <div className="space-y-3 text-sm">
            {aiInsights.map((item) => (
              <Link
                key={item.path}
                className="block text-gray-400 hover:text-white hover:underline underline-offset-4"
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-bold text-white">Resources</div>
          <div className="space-y-3 text-sm">
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/ai/implementation/ai-vs-hiring-employees">
              AI vs Hiring
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/ai/implementation/ai-vs-manual-workflows">
              Automation vs Manual Work
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/ai/implementation/ai-systems-vs-saas-tools">
              Tools comparisons
            </Link>
            <div className="pt-2 border-t border-white/[0.06]" />
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/blog">
              View All Articles
            </Link>
            <Link className="block text-gray-400 hover:text-white hover:underline underline-offset-4" href="/ai">
              Explore AI Feed
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
