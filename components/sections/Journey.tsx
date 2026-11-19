"use client";

import React, { useRef } from "react";
import { siteContent } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { motion, useScroll, useSpring } from "framer-motion";

export const Journey: React.FC = () => {
  const { journey } = siteContent;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      <Reveal>
        <SectionHeader
          eyebrow={journey.eyebrow}
          title={journey.title}
          titleEmphasis={journey.titleEmphasis}
          subtitle={journey.subtitle}
        />
      </Reveal>

      {/* Featured Role Card matching Page 5 top */}
      <Reveal className="mb-20">
        <Card className="bg-[var(--color-surface)] border-[var(--color-border)] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono text-xs text-[var(--color-faint)] px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] inline-block">
                {journey.featuredRole.period}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight">
                {journey.featuredRole.org}
              </h3>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)] font-semibold">
                {journey.featuredRole.role}
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 space-y-4">
              <ul className="space-y-3 text-sm sm:text-base text-[var(--color-text)]">
                {journey.featuredRole.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Interactive Vertical Timeline */}
      <div ref={containerRef} className="relative py-12 mb-24 max-w-3xl mx-auto">
        {/* Static Background Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border)]/60 -translate-x-1/2" />

        {/* Animated Drawing Progress Line */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-accent)] -translate-x-1/2"
        />

        {/* Milestones */}
        <div className="space-y-16">
          {journey.milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={milestone.step}
                className="relative flex items-center md:justify-between"
              >
                {/* Center / Left Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>

                {/* Content Block */}
                <div
                  className={`w-full pl-16 md:pl-0 md:w-[44%] ${
                    isEven ? "md:text-right md:mr-auto" : "md:text-left md:ml-auto"
                  }`}
                >
                  <Reveal delay={0.1}>
                    <div className="font-mono text-xs text-[var(--color-accent)] mb-1 font-semibold">
                      {milestone.step}
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] mb-2">
                      {milestone.title}
                    </h4>
                    <div
                      className={`flex flex-wrap gap-2 text-xs font-mono text-[var(--color-muted)] ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-2)] text-[var(--color-muted)] border border-[var(--color-border)]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Beyond the Campus Section */}
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)] mb-6">
          BEYOND THE CAMPUS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journey.beyond.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <Card hoverable className="p-6">
                <h4 className="font-display text-2xl text-[var(--color-ink)] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--color-muted)] font-sans">
                  {item.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
