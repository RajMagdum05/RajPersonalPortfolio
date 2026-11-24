"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work", id: "work" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Discipline", href: "#discipline", id: "discipline" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = ["work", "journey", "skills", "discipline", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)]/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: RM Monogram */}
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-[var(--color-ink)] transition-colors duration-200"
          aria-label="Raj Magdum Home"
        >
          <span className="font-[family-name:var(--font-script)] text-3xl leading-none -rotate-3 inline-block group-hover:text-[#86EFAC] transition-colors duration-200">
            Raj
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-transform duration-300 group-hover:scale-150"
            aria-hidden="true"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-ink)] font-medium"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & "Let's talk" CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            icon
            className="hidden sm:inline-flex"
          >
            Let&apos;s talk
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-border)] p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display text-[var(--color-ink)] py-2 border-b border-[var(--color-border)]/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              {activeSection === link.id && (
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              )}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon
            className="w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s talk
          </Button>
        </div>
      )}
    </header>
  );
};
