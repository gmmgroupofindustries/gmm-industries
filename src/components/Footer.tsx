"use client";

import React from "react";
import { GmmLogo } from "./GmmLogo";
import { SocialIcons } from "./Icons";
import { siteContent, Language } from "@/content/content";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = siteContent.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="the-group" className="bg-[#FAF9F6] py-16 sm:py-20 text-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row (Exact layout from nsumibc) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-steel/[0.08]">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <GmmLogo className="h-10 w-auto" />
          </div>

          {/* Center: Social Icons in Circular Badges */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-steel/20 flex items-center justify-center text-steel hover:text-gmm-flame hover:border-gmm-flame hover:shadow-sm transition-all"
              aria-label="Facebook"
            >
              <SocialIcons.Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-steel/20 flex items-center justify-center text-steel hover:text-gmm-flame hover:border-gmm-flame hover:shadow-sm transition-all"
              aria-label="Instagram"
            >
              <SocialIcons.Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-steel/20 flex items-center justify-center text-steel hover:text-gmm-flame hover:border-gmm-flame hover:shadow-sm transition-all"
              aria-label="LinkedIn"
            >
              <SocialIcons.LinkedIn className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-xs sm:text-sm font-semibold text-steel hover:text-gmm-flame transition-colors flex items-center gap-1.5"
            >
              <span>{t.backToTop[lang]}</span>
            </button>
          </div>
        </div>

        {/* Corporate Legal & Headquarters Details */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate">
          <div>
            <p className="font-medium text-steel">{t.addressTitle[lang]}: {t.address[lang]}</p>
            <p className="mt-1">
              Tel: {t.phone[lang]} · Email:{" "}
              <a href={`mailto:${t.email[lang]}`} className="underline hover:text-gmm-flame">
                {t.email[lang]}
              </a>
            </p>
          </div>
          <div className="text-left md:text-right">
            <p>{t.rights[lang]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

