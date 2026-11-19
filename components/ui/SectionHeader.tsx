import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  className,
  align = "left",
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
    >
      <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)] mb-3">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-ink)] font-normal tracking-tight leading-[1.05]">
        {title}{" "}
        {titleEmphasis && (
          <span className="italic font-normal text-[var(--color-ink)]">
            {titleEmphasis}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--color-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
