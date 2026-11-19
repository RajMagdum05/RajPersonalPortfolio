import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "status";
}

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantStyles = {
    default:
      "bg-[var(--color-surface-2)] text-[var(--color-muted)] border border-[var(--color-border)]",
    accent:
      "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/20",
    muted:
      "bg-transparent text-[var(--color-faint)] border border-[var(--color-border)]",
    status:
      "bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full leading-none transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
