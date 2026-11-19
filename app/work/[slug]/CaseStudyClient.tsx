"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ArrowLeft, ArrowUpRight, Play, RefreshCw, Check, AlertTriangle, ShieldCheck } from "lucide-react";

export default function CaseStudyClient({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  // Next project cycler
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Pipeline Autopsy interactive state
  const [activePreset, setActivePreset] = useState<"fanout" | "business" | "starvation">("fanout");
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosisStep, setDiagnosisStep] = useState(3);

  // Health Insurance AI interactive state
  const [sampleScan, setSampleScan] = useState<"clean" | "blurry">("blurry");

  const runAutopsy = () => {
    setIsDiagnosing(true);
    setDiagnosisStep(0);
    setTimeout(() => setDiagnosisStep(1), 300);
    setTimeout(() => setDiagnosisStep(2), 600);
    setTimeout(() => {
      setDiagnosisStep(3);
      setIsDiagnosing(false);
    }, 900);
  };

  const presetDetails = {
    fanout: {
      culprit: "Classify",
      reason:
        "Classify labeled a discharge summary as an invoice. Extract used the wrong schema, so Answer was confidently wrong.",
    },
    business: {
      culprit: "OCR",
      reason:
        "OCR engine missed tabular column dividers on page 2. Lineage shows downstream schema mismatch originated at OCR tokenization.",
    },
    starvation: {
      culprit: "Intake",
      reason:
        "Intake stage dropped optional payload metadata due to timeout retry. Downstream nodes received null headers.",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pt-24 pb-20 selection:bg-[var(--color-accent)] selection:text-white">
      {/* Top Nav Back Link */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-12 flex items-center justify-between">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>All work</span>
        </Link>

        <Link
          href="/"
          className="font-display italic text-base text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
        >
          RM
        </Link>
      </div>

      {/* Case Hero */}
      <article className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)] mb-4">
            {project.category}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[var(--color-ink)] leading-tight tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-3xl leading-relaxed">
            {project.oneLiner}
          </p>
        </div>

        {/* 4-Column Meta Row matching mockup Page 8 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[var(--color-border)]/60 text-xs font-mono mb-16">
          <div>
            <div className="text-[var(--color-faint)] uppercase tracking-wider mb-1.5">
              ROLE
            </div>
            <div className="text-[var(--color-ink)] font-medium">
              {project.role}
            </div>
          </div>

          <div>
            <div className="text-[var(--color-faint)] uppercase tracking-wider mb-1.5">
              YEAR
            </div>
            <div className="text-[var(--color-ink)] font-medium">
              {project.year}
            </div>
          </div>

          <div>
            <div className="text-[var(--color-faint)] uppercase tracking-wider mb-1.5">
              STACK
            </div>
            <div className="text-[var(--color-ink)] font-medium truncate">
              {project.stack.slice(0, 3).join(" · ")}
            </div>
          </div>

          <div>
            <div className="text-[var(--color-faint)] uppercase tracking-wider mb-1.5">
              LINKS
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.instagram && (
                <a
                  href={project.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {!project.links.github && !project.links.instagram && (
                <span className="text-[var(--color-muted)]">Proprietary</span>
              )}
            </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 mb-20 bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl p-6 sm:p-10">
          {project.metrics.map((m) => (
            <div key={m.label} className="border-l-2 border-[var(--color-accent)] pl-5">
              <div className="font-display text-4xl sm:text-5xl text-[var(--color-ink)] mb-1">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--color-muted)]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Layout: Left Sticky Nav, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: On-page Navigator */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-3 font-mono text-xs">
              <div className="text-[var(--color-faint)] uppercase tracking-wider mb-2">
                ON THIS PAGE
              </div>
              <a
                href="#problem"
                className="block text-[var(--color-muted)] hover:text-[var(--color-ink)] py-1 transition-colors"
              >
                Problem
              </a>
              <a
                href="#approach"
                className="block text-[var(--color-muted)] hover:text-[var(--color-ink)] py-1 transition-colors"
              >
                Approach
              </a>
              {project.architecture && (
                <a
                  href="#architecture"
                  className="block text-[var(--color-muted)] hover:text-[var(--color-ink)] py-1 transition-colors"
                >
                  Architecture
                </a>
              )}
              {project.demo && (
                <a
                  href="#demo"
                  className="block text-[var(--color-accent)] font-semibold py-1 transition-colors"
                >
                  Try it
                </a>
              )}
              <a
                href="#results"
                className="block text-[var(--color-muted)] hover:text-[var(--color-ink)] py-1 transition-colors"
              >
                Results
              </a>
            </div>
          </div>

          {/* Right Column: Deep-Dive Content */}
          <div className="lg:col-span-9 space-y-16">
            {/* PROBLEM Section */}
            <section id="problem" className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)]">
                PROBLEM
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
                {project.slug === "pipeline-autopsy"
                  ? "The last stage is rarely the guilty one."
                  : "Silent errors compound across stages."}
              </h2>
              <div className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed space-y-4">
                {project.problem.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* APPROACH Section */}
            <section id="approach" className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)]">
                APPROACH
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--color-ink)]">
                {project.slug === "pipeline-autopsy" ? (
                  <>
                    Keep the LLM out of the <span className="italic">decision.</span>
                  </>
                ) : (
                  <>
                    Deterministic validation & <span className="italic">traceability.</span>
                  </>
                )}
              </h2>
              <ul className="space-y-4 text-base sm:text-lg text-[var(--color-text)]">
                {project.approach.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ARCHITECTURE Section */}
            {project.architecture && (
              <section id="architecture" className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)]">
                  ARCHITECTURE
                </div>
                <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-x-auto">
                  <div className="flex items-center gap-3 min-w-[650px] font-mono text-xs">
                    {project.architecture.map((node, i) => (
                      <React.Fragment key={node}>
                        <div className="px-3.5 py-2 rounded-xl bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-ink)] font-medium text-center shadow-xs">
                          {node}
                        </div>
                        {i < project.architecture!.length - 1 && (
                          <span className="text-[var(--color-faint)] font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* INTERACTIVE DEMO (TRY IT) */}
            {project.demo === "autopsy" && (
              <section id="demo" className="space-y-4 pt-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)] font-semibold">
                  TRY IT
                </div>
                <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden shadow-xl">
                  {/* Window Bar */}
                  <div className="px-5 py-3 border-b border-[var(--color-border)]/60 bg-[var(--color-surface-2)]/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                    </div>

                    {/* Presets */}
                    <div className="flex items-center gap-2">
                      {(["fanout", "business", "starvation"] as const).map((preset) => (
                        <button
                          key={preset}
                          onClick={() => {
                            setActivePreset(preset);
                            runAutopsy();
                          }}
                          className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            activePreset === preset
                              ? "bg-[var(--color-ink)] text-[var(--color-bg)] font-semibold"
                              : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                          }`}
                        >
                          {preset === "fanout"
                            ? "Fan-out"
                            : preset === "business"
                            ? "Business rule"
                            : "Starvation"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Demo Interactive Canvas */}
                  <div className="p-6 sm:p-8 space-y-8">
                    {/* Pipeline Stage Nodes */}
                    <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 pt-2">
                      {["Intake", "OCR", "Classify", "Extract", "Answer"].map((stage, idx) => {
                        const isCulprit =
                          stage === presetDetails[activePreset].culprit &&
                          diagnosisStep >= 2;
                        const isWrongOutput = stage === "Answer";

                        return (
                          <React.Fragment key={stage}>
                            <div className="relative flex flex-col items-center">
                              {isCulprit && (
                                <span className="absolute -top-6 bg-[var(--color-accent)] text-white text-[9px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs animate-bounce">
                                  root cause
                                </span>
                              )}
                              <div
                                className={`px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                                  isCulprit
                                    ? "border-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-ink)] font-bold shadow-md scale-105"
                                    : isWrongOutput
                                    ? "border-[var(--color-danger)]/50 bg-[var(--color-danger)]/10 text-[var(--color-danger)] font-medium"
                                    : "border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text)]"
                                }`}
                              >
                                {stage}
                                {isWrongOutput && " · wrong output"}
                              </div>
                            </div>
                            {idx < 4 && (
                              <span className="text-[var(--color-border)] font-mono text-xs">
                                →
                              </span>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>

                    {/* Diagnosis explanation box */}
                    <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 space-y-2">
                      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                        DIAGNOSIS
                      </div>
                      <p className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed">
                        {presetDetails[activePreset].reason}
                      </p>
                    </div>

                    {/* Run autopsy action */}
                    <div className="flex justify-end">
                      <button
                        onClick={runAutopsy}
                        disabled={isDiagnosing}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] hover:opacity-90 font-medium text-xs font-mono transition-all cursor-pointer"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isDiagnosing ? "animate-spin" : ""}`} />
                        <span>Run autopsy again</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* INTERACTIVE DEMO (CLAIMS PIPELINE) */}
            {project.demo === "claims" && (
              <section id="demo" className="space-y-4 pt-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)] font-semibold">
                  TRY IT
                </div>
                <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[var(--color-muted)]">
                      Select document sample:
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSampleScan("clean")}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          sampleScan === "clean"
                            ? "bg-[var(--color-ink)] text-[var(--color-bg)] font-semibold"
                            : "border border-[var(--color-border)] text-[var(--color-muted)]"
                        }`}
                      >
                        Clean Discharge Summary
                      </button>
                      <button
                        onClick={() => setSampleScan("blurry")}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          sampleScan === "blurry"
                            ? "bg-[var(--color-ink)] text-[var(--color-bg)] font-semibold"
                            : "border border-[var(--color-border)] text-[var(--color-muted)]"
                        }`}
                      >
                        Blurry Scan (Low Confidence)
                      </button>
                    </div>
                  </div>

                  {/* Stepper simulation */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[var(--color-success)]">
                        <Check className="w-4 h-4" />
                        <span>1. Intake: Valid PDF stream payload</span>
                      </div>
                      <span className="text-[var(--color-faint)]">14ms</span>
                    </div>

                    <div className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[var(--color-success)]">
                        <Check className="w-4 h-4" />
                        <span>2. OCR Processing: Text layer extracted</span>
                      </div>
                      <span className="text-[var(--color-faint)]">
                        {sampleScan === "clean" ? "Conf: 0.96" : "Conf: 0.42"}
                      </span>
                    </div>

                    {sampleScan === "blurry" ? (
                      <div className="p-4 rounded-xl border border-[var(--color-warning)]/40 bg-[var(--color-warning)]/10 text-[var(--color-ink)] space-y-1 animate-in fade-in">
                        <div className="flex items-center gap-2 text-[var(--color-warning)] font-semibold">
                          <AlertTriangle className="w-4 h-4" />
                          <span>3. Quality Gate Halted Execution (Fail-Loud)</span>
                        </div>
                        <p className="text-xs text-[var(--color-text)] pl-6">
                          OCR Confidence 0.42 is below the 0.85 threshold. Routed to human review queue rather than generating hallucinatory extraction.
                        </p>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl border border-[var(--color-success)]/40 bg-[var(--color-success)]/10 text-[var(--color-ink)] flex items-center justify-between animate-in fade-in">
                        <div className="flex items-center gap-2 text-[var(--color-success)] font-semibold">
                          <ShieldCheck className="w-4 h-4" />
                          <span>3. Quality Gate Passed → Structured Extraction Complete</span>
                        </div>
                        <span className="text-xs text-[var(--color-success)]">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* HEARLY BRAND & PROTOTYPE DEMO */}
            {project.slug === "hearly" && (
              <section id="demo" className="space-y-4 pt-4">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-accent)] font-semibold">
                  BRAND & PROTOTYPE
                </div>
                <div className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6">
                  {/* Exact Hearly Emblem matching user's image */}
                  <div className="w-36 h-36 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-black/80 flex items-center justify-center bg-[#0B0D0B]">
                    <img
                      src="/images/hearly-emblem.png"
                      alt="Hearly Brand Emblem"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="font-display text-2xl text-[var(--color-ink)]">
                      Hear Only You. 100% On-Device.
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      Signature acoustic isolation engine. Clean meeting audio without cloud data leakage.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-ink)] text-[var(--color-bg)] hover:opacity-90 text-xs font-mono transition-all"
                      >
                        <span>GitHub Repository</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.instagram && (
                      <a
                        href={project.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-hover)] text-xs font-mono transition-all"
                      >
                        <span>Follow @hearly.livee on Instagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* RESULTS Section */}
            <section id="results" className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)]">
                RESULTS
              </div>
              <ul className="space-y-3 text-base sm:text-lg text-[var(--color-text)]">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mt-2.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Next Project Cycling Card */}
        <div className="mt-28 pt-12 border-t border-[var(--color-border)]/60">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 sm:p-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-2)] transition-all"
          >
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)] mb-2">
              NEXT PROJECT →
            </div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-3xl sm:text-5xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                {nextProject.title}
              </h3>
              <div className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-ink)] group-hover:scale-110 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
}
