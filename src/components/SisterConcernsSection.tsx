"use client";

import React from "react";
import { SacredGeometryRosette, AsteriskIcon } from "./Icons";
import { siteContent, Language } from "@/content/content";

interface SisterConcernsSectionProps {
  lang: Language;
  onSelectConcern: (concernName: string) => void;
}

export const SisterConcernsSection: React.FC<SisterConcernsSectionProps> = ({
  lang,
  onSelectConcern,
}) => {
  const t = siteContent.concernsSection;

  return (
    <section id="sister-concerns" className="py-24 sm:py-32 bg-[#FAF9F6] relative border-t border-steel/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <p className="text-xs font-bold uppercase tracking-widest text-slate mb-3">
            {t.kicker[lang]}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-steel tracking-tight leading-tight">
            <span className="block font-sans">{t.headingRegular[lang]}</span>
            <span className="block font-display-italic text-gmm-flame font-normal mt-1 sm:mt-2">
              {t.headingItalic[lang]}
            </span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate leading-relaxed max-w-2xl mx-auto">
            {t.intro[lang]}
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Sacred Geometry Rosette Medallion */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Background Geometry SVG Rosette */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <SacredGeometryRosette className="text-gmm-flame/40" size="100%" />
              </div>

              {/* Central Text Medallion */}
              <div className="relative z-10 text-center px-6 py-4 rounded-full backdrop-blur-sm bg-white/40 border border-steel/10 shadow-sm">
                <span className="block text-base sm:text-lg font-bold text-steel">
                  {t.stickyRosette.line1[lang]}
                </span>
                <span className="block text-xl sm:text-2xl font-display-italic text-gmm-flame font-normal">
                  {t.stickyRosette.line2Italic[lang]}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Sister Concerns with Dividers */}
          <div className="lg:col-span-7 flex flex-col space-y-14 sm:space-y-16">
            {t.items.map((concern) => (
              <div key={concern.id} className="group">
                {/* Category kicker */}
                <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
                  {concern.category[lang]}
                </p>

                {/* Company Title */}
                <h3 className="text-2xl sm:text-4xl font-bold text-steel tracking-tight group-hover:text-gmm-flame transition-colors mb-4">
                  {concern.name[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate leading-relaxed font-normal mb-6">
                  {concern.description[lang]}
                </p>

                {/* Metrics & Location Chips */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-steel/10 text-steel shadow-xs">
                    {concern.metrics[lang]}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gmm-highlight/50 border border-gmm-flame/20 text-gmm-rust">
                    {concern.location[lang]}
                  </span>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectConcern(concern.name[lang])}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-gmm-flame hover:text-gmm-rust uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>{concern.linkText[lang]}</span>
                  <span>→</span>
                </button>

                {/* Decorative Hairline with Asterisk (Matches nsumibc divider) */}
                <div className="mt-12 flex items-center justify-center gap-4">
                  <div className="h-[1px] bg-steel/10 flex-grow" />
                  <AsteriskIcon size={14} className="text-gmm-flame/50 group-hover:text-gmm-flame transition-colors" />
                  <div className="h-[1px] bg-steel/10 flex-grow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
