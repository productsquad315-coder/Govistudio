import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FeedCard({
  title,
  href,
  summary,
  tag,
}: {
  title: string;
  href: string;
  summary: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
    >
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono mb-3">
        <span className="text-purple-400 font-bold">{tag}</span>
      </div>

      <div className="flex items-start gap-3">
        <div className="mt-1">
          <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-purple-400 transition-colors" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-gray-100 group-hover:text-white transition-colors leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
