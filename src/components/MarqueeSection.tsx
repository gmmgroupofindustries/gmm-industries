"use client";

import React, { useState } from "react";
import { siteContent, Language } from "@/content/content";

interface MarqueeSectionProps {
  lang: Language;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ lang }) => {
  const [isPaused, setIsPaused] = useState(false);
  const t = siteContent.marquee;

  // Duplicate items 4 times to ensure infinite smooth marquee scrolling
  const marqueeItems = [...t.items, ...t.items, ...t.items, ...t.items];

  return (
    <section className="py-20 bg-white border-y border-steel/[0.08] overflow-hidden select-none w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-slate">
          {t.kicker[lang]}
        </span>
      </div>

      {/* Infinite Scrolling Track */}
      <div className={`relative w-full max-w-full overflow-hidden ${isPaused ? "marquee-paused" : ""}`}>
        {/* Soft edge blur masks for light theme */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center gap-12 sm:gap-16 py-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 group cursor-pointer shrink-0"
            >
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-steel group-hover:text-gmm-flame transition-colors font-sans whitespace-nowrap">
                {item[lang]}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF9F6] border border-steel/10 text-slate">
                {item.ticker}
              </span>
              <span className="text-gmm-flame/40 text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pause / Play Control Toggle (Exact match to nsumibc) */}
      <div className="text-center mt-8">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-xs font-semibold text-slate hover:text-steel underline decoration-slate/30 underline-offset-4 transition-colors"
        >
          {isPaused ? t.playBtn[lang] : t.pauseBtn[lang]}
        </button>
      </div>
    </section>
  );
};
