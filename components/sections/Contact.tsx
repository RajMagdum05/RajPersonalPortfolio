"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Copy, Check, ArrowUpRight, ArrowDown } from "lucide-react";
import { assetPath } from "@/lib/utils";

export const Contact: React.FC = () => {
  const { contact } = siteContent;
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(contact.topics[0]);
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 max-w-[1200px] mx-auto px-5 sm:px-8 border-t border-[var(--color-border)]/40"
    >
      <Reveal>
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          titleEmphasis={contact.titleEmphasis}
          subtitle={contact.subtitle}
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact & Links */}
        <Reveal className="lg:col-span-5 space-y-10" delay={0.1}>
          {/* Email Row with Copy */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-faint)] mb-2">
              EMAIL
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <span className="font-mono text-sm sm:text-base text-[var(--color-ink)] select-all truncate pr-2">
                {contact.email}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-xs font-mono text-[var(--color-text)] hover:text-[var(--color-ink)] hover:border-[var(--color-border-hover)] transition-all cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--color-success)]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Links List */}
          <div className="space-y-4 pt-2">
            <a
              href="https://linkedin.com/in/rajmagdum05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-[var(--color-border)]/60 text-xl font-display text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://github.com/RajMagdum05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-[var(--color-border)]/60 text-xl font-display text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://x.com/RajMagdum5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-b border-[var(--color-border)]/60 text-xl font-display text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)]/60 text-xl font-display text-[var(--color-ink)] group">
              <span>Curriculum Vitae</span>
              <div className="flex items-center gap-4 text-sm font-sans">
                <a
                  href={assetPath("/Raj-Magdum-Resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[#4ADE80] transition-colors"
                >
                  <span>View PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[var(--color-border)]">/</span>
                <a
                  href={assetPath("/Raj-Magdum-Resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Raj-Magdum-Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
                >
                  <span>Download</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Response Time Meta */}
          <div className="text-xs font-mono text-[var(--color-faint)]">
            {contact.replyTime}
          </div>
        </Reveal>

        {/* Right Column: Interactive Form Card matching Page 7 */}
        <Reveal className="lg:col-span-7" delay={0.2}>
          <Card className="bg-[var(--color-surface)] border-[var(--color-border)] p-6 sm:p-10 shadow-lg shadow-black/15">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-3xl text-[var(--color-ink)]">
                  Message received.
                </h4>
                <p className="text-sm text-[var(--color-muted)] max-w-sm mx-auto">
                  Thanks for reaching out! I typically reply within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-[var(--color-accent)] underline hover:text-[var(--color-accent-hover)] cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[var(--color-muted)]">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 text-sm text-[var(--color-ink)] placeholder-[var(--color-faint)] focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)] transition-all outline-hidden"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[var(--color-muted)]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@startup.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 text-sm text-[var(--color-ink)] placeholder-[var(--color-faint)] focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)] transition-all outline-hidden"
                    />
                  </div>
                </div>

                {/* Segmented Pills: What's it about? */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-[var(--color-muted)]">
                    What&apos;s it about?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contact.topics.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[var(--color-ink)] text-[var(--color-bg)] font-semibold shadow-xs"
                              : "border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-ink)]"
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-[var(--color-muted)]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me what you're working on..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)]/60 text-sm text-[var(--color-ink)] placeholder-[var(--color-faint)] focus:border-[var(--color-accent)] focus:bg-[var(--color-surface)] transition-all outline-hidden resize-none"
                  />
                </div>

                {/* Form Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs font-mono text-[var(--color-faint)]">
                    Goes straight to my inbox.
                  </span>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
