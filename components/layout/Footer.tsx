"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { ArrowUp } from "lucide-react";
import { assetPath } from "@/lib/utils";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--color-border)]/60 pt-20 pb-12 overflow-hidden relative">
      {/* Huge Faint Watermark Line matching mockup page 7 */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-16 select-none pointer-events-none text-center">
        <span className="font-display italic text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[var(--color-ink)]/10 block whitespace-nowrap overflow-hidden text-ellipsis">
          {siteContent.contact.watermark}
        </span>
      </div>

      {/* Footer Navigation & Credits */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--color-muted)] font-mono">
        <div>© 2026 Raj Magdum</div>

        <div className="text-center text-[var(--color-faint)]">
          Built with Next.js, by hand
        </div>

        <div className="flex items-center gap-6">
          {siteContent.contact.links.map((link) => {
            const isLocal = link.href.startsWith("/");
            return (
              <a
                key={link.label}
                href={isLocal ? assetPath(link.href) : link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={link.href.endsWith(".pdf") ? "Raj-Magdum-Resume.pdf" : undefined}
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                {link.label}
              </a>
            );
          })}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[var(--color-ink)] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
