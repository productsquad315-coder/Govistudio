interface UseCaseCardProps {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  index: number;
}

export default function UseCaseCard({ title, problem, solution, impact, index }: UseCaseCardProps) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-400 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="text-xl font-semibold text-white leading-tight">{title}</h3>
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-600 mb-2">Problem</h4>
          <p className="text-gray-400 text-[15px] leading-relaxed">{problem}</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-600 mb-2">What We Build</h4>
          <p className="text-gray-400 text-[15px] leading-relaxed">{solution}</p>
        </div>

        <div className="pt-4 border-t border-white/[0.06]">
          <h4 className="text-xs uppercase tracking-wider text-blue-400 mb-2">Revenue Impact</h4>
          <p className="text-white text-[15px] leading-relaxed font-medium">{impact}</p>
        </div>
      </div>
    </div>
  );
}
