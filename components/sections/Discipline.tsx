"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export const Discipline: React.FC = () => {
  const { discipline } = siteContent;

  return (
    <section
      id="discipline"
      className="py-24 sm:py-36 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      {/* Editorial Transition Quote matching Page 6 */}
      <Reveal className="text-center py-16 sm:py-24 max-w-xl mx-auto space-y-2">
        <p className="font-display text-2xl sm:text-3xl text-[var(--color-muted)] font-normal">
          {discipline.transition[0]}
        </p>
        <p className="font-display italic text-3xl sm:text-4xl text-[var(--color-ink)]">
          {discipline.transition[1]}
        </p>
      </Reveal>

      <Reveal>
        <SectionHeader
          eyebrow={discipline.eyebrow}
          title={discipline.title}
          titleEmphasis={discipline.titleEmphasis}
        />
      </Reveal>

      {/* Main Grid: Left Chart/Counter (5 cols) + Right 3-year Steps (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Big Counter & Trend Chart */}
        <Reveal className="lg:col-span-5" delay={0.1}>
          <Card className="bg-[var(--color-surface)] border-[var(--color-border)] p-8 sm:p-10 text-center flex flex-col items-center">
            {/* Big Counter */}
            <div className="flex items-baseline justify-center gap-1 mb-2 font-display text-6xl sm:text-7xl text-[var(--color-ink)]">
              <span className="text-[#22C55E]">−</span>
              <Counter value={25} duration={1.4} />
              <span className="text-3xl sm:text-4xl font-normal text-[#22C55E] font-sans">
                kg
              </span>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-faint)] mb-8">
              {discipline.stat.sub}
            </div>

            {/* Minimal SVG Downward Trend Chart with Rich Dual-Tone Gradient */}
            <div className="w-full max-w-xs mx-auto py-4">
              <svg
                viewBox="0 0 300 120"
                className="w-full h-24 overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="40%" stopColor="#22C55E" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                  <filter id="dotGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                {/* Area fill under curve */}
                <path
                  d="M 20 25 C 100 35, 180 80, 280 100 L 280 120 L 20 120 Z"
                  fill="url(#trendGradient)"
                  opacity="0.08"
                />
                {/* Smooth Curve */}
                <path
                  d="M 20 25 C 100 35, 180 80, 280 100"
                  stroke="url(#trendGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Point 1 — teal */}
                <circle cx="20" cy="25" r="4.5" fill="var(--color-bg)" stroke="#06B6D4" strokeWidth="2.5" filter="url(#dotGlow)" />
                {/* Point 2 — emerald */}
                <circle cx="150" cy="65" r="4.5" fill="var(--color-bg)" stroke="#22C55E" strokeWidth="2.5" />
                {/* Point 3 — gold */}
                <circle cx="280" cy="100" r="5.5" fill="#FBBF24" filter="url(#dotGlow)" />
              </svg>

              {/* Year Labels */}
              <div className="flex justify-between text-xs font-mono text-[var(--color-faint)] mt-4 px-2">
                <span>Year 1</span>
                <span>Year 2</span>
                <span>Year 3</span>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal className="lg:col-span-7 space-y-8" delay={0.2}>
          <div className="divide-y divide-[var(--color-border)]/60 border-y border-[var(--color-border)]/60">
            {discipline.steps.map((step, idx) => {
              const stepColors = ["#06B6D4", "#22C55E", "#FBBF24"];
              const c = stepColors[idx % stepColors.length];
              return (
                <div key={step.year} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  <span
                    className="font-mono text-xs uppercase tracking-[0.14em] w-24 shrink-0"
                    style={{ color: c }}
                  >
                    {step.year}
                  </span>
                  <div>
                    <h4 className="font-display text-2xl text-[var(--color-ink)] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-display text-xl sm:text-2xl text-[var(--color-ink)] leading-snug pt-4">
            The same discipline goes into everything I build:{" "}
            <span className="italic text-[var(--color-ink)]">show up, measure honestly, iterate.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
