"use client";

import React from "react";
import { siteContent, Language } from "@/content/content";

interface PillarsSectionProps {
  lang: Language;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ lang }) => {
  const t = siteContent.pillars;

  return (
    <section id="operational-model" className="py-24 sm:py-32 bg-[#FAF9F6] relative border-t border-steel/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
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
        </div>

        {/* Desktop / Tablet Horizontal Roadmap (Connected by horizontal hairline) */}
        <div className="hidden md:block relative">
          {/* Connector Line behind circles */}
          <div className="absolute top-7 left-12 right-12 h-[1px] bg-steel/15 z-0" />

          {/* 3 Step Columns */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {t.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Numbered Circle (01, 02, 03) */}
                <div className="w-14 h-14 rounded-full bg-white border border-steel/20 flex items-center justify-center text-sm font-semibold text-steel group-hover:border-gmm-flame group-hover:text-gmm-flame group-hover:shadow-[0_0_20px_rgba(250,93,25,0.2)] transition-all duration-300 mb-8 bg-[#FAF9F6]">
                  {step.stepNumber}
                </div>

                {/* Step Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-steel mb-4 tracking-tight group-hover:text-gmm-flame transition-colors">
                  {step.title[lang]}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate leading-relaxed max-w-xs font-normal">
                  {step.description[lang]}
                </p>

                {/* Secondary Sub-action link on middle pillar */}
                {idx === 1 && (
                  <div className="mt-6 pt-4 border-t border-steel/10 w-32">
                    <span className="text-[11px] font-bold tracking-widest text-gmm-flame uppercase">
                      {step.tag[lang]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stepper (Exact match to nsumibc mobile) */}
        <div className="md:hidden flex flex-col space-y-12 relative pl-8 before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[1px] before:bg-steel/20">
          {t.steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-start">
              {/* Stepper Circle */}
              <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-white border border-steel/20 flex items-center justify-center text-xs font-bold text-steel shadow-sm">
                {step.stepNumber}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-steel mb-2">
                {step.title[lang]}
              </h3>
              <p className="text-sm text-slate leading-relaxed font-normal">
                {step.description[lang]}
              </p>
              {idx === 1 && (
                <span className="text-[10px] font-bold tracking-widest text-gmm-flame uppercase mt-3">
                  {step.tag[lang]}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer Prompt */}
        <div className="text-center mt-16 sm:mt-24">
          <span className="text-xs font-bold tracking-widest text-slate uppercase">
            {t.takeAction[lang]}
          </span>
        </div>
      </div>
    </section>
  );
};

