"use client";

import React, { useState, useEffect } from "react";
import { GmmLogo } from "./GmmLogo";
import { siteContent, Language } from "@/content/content";

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = siteContent.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-black/[0.06] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <GmmLogo className="h-9 sm:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sister-concerns"
              className="text-sm font-medium text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.concerns[lang]}
            </a>
            <a
              href="#operational-model"
              className="text-sm font-medium text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.pillars[lang]}
            </a>
            <a
              href="#the-group"
              className="text-sm font-medium text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.about[lang]}
            </a>

            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-steel/15 bg-white hover:border-gmm-flame hover:text-gmm-flame text-steel transition-all shadow-sm"
              title="Switch Language"
            >
              <span className="w-2 h-2 rounded-full bg-gmm-flame inline-block animate-pulse" />
              <span>{t.langToggle[lang]}</span>
            </button>

            {/* Primary Action Button (Matches nsumibc pill style) */}
            <button
              onClick={onOpenContact}
              className="pill-button pill-button-primary text-xs py-2.5 px-5"
            >
              {t.cta[lang]}
            </button>
          </nav>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 rounded-full text-xs font-semibold border border-steel/15 bg-white text-steel hover:border-gmm-flame"
            >
              {t.langToggle[lang]}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-steel hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col justify-between p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate">
              {siteContent.hero.badge.tag[lang]}
            </span>
            <a
              href="#sister-concerns"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.concerns[lang]}
            </a>
            <a
              href="#operational-model"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.pillars[lang]}
            </a>
            <a
              href="#the-group"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-steel hover:text-gmm-flame transition-colors"
            >
              {t.links.about[lang]}
            </a>
          </div>

          <div className="flex flex-col gap-4 border-t border-black/[0.08] pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="pill-button pill-button-primary w-full py-3.5 text-center text-sm"
            >
              {t.cta[lang]}
            </button>
            <p className="text-xs text-slate text-center">
              {siteContent.footer.address[lang]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

