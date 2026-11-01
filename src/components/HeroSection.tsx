"use client";

import React from "react";
import { GmmSculpture } from "./GmmSculpture";
import { ArtCross } from "./Icons";
import { siteContent, Language } from "@/content/content";

interface HeroSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenContact }) => {
  const t = siteContent.hero;

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 w-full min-w-0">
            {/* Meta Pill Badge (Matching nsumibc format) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-steel/15 shadow-xs mb-6 sm:mb-8 max-w-full">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-slate uppercase truncate">
                {t.badge.tag[lang]}
              </span>
              <span className="w-1 h-3 bg-steel/20 shrink-0" />
              <span className="text-xs sm:text-[14px] font-extrabold text-gmm-flame tracking-tight shrink-0">
                {t.badge.edition[lang]}
              </span>
              <span className="w-1 h-3 bg-steel/20 shrink-0 hidden xs:inline-block" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-slate uppercase truncate hidden xs:inline-block">
                {t.badge.sub[lang]}
              </span>
            </div>

            {/* Main Headline with Sans + Italic Serif Contrast */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-steel leading-[1.1] mb-6 sm:mb-8 w-full">
              <span className="block font-sans">{t.titleLine1[lang]}</span>
              <span className="block font-display-italic text-gmm-flame font-normal mt-1 sm:mt-2">
                {t.titleLine2Italic[lang]}
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 mb-10 sm:mb-12 w-full sm:w-auto">
              <a
                href="#sister-concerns"
                className="pill-button pill-button-primary text-xs sm:text-sm py-3.5 px-7 text-center"
              >
                {t.cta[lang]}
              </a>
              <button
                onClick={onOpenContact}
                className="pill-button pill-button-outline text-xs sm:text-sm py-3.5 px-7 text-center"
              >
                {t.secondaryCta[lang]}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Sculpture & Geometric Linework */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end w-full min-w-0">
            {/* Micro Cross Accent in Corner */}
            <div className="absolute -top-6 right-2 sm:right-6 hidden sm:block">
              <ArtCross size={20} className="text-gmm-flame/40" />
            </div>

            {/* Sculpture Container */}
            <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none flex justify-center lg:justify-end">
              <GmmSculpture className="w-full" />
            </div>

            {/* Tagline Below Sculpture */}
            <div className="mt-6 text-center lg:text-right">
              <p className="text-xs sm:text-sm font-medium text-slate leading-relaxed">
                {t.taglineRight.line1[lang]}
                <br />
                {t.taglineRight.line2[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Baseline Divider & 3-Column Footer */}
        <div className="mt-14 sm:mt-24 pt-8 border-t border-steel/[0.08] grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs sm:text-[13px] text-slate w-full">
          {/* Left Column */}
          <div>
            <p className="font-medium text-steel">{t.baseline.left1[lang]}</p>
            <p className="text-slate/80">{t.baseline.left2[lang]}</p>
          </div>

          {/* Center Column: Smooth Scroll Prompt */}
          <div className="text-left md:text-center">
            <a
              href="#operational-model"
              className="inline-flex items-center gap-1.5 font-semibold text-gmm-flame hover:text-gmm-rust transition-colors"
            >
              <span>{t.baseline.centerText[lang]}</span>
            </a>
          </div>

          {/* Right Column */}
          <div className="text-left md:text-right">
            <p className="font-semibold text-steel">{t.baseline.right1[lang]}</p>
            <p className="text-slate/80">{t.baseline.right2[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
