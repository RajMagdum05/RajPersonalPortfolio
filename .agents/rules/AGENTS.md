# Frontend & Portfolio Design Rules (Anti-Slop & Quality Standard)

When designing, building, or refining portfolios and web interfaces, strictly enforce the following rules:

## 1. Visual Standard & Taste
- **Figma & x.ai Quality Bar:** The output must feel art-directed, premium, and human-crafted—never templated or generic "AI slop".
- **Zero AI Cliché Copy:** Forbid buzzwords like "unleash", "elevate", "revolutionize", "seamless", "next-gen", "cutting-edge". Write clear, concrete, noun-first copy.
- **Hero Cleanliness:** Keep the hero airy, confident, and readable on all viewports (including small laptops). Short, impactful 1-3 line headlines.
- **Anti-Nested Containers:** Avoid boxes inside boxes inside boxes. Use open whitespace, strong typography, and flat DOM structures.

## 2. Design System & Tokens
- Use a coherent `DESIGN.md` token system for colors, typography scale, elevation, and component states.
- Support crisp dark/light aesthetics with accessible contrast ratios (WCAG AA >= 4.5:1).
- Use authentic brand and tech SVGs, not knock-offs.

## 3. Micro-Interactions & Motion
- Snappy hover states: Cards lift 2px, buttons step/depress smoothly, subtle border/glow transitions.
- Respect `prefers-reduced-motion`.

## 4. Verification & Testing
- Use `playwright-cli` to audit layout, verify responsiveness (1440px desktop, 768px tablet, 390px mobile), and test interactive elements.
- Ensure all interactive touch targets meet the >= 44px standard on mobile viewports.
