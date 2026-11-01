"use client";

import React, { useState } from "react";
import { siteContent, Language } from "@/content/content";

interface ExecutiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialConcern?: string;
}

export const ExecutiveModal: React.FC<ExecutiveModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialConcern = "",
}) => {
  const t = siteContent.contactModal;
  const concerns = siteContent.concernsSection.items;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: initialConcern,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-steel/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-steel/10 p-6 sm:p-8 overflow-hidden text-left">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-steel font-sans">
              {t.title[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-slate mt-1">
              {t.subtitle[lang]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate hover:text-steel hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gmm-flame/15 text-gmm-flame flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base font-semibold text-steel">
              {t.submittedMsg[lang]}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-1.5">
                {t.nameLabel[lang]}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-steel/15 bg-[#FAF9F6] text-sm text-steel focus:outline-none focus:border-gmm-flame focus:ring-1 focus:ring-gmm-flame transition-all"
                placeholder={lang === "bn" ? "যেমন: মোহাম্মদ রহিম" : "e.g. John Doe"}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-1.5">
                {t.emailLabel[lang]}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-steel/15 bg-[#FAF9F6] text-sm text-steel focus:outline-none focus:border-gmm-flame focus:ring-1 focus:ring-gmm-flame transition-all"
                placeholder={lang === "bn" ? "executive@company.com" : "executive@company.com"}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-1.5">
                {t.concernLabel[lang]}
              </label>
              <select
                value={formData.concern}
                onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-steel/15 bg-[#FAF9F6] text-sm text-steel focus:outline-none focus:border-gmm-flame focus:ring-1 focus:ring-gmm-flame transition-all"
              >
                <option value="">{lang === "bn" ? "সাধারণ কর্পোরেট অনুসন্ধান" : "General Corporate Inquiry"}</option>
                {concerns.map((c) => (
                  <option key={c.id} value={c.name[lang]}>
                    {c.name[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-steel uppercase tracking-wider mb-1.5">
                {t.messageLabel[lang]}
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-steel/15 bg-[#FAF9F6] text-sm text-steel focus:outline-none focus:border-gmm-flame focus:ring-1 focus:ring-gmm-flame transition-all resize-none"
                placeholder={lang === "bn" ? "আপনার বার্তা বা প্রস্তাবনা লিখুন..." : "Outline your proposed partnership or scope..."}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="pill-button pill-button-primary w-full py-3 text-center text-xs tracking-widest"
              >
                {t.submitBtn[lang]}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

