"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { projects } from "@/content/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { assetPath } from "@/lib/utils";

export const Work: React.FC = () => {
  const { work } = siteContent;

  const pipelineAutopsy = projects.find((p) => p.slug === "pipeline-autopsy")!;
  const healthPipeline = projects.find((p) => p.slug === "health-insurance-ai-pipeline")!;
  const hearly = projects.find((p) => p.slug === "hearly")!;
  const vehicleClaim = projects.find((p) => p.slug === "vehicle-insurance-claim-prediction")!;

  return (
    <section
      id="work"
      className="py-24 sm:py-32 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      <Reveal>
        <SectionHeader
          eyebrow={work.eyebrow}
          title={work.title}
          titleEmphasis={work.titleEmphasis}
          subtitle={work.subtitle}
        />
      </Reveal>

      {/* Row 1: Health Insurance AI Pipeline (7 cols) + Pipeline Autopsy (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Health Insurance AI Pipeline */}
        <Reveal className="lg:col-span-7 flex flex-col h-full">
          <Link
            href={`/work/${healthPipeline.slug}`}
            className="group flex flex-col justify-between h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#14B8A6]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#14B8A6]/10 relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-faint)]">
                  {healthPipeline.category}
                </span>
                <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-ink)] group-hover:border-[var(--color-border-hover)] group-hover:bg-[var(--color-surface-2)] transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Mockup-Exact Quality Gate Preview */}
              <div className="bg-[var(--color-surface-2)]/60 border border-[var(--color-border)]/70 rounded-xl p-5 mb-8 space-y-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-[var(--color-success)]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Intake verified</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-success)]">
                  <Check className="w-3.5 h-3.5" />
                  <span>OCR text stream parsed</span>
                </div>
                <div className="p-2.5 rounded-lg border border-[var(--color-warning)]/30 bg-[var(--color-warning)]/10 text-[var(--color-text)] flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[var(--color-warning)] shrink-0 mt-0.5" />
                  <span>Quality gate: confidence 0.42 → manual review</span>
                </div>
                <div className="text-[var(--color-faint)] text-[11px] pl-5">
                  Classify → Extract halted to prevent hallucination
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {healthPipeline.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                {healthPipeline.oneLiner}
              </p>
            </div>

            {/* Metrics & Chips */}
            <div className="pt-6 border-t border-[var(--color-border)]/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-[var(--color-ink)] font-bold">
                  56 <span className="text-[var(--color-muted)] font-normal">tests</span>
                </span>
                <span className="text-[var(--color-border)]">•</span>
                <span className="text-[var(--color-ink)] font-bold">
                  1 <span className="text-[var(--color-muted)] font-normal">trace lookup</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {healthPipeline.stack.slice(0, 3).map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
                <Chip variant="muted">+3</Chip>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Pipeline Autopsy */}
        <Reveal className="lg:col-span-5 flex flex-col h-full" delay={0.15}>
          <Link
            href={`/work/${pipelineAutopsy.slug}`}
            className="group flex flex-col justify-between h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#10B981]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#10B981]/10 relative overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-faint)]">
                  {pipelineAutopsy.category}
                </span>
                <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-ink)] group-hover:border-[var(--color-border-hover)] group-hover:bg-[var(--color-surface-2)] transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Mockup-Exact Interactive Diagram Preview */}
              <div className="bg-[var(--color-surface-2)]/60 border border-[var(--color-border)]/70 rounded-xl p-5 mb-8 relative">
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 sm:pb-0">
                  <div className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-text)]">
                    Intake
                  </div>
                  <span className="text-[var(--color-border)] font-mono text-xs">→</span>
                  <div className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-text)]">
                    OCR
                  </div>
                  <span className="text-[var(--color-border)] font-mono text-xs">→</span>
                  <div className="relative">
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-[9px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs">
                      root cause
                    </span>
                    <div className="px-3 py-1.5 rounded-lg border-2 border-[var(--color-accent)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-ink)] font-semibold shadow-xs">
                      Classify
                    </div>
                  </div>
                  <span className="text-[var(--color-border)] font-mono text-xs">→</span>
                  <div className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-text)]">
                    Extract
                  </div>
                  <span className="text-[var(--color-border)] font-mono text-xs">→</span>
                  <div className="px-2.5 py-1.5 rounded-lg border border-[var(--color-danger)]/40 bg-[var(--color-danger)]/10 text-xs font-mono text-[var(--color-danger)] font-bold">
                    !
                  </div>
                </div>

                {/* Reverse trace line indicator */}
                <div className="mt-3 pt-2.5 border-t border-[var(--color-border)]/40 flex items-center justify-between text-[11px] font-mono text-[var(--color-faint)]">
                  <span>Traced upstream via artifact lineage</span>
                  <span className="text-[var(--color-accent)]">✓ Identified in &lt;10ms</span>
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {pipelineAutopsy.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                {pipelineAutopsy.oneLiner}
              </p>
            </div>

            {/* Metrics & Chips */}
            <div className="pt-6 border-t border-[var(--color-border)]/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-[var(--color-ink)] font-bold">
                  86 <span className="text-[var(--color-muted)] font-normal">tests passing</span>
                </span>
                <span className="text-[var(--color-border)]">•</span>
                <span className="text-[var(--color-ink)] font-bold">
                  37 <span className="text-[var(--color-muted)] font-normal">failure cases</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pipelineAutopsy.stack.slice(0, 3).map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
                <Chip variant="muted">+2</Chip>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>

      {/* Row 2: Hearly (6 cols) + Vehicle Claim Prediction (6 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hearly */}
        <Reveal className="flex flex-col h-full" delay={0.2}>
          <Link
            href={`/work/${hearly.slug}`}
            className="group flex flex-col justify-between h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-[#B8F426]/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#B8F426]/8 relative overflow-hidden"
          >
            {/* Very subtle lime glow top-right on hover */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: 'radial-gradient(circle, rgba(184,244,38,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-faint)]">
                  {hearly.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-[#B8F426]/20 bg-[#B8F426]/6 text-[#9BC820] leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8F426] animate-pulse" />
                  In development
                </span>
              </div>

              {/* Hearly Brand Emblem Visual matching user's exact uploaded image */}
              <div className="bg-[var(--color-surface-2)]/60 border border-[var(--color-border)]/70 rounded-xl p-6 mb-8 flex items-center justify-center group-hover:border-[#B8F426]/30 transition-colors duration-500">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden flex items-center justify-center bg-[#070808] border border-white/5 shadow-2xl shadow-black/80 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={assetPath("/images/hearly-logo-clean.png")}
                    alt="Hearly Brand Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {hearly.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                {hearly.oneLiner}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[var(--color-border)]/60 flex flex-wrap gap-1.5">
              {hearly.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </Link>
        </Reveal>

        {/* Vehicle Claim Prediction */}
        <Reveal className="flex flex-col h-full" delay={0.25}>
          <Link
            href={`/work/${vehicleClaim.slug}`}
            className="group flex flex-col justify-between h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#818CF8]/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#818CF8]/10 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-faint)]">
                  {vehicleClaim.category}
                </span>
                <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-ink)] group-hover:border-[var(--color-border-hover)] group-hover:bg-[var(--color-surface-2)] transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Risk Distribution Visual */}
              <div className="bg-[var(--color-surface-2)]/60 border border-[var(--color-border)]/70 rounded-xl p-8 mb-8 flex items-end justify-center gap-4 h-32">
                <div className="w-7 bg-[var(--color-border)] rounded-t-sm h-12" />
                <div className="w-7 bg-[var(--color-border-hover)] rounded-t-sm h-20" />
                <div className="w-7 bg-[var(--color-accent)] rounded-t-sm h-28" />
                <div className="w-7 bg-[var(--color-border-hover)] rounded-t-sm h-16" />
                <div className="w-7 bg-[var(--color-border)] rounded-t-sm h-8" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-ink)] mb-3">
                {vehicleClaim.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6">
                {vehicleClaim.oneLiner}
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--color-border)]/60 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[var(--color-muted)]">
                <strong className="text-[var(--color-ink)]">30,100</strong> records · 4 models
              </div>
              <div className="flex flex-wrap gap-1.5">
                {vehicleClaim.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
