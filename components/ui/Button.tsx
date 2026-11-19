"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-full focus-visible:outline-2 focus-visible:outline-offset-2";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 gap-2 h-10",
      lg: "text-base px-6 py-3 gap-2.5 h-12",
    };

    const variantStyles = {
      primary:
        "bg-[var(--color-ink)] text-[var(--color-bg)] hover:opacity-90 shadow-sm active:scale-[0.98]",
      secondary:
        "bg-gradient-to-r from-[#15803D] to-[#059669] text-white hover:from-[#166534] hover:to-[#047857] shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_28px_rgba(34,197,94,0.4)] active:scale-[0.98]",
      outline:
        "border border-[var(--color-border)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] hover:border-[var(--color-border-hover)] active:scale-[0.98]",
      ghost:
        "bg-transparent text-[var(--color-text)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.endsWith(".pdf");
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
            {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className={combinedClassName}
        >
          {children}
          {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
        {icon && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </button>
    );
  }
);

Button.displayName = "Button";
