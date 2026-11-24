"use client";

import React, { useRef } from "react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { assetPath } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** One letter that rises out of its own mask. */
const letter: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.55 + i * 0.045, ease: EASE },
  }),
};

const SplitWord: React.FC<{ word: string; offset: number; className?: string }> = ({
  word,
  offset,
  className,
}) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className ?? ""}`} aria-hidden="true">
    {word.split("").map((ch, i) => (
      <motion.span
        key={`${ch}-${i}`}
        custom={offset + i}
        variants={letter}
        className="inline-block will-change-transform"
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

export const Hero: React.FC = () => {
  const { hero } = siteContent;
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax: portrait sinks slowly, name drifts up and apart.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.92]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fullName = `${hero.name.first} ${hero.name.last}`;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] flex flex-col pt-24 md:pt-28 pb-6 max-w-[1200px] mx-auto px-5 sm:px-8 overflow-hidden"
    >
      <motion.div
        initial={reduce ? "show" : "hidden"}
        animate="show"
        className="flex-1 flex flex-col items-center justify-center text-center"
      >
        {/* Arch portrait */}
        <motion.figure
          style={{ y: portraitY, scale: portraitScale }}
          className="relative w-[clamp(210px,24vw,330px)] aspect-[570/740] z-0"
        >
          <motion.div
            variants={{
              hidden: { clipPath: "inset(100% 0% 0% 0% round 999px 999px 0 0)" },
              show: {
                clipPath: "inset(0% 0% 0% 0% round 999px 999px 0 0)",
                transition: { duration: 1.2, ease: EASE },
              },
            }}
            className="hero-arch group relative h-full w-full overflow-hidden rounded-t-full"
          >
            <motion.img
              src={assetPath("/images/raj-portrait.webp")}
              alt="Raj Magdum at a beach at sunset"
              width={570}
              height={740}
              fetchPriority="high"
              variants={{
                hidden: { scale: 1.18 },
                show: { scale: 1, transition: { duration: 1.6, ease: EASE } },
              }}
              className="hero-arch-img h-full w-full object-cover object-[50%_25%]"
            />
            {/* Duotone wash; lifts on hover to show the real sunset */}
            <span className="hero-arch-tint" aria-hidden="true" />
          </motion.div>
        </motion.figure>

        {/* Name, overlapping the base of the arch */}
        <motion.h1
          style={{ y: nameY }}
          aria-label={fullName}
          className="relative z-10 -mt-[clamp(5rem,9vw,8.5rem)] font-display font-normal text-[var(--color-ink)] text-[clamp(4.25rem,11.5vw,10rem)] leading-[0.84] tracking-[-0.03em]"
        >
          <SplitWord word={hero.name.first} offset={0} />
          <SplitWord word={hero.name.last} offset={hero.name.first.length} className="italic" />
        </motion.h1>

        <motion.div
          style={{ opacity: fade }}
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.15, ease: EASE } },
          }}
          className="relative z-10 mt-6 flex flex-col items-center"
        >
          <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed max-w-md">
            {hero.tagline} {hero.taglineEmphasis}
          </p>
          <p className="mt-1 text-[var(--color-muted)] text-sm sm:text-base leading-relaxed max-w-md">
            {hero.subline}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
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
                <span>{hero.cta.secondary}</span>
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
          </div>
        </motion.div>
      </motion.div>

      {/* Corner meta row, as in the reference: place + status left, scroll right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 1.4 }}
        className="mt-10 flex flex-wrap items-end justify-between gap-4 text-xs font-mono text-[var(--color-muted)]"
      >
        <div className="flex flex-col gap-1.5 text-left">
          <span className="inline-flex items-center gap-2 text-[#4ADE80]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            {hero.status}
          </span>
          <span>{hero.metaItems.join("  /  ")}</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors group"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};
