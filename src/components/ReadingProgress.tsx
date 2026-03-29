"use client";

import { useEffect, useMemo, useState } from "react";

export default function ReadingProgress({
  targetId = "article",
}: {
  targetId?: string;
}) {
  const [progress, setProgress] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      const total = el.scrollHeight - viewportHeight;
      if (total <= 0) {
        setProgress(1);
        return;
      }

      const scrolled = window.scrollY - (el.offsetTop ?? 0);
      const next = Math.min(1, Math.max(0, scrolled / total));
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          width: `${progress * 100}%`,
          transition: prefersReducedMotion ? undefined : "width 120ms linear",
        }}
      />
    </div>
  );
}
