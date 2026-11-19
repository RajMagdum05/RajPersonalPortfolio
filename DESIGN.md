# DESIGN.md — Raj Magdum Portfolio

> Design system specification for Raj Magdum's personal portfolio.
> Aesthetic: "Vibe little dark not too much" — warm charcoal stone, editorial typography, jade emerald accents, high-craft studio feel.

---

## 1. Visual Theme & Atmosphere
- **Mood**: Calm, editorial, product-studio feel. Think Linear, Vercel, Rauno Freiberg.
- **Tone**: Sophisticated, understated, confident. "People → Problems → Products".
- **Density**: Airy and breathable. Single section per screen view on desktop, generous spacing, clear hierarchy.
- **Grain**: Subtle 3-4% SVG film-grain noise overlay on the fixed background for tangible texture.

---

## 2. Color Palette & Roles

### Dark Theme ("Vibe Little Dark Not Too Much" — Default)
| Token | Hex | Role |
| :--- | :--- | :--- |
| `--color-bg` | `#141514` | Primary page canvas, warm charcoal stone |
| `--color-surface` | `#1C1E1C` | Cards, panels, modal surfaces |
| `--color-surface-2` | `#252724` | Pills, chips, diagram nodes, inputs |
| `--color-border` | `#2D302C` | Subtle hairlines, dividers, container strokes |
| `--color-border-hover`| `#3F433E` | Hover state for interactive cards |
| `--color-ink` | `#F4F3EE` | Display headings, titles, high-contrast text |
| `--color-text` | `#D8D7D2` | Body copy, descriptions |
| `--color-muted` | `#9E9D96` | Subtitles, metadata, secondary captions |
| `--color-faint` | `#706F69` | Eyebrows, mono markers, disabled states |
| `--color-accent` | `#3E866F` | Signature jade green for primary actions & indicators |
| `--color-accent-hover`| `#4EA88C` | Hover state for accent buttons & links |
| `--color-accent-soft` | `rgba(62, 134, 111, 0.15)` | Soft tinted badge backgrounds, glow rings |
| `--color-success` | `#34D399` | Online status indicator, verified states |
| `--color-danger` | `#E05D52` | Root-cause alerts, failure states in diagrams |
| `--color-warning` | `#F59E0B` | Quality gates, caution tags |

### Light Theme (Mockup Stone Companion)
| Token | Hex | Role |
| :--- | :--- | :--- |
| `--color-bg` | `#F6F5F2` | Soft stone background |
| `--color-surface` | `#FFFFFF` | Card surfaces |
| `--color-surface-2` | `#EFEEEA` | Chips, inputs, neutral fills |
| `--color-border` | `#E4E2DD` | 1px card borders |
| `--color-ink` | `#161615` | Headings |
| `--color-text` | `#2C2C2A` | Body copy |
| `--color-muted` | `#6E6D68` | Secondary text |
| `--color-accent` | `#2F5D50` | Deep jade accent |

---

## 3. Typography Rules

| Role | Font Family | Weights | Application |
| :--- | :--- | :--- | :--- |
| **Display / Headings** | `Instrument Serif`, `Georgia`, serif | 400, Italic | Hero name, section titles, pull-quotes |
| **Body / UI** | `Geist Sans`, `Inter`, sans-serif | 400, 500, 600 | Navigation, paragraphs, button labels |
| **Monospace / Eyebrows**| `Geist Mono`, `JetBrains Mono`, monospace | 400, 500 | Eyebrows (`01 — ABOUT`), metrics, tags |

### Typographic Hierarchy
- **Hero Name**: `clamp(3.5rem, 8vw, 7.5rem)`, line-height 0.95, italic on last name ("*Magdum*").
- **Section Titles**: `clamp(2.25rem, 5vw, 4rem)`, line-height 1.05, italic on key emphasis word.
- **Card Headings**: `1.75rem`, line-height 1.2.
- **Body Large**: `1.1875rem` (`19px`), line-height 1.65.
- **Body**: `1rem` (`16px`), line-height 1.7.
- **Small / Metadata**: `0.875rem` (`14px`), line-height 1.5.
- **Eyebrow**: `0.75rem` (`12px`), uppercase, tracking `0.14em`, monospace.

---

## 4. Component Stylings
- **Buttons**:
  - *Primary*: Pill-shaped (`rounded-full`), `bg-ink text-bg`, hover lifts 2px with subtle shadow.
  - *Secondary*: Pill-shaped, 1px border `--color-border`, transparent bg, hover `bg-surface-2`.
- **Chips & Tags**: `rounded-full`, mono 12px, padding `4px 12px`, border 1px `--color-border`.
- **Cards**: `rounded-2xl` (18-20px), 1px border `--color-border`, hover lift `y: -3px` with subtle border brightening.
- **Interactive Diagrams**: Custom SVG and Flexbox nodes representing pipeline stages, live animated data flows.

---

## 5. Motion Principles
- Motion explains, never performs.
- Transitions: snappy 250ms cubic-bezier for hovers, 600ms easeOut for scroll reveals.
- Respect `prefers-reduced-motion` at all times.
