"use client";

import React from "react";
import { AsteriskIcon } from "./Icons";
import { siteContent, Language } from "@/content/content";

interface ClosingCtaSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({
  lang,
  onOpenContact,
}) => {
  const t = siteContent.closingCta;

  return (
    <section className="py-28 sm:py-36 bg-[#FAF9F6] text-center relative overflow-hidden border-b border-steel/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Decorative Asterisk */}
        <div className="mb-8">
          <AsteriskIcon size={24} className="text-gmm-flame" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-steel leading-[1.08] mb-6">
          <span className="block font-sans">{t.headingRegular[lang]}</span>
          <span className="block font-display-italic text-gmm-flame font-normal mt-1 sm:mt-2">
            {t.headingItalic[lang]}
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-sm sm:text-base text-slate max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          {t.paragraph[lang]}
        </p>

        {/* Pill CTA Button (Matches nsumibc REGISTER NOW button) */}
        <div>
          <button
            onClick={onOpenContact}
            className="pill-button pill-button-primary text-xs sm:text-sm py-4 px-9"
          >
            {t.cta[lang]}
          </button>
        </div>
      </div>
    </section>
  );
};

