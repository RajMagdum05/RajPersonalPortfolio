---
name: design-taste-frontend
description: >-
  tasteskill 2.5.1, the anti-slop frontend skill. Builds professional websites at the level of figma.com and x.ai: plain copy in a voice of its own, one system, one section per screen, equal edges, real photographs and real product UI, a hero entrance and dealt moments on every page, quiet micro-interactions, and rigorous review in a real browser. Use whenever you build, design, redesign, restyle, polish or review a portfolio, landing page, company, product, or SaaS site, or when a page looks generic, templated or "AI-made".
---

# tasteskill 2.5: Anti-Slop Frontend Skill

Build the website a world-class studio would ship: it says plainly what you do, shows the real work on every screen, and looks made specifically for you—never from a generic template, never with AI clichés. Figma and x.ai are the bar.

## The Core House Rules

1. **No caption or description under any image, render, or visual.** Credits go in a single footer line.
2. **Every visual renders, never an empty ground,** across 1440, 1024, 768, and 390 viewports.
3. **One section per screen:** The hero fills the first screen cleanly; each major section feels intentional at 1440x900, with no awkward half-cut headings peeking in.
4. **Equal left and right content edges:** Strict container alignment, consistent margin gutters, zero off-grid spill or unwanted horizontal scroll.
5. **Hover micro-animations:**
   - Linked cards lift subtly (2px).
   - Images zoom slightly (1.02-1.03) inside overflow-hidden frames.
   - Buttons step on hover and press on click (`:active`).
   - Underlines draw or indicators smoothly transition.
   - Micro-interactions feel snappy and quiet, never slow or distracting.
6. **Real photographs and authentic project artifacts:** Use actual project screens, realistic code snippets, and high-fidelity project artifacts rather than generic stock icons or abstract illustrations.
7. **Real full-colour brand & tool icons:** Use official SVGs for tools (React, TypeScript, Next.js, Node, Figma, etc.), not hand-drawn or generic knock-offs.
8. **Restraint with effects:** Modern subtle glows or canvas effects only on technical / developer portfolios; never slap heavy 3D or noisy shaders on clean editorial pages.
9. **Real contact and links:** Realistic, working links, clean social handles, and professional copy.

## Copy & Voice Discipline

- **No AI slop words:** Avoid "unleash", "elevate", "revolutionize", "seamless", "next-gen", "transformative platform", "cutting-edge".
- **Plain, confident tone:** Say clearly who you are, what you build, and what technologies you use.
- **Noun in every heading:** Headings should name real things (e.g., "Selected Work", "Production Systems", "Technical Writing", "About", "Contact").
- **Verb + Object on buttons:** (e.g., "View Case Study", "Explore Live Demo", "Read Documentation", "Copy Email").
- **One hard fact on first screen:** Include tangible evidence (years of experience, notable products shipped, open-source metrics, or core specialty) above the fold.

## Layout & Structure

- **Section cadence:** Vary the visual density across sections (e.g., Hero -> Selected Projects Grid -> Technical Architecture / Deep Dive -> Experience Timeline -> Writing / Talks -> Footer).
- **Max nesting of two boxes deep:** Avoid "container inside container inside card inside card". Keep the DOM and CSS hierarchy flat and clean.
- **Generous spacing:** Let typography and whitespace do the visual work. Avoid packing cards together without breathing room.
- **Responsive discipline:**
  - 1440px: Clean multi-column grids (2-column or 3-column), generous padding.
  - 1024px: Balanced intermediate layout.
  - 768px: Graceful 2-column to 1-column shift.
  - 390px: Full-width touch targets (minimum 44px height), single column, clear typography.
