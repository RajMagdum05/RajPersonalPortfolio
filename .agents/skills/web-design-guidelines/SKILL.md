---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review code and pages for compliance with Web Interface Guidelines, UX quality, and accessibility standards.

## Audit Checklist & Core Rules

### 1. Typography & Readability
- **Hierarchy:** Distinct visual differentiation between Display, H1, H2, H3, and Body copy.
- **Line Length:** Body text lines should be constrained between 45 and 75 characters (max ~65ch) for comfortable reading.
- **Line Height:** Minimum 1.5 for body text; tight (1.1 - 1.25) for large display headings.
- **Contrast:** Meet WCAG AA minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.

### 2. Layout, Spacing & Alignment
- **Consistent Spacing Scale:** Use 4px / 8px grid tokens (e.g. 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px).
- **Edge Alignment:** Align child elements to clear vertical baselines and container boundaries.
- **No Horizontal Scroll:** Elements must never cause unexpected overflow on any viewport width (from 320px up to 1920px+).

### 3. Touch Targets & Interactivity
- **Minimum Target Size:** All buttons, interactive icons, and links must have a touch target of at least 44x44px on mobile devices.
- **Target Spacing:** Ensure at least 8px separation between adjacent interactive targets.
- **Clear Focus Rings:** Always provide visible `:focus-visible` outlines for keyboard navigability; never remove outlines with `outline: none` without providing a high-contrast replacement.
- **Feedback on Interaction:** Hover, active, focus, and disabled states must be clearly differentiated.

### 4. Accessibility & Semantics
- **Semantic HTML:** Use proper tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>`).
- **Heading Order:** Never skip heading levels (e.g., jumping from `<h1>` directly to `<h3>`).
- **Images & Media:** All informative images must have descriptive `alt` text; decorative images must have `alt=""` or `aria-hidden="true"`.
- **Labels:** Form controls must have associated `<label>` elements or valid `aria-label` attributes.
- **Motion:** Honor `@media (prefers-reduced-motion: reduce)` by disabling or minimizing non-essential animations.

### 5. Performance & Asset Delivery
- **Optimized Images:** Modern web formats (WebP, AVIF, SVG for vectors), explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- **Fast Fonts:** Preload critical font subsets or use system font stacks (`system-ui`, `-apple-system`, `Inter`, `Geist`).
