"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/RvGMnNxZpFR9URse6";

const tickerItems = [
  "ENGINEERED FOR CONNECTIVITY",
  "RISET INTERNET OF THINGS & EMBEDDED AI",
  "UNIVERSITAS KRISNADWIPAYANA",
  "3 DOSEN PEMBIMBING AHLI",
  "12+ PROTOTYPE HARDWARE TERUJI",
  "FUN, SERIOUS, RESEARCH & ANALYSIS",
  "DARI SCHEMATIC KE CLOUD DASHBOARD",
  "OPEN RECRUITMENT KOMUNITAS BUKA",
];

export function AnnouncementBar() {
  return (
    <div className="bg-neutral-950 text-neutral-300 text-[11px] font-medium tracking-widest uppercase border-b border-neutral-800/80 overflow-hidden select-none">
      <div className="flex items-center justify-between h-9 px-4 max-w-[1440px] mx-auto">
        {/* Infinite scrolling ticker */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
          <div className="animate-marquee whitespace-nowrap py-1">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="inline-flex items-center mx-6 text-neutral-400 font-sans">
                <span className="text-primary font-bold mr-3 text-xs">/</span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 pl-6 text-neutral-200 hover:text-primary transition-colors font-semibold shrink-0 group"
        >
          <span>Pendaftaran Terbuka</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
