---
name: awesome-design-md
description: Curated collection and methodology of DESIGN.md analysis from developer-focused websites (Vercel, Linear, Stripe, Supabase, Claude, etc.). Use when creating, extracting, or applying a plain-text design system document (DESIGN.md) for web projects, portfolios, and landing pages to ensure visual consistency and high-quality UI generation.
---

# Awesome DESIGN.md

A design system document that AI agents read to generate consistent, high-quality UI.

Drop a `DESIGN.md` into your project root, and the AI agent understands how your UI should look and feel without complex Figma exports or heavy setup.

| File | Who reads it | What it defines |
|------|-------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

## What's Inside Each DESIGN.md

Every `DESIGN.md` follows the Google Stitch specification with extended sections:

1. **Visual Theme & Atmosphere**: Mood, density, design philosophy, light/dark behavior.
2. **Color Palette & Roles**: Semantic names, exact hex values, and functional roles (background, surface, borders, text, accents).
3. **Typography Rules**: Font families, weights, full hierarchy table (Display, H1-H4, Body, Mono/Code, Small/Caption).
4. **Component Stylings**: Buttons (primary, secondary, ghost), cards, inputs, navigation, badges, pills with interaction states.
5. **Layout Principles**: Spacing scale, container max-widths, grid columns, whitespace philosophy.
6. **Depth & Elevation**: Shadow system, border radiuses, surface hierarchy, backdrop blur.
7. **Do's and Don'ts**: Design guardrails, forbidden patterns, and anti-patterns.
8. **Responsive Behavior**: Breakpoints (mobile, tablet, desktop, wide), touch targets (>= 44px), collapsing strategy.
9. **Agent Prompt Guide**: Quick color reference and ready-to-use prompts.

## Design archetypes for Portfolios & Dev Tools

- **Linear / Raycast**: Ultra-minimal dark chrome, crisp purple/indigo accents, keyboard-first, subtle borders (`rgba(255,255,255,0.08)`), monospace metadata.
- **Vercel**: Monochrome precision, Geist font, extreme contrast, stark black and white, zero visual clutter.
- **Stripe**: Elegance, refined typography (300/400 weight balance), smooth gradients, spacious padding.
- **Supabase**: Dark emerald theme, terminal-native aesthetic, clean cards with green accents.
- **Claude**: Warm terracotta accent, clean editorial layout, humanized yet technical feel.

## How to Apply

1. Place or generate `DESIGN.md` in the project root.
2. Direct all styling and component implementations to strictly abide by the tokens and guidelines defined in `DESIGN.md`.
