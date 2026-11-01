"use client";

import React from "react";
import { AsteriskIcon } from "./Icons";
import { siteContent, Language } from "@/content/content";

interface HighlightBannerProps {
  lang: Language;
}

export const HighlightBanner: React.FC<HighlightBannerProps> = ({ lang }) => {
  const t = siteContent.highlightBanner;

  return (
    <section className="py-28 sm:py-36 bg-gradient-to-b from-[#FFF3E8] to-[#FCE6D2] border-y border-gmm-flame/15 text-center relative overflow-hidden">
      {/* Subtle geometric background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-gmm-flame/30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Decorative Asterisk (Matches nsumibc) */}
        <div className="mb-6">
          <AsteriskIcon size={24} className="text-gmm-rust" />
        </div>

        {/* Display Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-steel leading-[1.08] mb-8">
          <span className="block font-sans">{t.headingRegular[lang]}</span>
          <span className="block font-display-italic text-gmm-rust font-normal mt-1 sm:mt-2">
            {t.headingItalic[lang]}
          </span>
        </h2>

        {/* Corporate Signature */}
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <span className="text-base sm:text-lg font-bold text-steel tracking-wide font-sans">
            {t.organization[lang]}
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate uppercase">
            {t.location[lang]}
          </span>
        </div>
      </div>
    </section>
  );
};

