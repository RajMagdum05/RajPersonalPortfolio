"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/utils";

export const Hero: React.FC = () => {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 md:pt-36 pb-8 max-w-[1200px] mx-auto px-5 sm:px-8 overflow-hidden"
    >
      {/* Background Soft Glow (jade accent at 6% opacity) */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/8 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Hero Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Status Chip — fresh green pulse */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/8 text-xs font-mono text-[#4ADE80] mb-8 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>{hero.status}</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-faint)] mb-4"
          >
            {hero.eyebrow}
          </motion.div>

          {/* Large Editorial Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[var(--color-ink)] leading-[0.92] tracking-tight mb-8"
          >
            <span className="block font-normal">{hero.name.first}</span>
            <span className="block italic font-normal text-[var(--color-ink)]">{hero.name.last}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] font-normal leading-snug mb-3 max-w-2xl"
          >
            {hero.tagline}{" "}
            <span className="italic text-[var(--color-ink)]">{hero.taglineEmphasis}</span>
          </motion.p>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            {hero.subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="#work" variant="primary" size="lg" icon>
              {hero.cta.primary}
            </Button>
            <div className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-transparent p-1 h-12 hover:border-[var(--color-border-hover)] transition-all">
              <a
                href={assetPath("/Raj-Magdum-Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-base font-medium text-[var(--color-ink)] hover:text-[#4ADE80] transition-colors"
              >
                <span>View CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="w-px h-5 bg-[var(--color-border)]" aria-hidden="true" />
              <a
                href={assetPath("/Raj-Magdum-Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                download="Raj-Magdum-Resume.pdf"
                title="Download CV (PDF)"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] rounded-full transition-all"
              >
                <ArrowDown className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">Download</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Interactive Pills (People -> Problems -> Products) */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative min-h-[380px]">
          <div className="relative flex flex-col items-end gap-14 w-full pr-8">
            {/* SVG Animated Dashed Connecting Line */}
            <svg
              className="absolute right-[58px] top-6 w-24 h-64 pointer-events-none -z-0"
              viewBox="0 0 100 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 60 10 L 60 80 Q 60 120 40 130 L 40 180"
                stroke="var(--color-border)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash-loop"
              />
            </svg>

            {/* Pill 1: People — indigo/violet */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="z-10 bg-[#1E1B4B]/60 border border-[#818CF8]/30 rounded-2xl px-6 py-3.5 shadow-sm hover:border-[#818CF8]/70 hover:shadow-[0_0_28px_rgba(129,140,248,0.25)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <span className="font-display text-xl text-[#C7D2FE] group-hover:text-[#E0E7FF] transition-colors">
                People
              </span>
            </motion.div>

            {/* Pill 2: Problems — amber/gold */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="z-10 mr-12 bg-[#1C1407]/60 border border-[#FBBF24]/25 rounded-2xl px-6 py-3.5 shadow-sm hover:border-[#FBBF24]/60 hover:shadow-[0_0_28px_rgba(251,191,36,0.2)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <span className="font-display text-xl text-[#FDE68A] group-hover:text-[#FEF3C7] transition-colors">
                Problems
              </span>
            </motion.div>

            {/* Pill 3: Products — vibrant emerald filled */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="z-10 bg-gradient-to-r from-[#15803D] to-[#059669] text-white border border-[#22C55E]/50 rounded-full px-7 py-3.5 shadow-[0_0_28px_rgba(34,197,94,0.35)] hover:shadow-[0_0_44px_rgba(34,197,94,0.55)] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <span className="font-display italic text-xl tracking-wide">
                Products
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Meta Row matching mockup */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="pt-8 border-t border-[var(--color-border)]/60 flex flex-wrap items-center justify-between gap-y-3 text-xs font-mono text-[var(--color-muted)]"
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {hero.metaItems.map((item, idx) => (
            <span key={item} className="flex items-center gap-6">
              <span>{item}</span>
              {idx < hero.metaItems.length - 1 && (
                <span className="text-[var(--color-border)] hidden sm:inline">/</span>
              )}
            </span>
          ))}
        </div>

        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors cursor-pointer group"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};
