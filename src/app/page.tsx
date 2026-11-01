"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PillarsSection } from "@/components/PillarsSection";
import { SisterConcernsSection } from "@/components/SisterConcernsSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { HighlightBanner } from "@/components/HighlightBanner";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { Footer } from "@/components/Footer";
import { ExecutiveModal } from "@/components/ExecutiveModal";
import { Language, siteContent } from "@/content/content";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState("");

  // Check URL param ?lang=bn or ?lang=en on initial mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "bn" || urlLang === "en") {
        setLang(urlLang);
      }
    }
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "bn" : "en";
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", next);
        window.history.replaceState({}, "", url.toString());
      }
      return next;
    });
  };

  const handleOpenContact = (concern: string = "") => {
    setSelectedConcern(concern);
    setModalOpen(true);
  };

  // Sync document title and html lang attribute dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = siteContent.meta.title[lang];
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-steel selection:bg-gmm-flame selection:text-white flex flex-col font-sans">
      {/* Sticky Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Corporate Experience (Direct Structural Parity with nsumibc.online) */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          lang={lang}
          onOpenContact={() => handleOpenContact()}
        />

        {/* The 3-Step Operational Model */}
        <PillarsSection lang={lang} />

        {/* 6 Sister Concerns with Sticky Geometric Rosette */}
        <SisterConcernsSection
          lang={lang}
          onSelectConcern={(name) => handleOpenContact(name)}
        />

        {/* Corporate Brand Portfolio Marquee */}
        <MarqueeSection lang={lang} />

        {/* Honey-Amber Highlight Callout Banner */}
        <HighlightBanner lang={lang} />

        {/* Final Closing Call to Action */}
        <ClosingCtaSection
          lang={lang}
          onOpenContact={() => handleOpenContact()}
        />
      </main>

      {/* Corporate Executive Footer */}
      <Footer lang={lang} />

      {/* Interactive Inquiries Dialog */}
      <ExecutiveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        lang={lang}
        initialConcern={selectedConcern}
      />
    </div>
  );
}
