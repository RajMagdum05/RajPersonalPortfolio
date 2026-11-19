"use client";

import React from "react";
import { siteContent } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

// Each skill group gets its own accent colour — fresh, premium feel
const GROUP_COLORS = [
  { dot: "#22C55E", text: "text-[#86EFAC]", chip: "hover:border-[#22C55E]/50 hover:bg-[#052e16]/40 hover:text-[#86EFAC]" },
  { dot: "#06B6D4", text: "text-[#67E8F9]", chip: "hover:border-[#06B6D4]/50 hover:bg-[#0C4A6E]/30 hover:text-[#67E8F9]" },
  { dot: "#818CF8", text: "text-[#C7D2FE]", chip: "hover:border-[#818CF8]/50 hover:bg-[#1E1B4B]/40 hover:text-[#C7D2FE]" },
  { dot: "#FBBF24", text: "text-[#FDE68A]", chip: "hover:border-[#FBBF24]/45 hover:bg-[#1C1407]/40 hover:text-[#FDE68A]" },
  { dot: "#FB7185", text: "text-[#FDA4AF]", chip: "hover:border-[#FB7185]/45 hover:bg-[#1F0E10]/40 hover:text-[#FDA4AF]" },
];

export const Skills: React.FC = () => {
  const { skills } = siteContent;

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      <Reveal>
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          titleEmphasis={skills.titleEmphasis}
        />
      </Reveal>

      {/* Grouped Skills Rows */}
      <div className="divide-y divide-[var(--color-border)]/60 border-y border-[var(--color-border)]/60">
        {skills.groups.map((group, idx) => {
          const color = GROUP_COLORS[idx % GROUP_COLORS.length];
          return (
            <Reveal key={group.name} delay={idx * 0.08}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left: Group Label with coloured dot */}
                <div className="md:col-span-4 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: color.dot }}
                  />
                  <span className={`font-mono text-xs uppercase tracking-[0.14em] ${color.text}`}>
                    {group.name}
                  </span>
                </div>

                {/* Right: Chips with per-group hover colour */}
                <div className="md:col-span-8 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full leading-none border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-muted)] transition-all duration-200 cursor-default ${color.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
