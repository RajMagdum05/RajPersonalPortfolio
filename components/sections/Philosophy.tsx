"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export const Philosophy: React.FC = () => {
  const { about } = siteContent;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      <Reveal>
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          titleEmphasis={about.titleEmphasis}
        />
      </Reveal>

      {/* Two Column Layout matching Page 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left Column: Big Pull Quote */}
        <Reveal className="lg:col-span-5" delay={0.1}>
          <div className="border-l-[3px] border-[#22C55E] pl-6 py-2">
            <blockquote className="font-display italic text-3xl sm:text-4xl text-[var(--color-ink)] leading-snug mb-3">
              {about.quote}
            </blockquote>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-faint)]">
              {about.quoteSub}
            </div>
          </div>
        </Reveal>

        {/* Right Column: 3 Paragraphs */}
        <Reveal className="lg:col-span-7 space-y-6 text-[var(--color-text)] text-base sm:text-lg leading-relaxed" delay={0.2}>
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-[var(--color-text)] font-sans">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      {/* 3 Step Strip (01 People, 02 Problems, 03 Products) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {about.cards.map((card, idx) => {
          const cardStyles = [
            {
              hover: "hover:border-[#818CF8]/50 hover:shadow-[0_4px_32px_rgba(129,140,248,0.14)]",
              badge: "text-[#A5B4FC]",
              bg: "group-hover:bg-[#1E1B4B]/30",
              dot: "bg-[#818CF8]",
            },
            {
              hover: "hover:border-[#FBBF24]/45 hover:shadow-[0_4px_32px_rgba(251,191,36,0.12)]",
              badge: "text-[#FDE68A]",
              bg: "group-hover:bg-[#1C1407]/30",
              dot: "bg-[#FBBF24]",
            },
            {
              hover: "hover:border-[#22C55E]/45 hover:shadow-[0_4px_32px_rgba(34,197,94,0.14)]",
              badge: "text-[#86EFAC]",
              bg: "group-hover:bg-[#052e16]/30",
              dot: "bg-[#22C55E]",
            },
          ];
          const style = cardStyles[idx];

          return (
            <Reveal key={card.step} delay={0.1 * idx}>
              <Card
                hoverable
                className={`group bg-[var(--color-surface)] transition-all duration-400 ${style.hover} relative overflow-hidden`}
              >
                {/* Coloured top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl ${style.dot} opacity-60`} />
                <div className={`font-mono text-xs mb-4 font-semibold flex items-center gap-2 ${style.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {card.step}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                  {card.step === "03" ? (
                    <span className="italic">{card.title}</span>
                  ) : (
                    card.title
                  )}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                  {card.desc}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
