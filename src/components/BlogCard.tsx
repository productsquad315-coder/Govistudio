import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogCard({
  title,
  href,
  summary,
  readTimeMinutes,
  tag,
}: {
  title: string;
  href: string;
  summary: string;
  readTimeMinutes: number;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group relative p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
    >
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono mb-4">
        <span className="text-blue-400 font-bold">{tag}</span>
        <span className="opacity-20">/</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" /> {readTimeMinutes} min
        </span>
      </div>

      <h3 className="text-[18px] font-semibold leading-snug line-clamp-2 mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">{summary}</p>

      <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-200 group-hover:gap-4 transition-all">
        Read <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
