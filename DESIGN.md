# Solvix DESIGN.md

The single source of truth for the rebuild. Tokens, type scale, motion vocabulary, and affordance strategy live here. Every component reads from this. Nothing ad-hoc.

Status: ACTIVE. Approved via /office-hours → /plan-eng-review → /autoplan. Last touched 2026-05-25.

## Voice and tone

Editorial. Restrained. Dark. Statement headlines followed by one explanatory line. No marketing fluff, no shouting, no exclamation. The site whispers. Affordance comes from typography and motion, not from chromatic accents. Reference register: madeinevolve.com (deliberately inverted to dark).

## Fonts

Two faces. Loaded once via `next/font/google` in `app/layout.tsx`, surfaced as CSS variables:

| Token | Family | Where it renders | Weight |
| --- | --- | --- | --- |
| `--font-inter` | Inter (variable) | Body, eyebrow, card titles, services, nav | 400, 500 |
| `--font-display` | Instrument Serif | Hero h1, About h2 (only `Heading variant="display"`) | 400 |

Body never uses the display serif. Display never uses the body sans. The contrast between the two carries 80% of the editorial register that Inter alone misses.

## Type scale

Fluid via `clamp()`. Mobile-first inputs in the leftmost column, desktop on the right.

| Token | Use | Size (min → max) | Weight | Tracking | Line-height |
| --- | --- | --- | --- | --- | --- |
| `--type-display` | Hero h1, About h2 (serif) | `clamp(48px, 7vw, 96px)` | 400 | -0.02em | 1.05 |
| `--type-h2` | Section labels (where serif isn't used) | `clamp(28px, 3.2vw, 40px)` | 500 | -0.01em | 1.15 |
| `--type-h3` | Card titles | `clamp(20px, 1.8vw, 24px)` | 500 | -0.005em | 1.25 |
| `--type-body-large` | Hero tagline, About paragraph | `clamp(18px, 1.4vw, 22px)` | 400 | 0 | 1.5 |
| `--type-body` | Standard prose | `17px` | 400 | 0 | 1.6 |
| `--type-metric` | Case study metric value | `clamp(32px, 3vw, 40px)` | 500 | 0 | 1 |
| `--type-eyebrow` | Section eyebrow label | `12px` | 500 | 0.12em | 1.4 |
| `--type-micro` | Footer legal, copyright | `13px` | 400 | 0 | 1.4 |

Body is **17px**, not 16px. Inter at 16px on `#0a0a0a` is a readability risk; 17px buys back the contrast hit.

## Color tokens

Fully neutral. No chromatic accent (this is the deliberate divergence from the previous dark+gold palette).

| Token | Hex | Use |
| --- | --- | --- |
| `--bg` | `#0a0a0a` | Section background |
| `--bg-card` | `#101010` | `<CaseStudyCard>` fill (1-step elevation) |
| `--text-primary` | `#f0f0f0` | Body text, headlines |
| `--text-secondary` | `#a8a8a8` | Eyebrows, captions, footer legal. **Hard floor — 4.6:1 on `--bg`. Anything dimmer fails WCAG AA.** |
| `--border` | `#1f1f1f` | Hairline borders, default card edge |
| `--border-hover` | `#3a3a3a` | Card hover, link underline accent |
| `--ring-color` | `#ffffff` | Focus ring |

Affordance after dropping the chromatic accent:
- Hover on a link: 1px underline offset shift (`text-underline-offset: 2px → 4px` over `--motion-micro`)
- Hover on a card: border shifts `--border` → `--border-hover`, plus the kinetic motions in the Motion section
- Disabled: opacity 0.4

## Spacing

4px base. Use tokens for vertical rhythm, not arbitrary px.

| Token | Value | Use |
| --- | --- | --- |
| `--space-1` | 4px | Atomic |
| `--space-2` | 8px | Stack gap within a metric, glyph spacing |
| `--space-3` | 12px | Eyebrow ↔ heading |
| `--space-4` | 16px | Default stack rhythm |
| `--space-6` | 24px | Heading ↔ paragraph, metric row gap |
| `--space-8` | 32px | Card internal padding |
| `--space-12` | 48px | Section title ↔ content |
| `--space-16` | 64px | Footer column gap |
| `--space-section-y` | `clamp(80px, 12vw, 160px)` | Vertical section padding |
| `--space-gutter` | `clamp(16px, 4vw, 48px)` | Container side gutter |
| `--max-content` | `1280px` | Container max-width |

## Motion

All transitions gated by `prefers-reduced-motion: reduce` — the reduced-motion block disables both keyframes and transitions.

### Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--motion-micro` | `180ms` | Link underline grow, focus ring fade |
| `--motion-base` | `320ms` | Card border lift, nav bg crossfade, card cursor-follow translate |
| `--motion-reveal` | `600ms` | Scroll-reveal fade-up (FadeIn) |
| `--easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default ease for every transition (ease-out-quart) |

### Vocabulary (DT3 — full kinetic per user choice)

- **Micro:** link underline shift (text-underline-offset 2px → 4px), focus-ring opacity fade in
- **Base:** card hover border lift (`--border` → `--border-hover`), nav bg crossfade on scroll, card cursor-follow translate (4px toward cursor on hover)
- **Reveal:** FadeIn IntersectionObserver scroll-reveal (existing `fade-up` keyframe stays)
- **Kinetic add-on:** `<TypographicCover>` ken-burns scale on hover (`transform: scale(1) → scale(1.04)` over `--motion-base`)

This is consciously more motion than madeinevolve.com uses. Locked by the user at the /autoplan final gate.

## Breakpoints

```css
--bp-sm: 640px;   /* mobile → small tablet */
--bp-md: 1024px;  /* small tablet → desktop */
--bp-lg: 1280px;  /* desktop → wide */
```

CSS uses min-width media queries (mobile-first).

## States & Tokens addendum

Every interactive element specifies all five states. No assumed defaults.

| Element | Default | Hover | Focus-visible | Active | Disabled |
| --- | --- | --- | --- | --- | --- |
| Text link (nav, footer, mailto) | underline 1px, offset 2px | offset 4px over `--motion-micro` | + 2px white outline, 2px offset | underline thicker | opacity 0.4 |
| `<CaseStudyCard>` | border `--border`, fill `--bg-card` | border `--border-hover` + 4px cursor-follow translate + cover ken-burns scale | + 2px white outline, 2px offset (replaces transform) | scale(0.99) | n/a (no disabled state on cards) |
| Eyebrow label | static, secondary text color | n/a | n/a | n/a | n/a |
| Skip-to-content link | `position: absolute; top: -100px` (hidden) | n/a | translate into view at top-left, 2px white outline | n/a | n/a |
| Email mailto link | underline 1px, offset 2px, primary text | offset 4px | + 2px white outline | n/a | n/a |

`prefers-reduced-motion: reduce` overrides: card cursor-follow translate, cover ken-burns scale, all transitions become instant.

### Focus ring

- `outline: var(--ring-width) solid var(--ring-color)` = `2px solid #ffffff`
- `outline-offset: var(--ring-offset)` = `2px`
- Applied to **every** interactive element. Browser default ring is invisible on `#0a0a0a` — non-negotiable.

### Heading order

- One `Heading variant="display"` rendered as `<h1>` per page (the Hero headline).
- About section statement is `<h2>`.
- All card titles are `<h3>`.
- Service block titles are `<h3>`.
- Eyebrows are NOT headings — they are `<p>` with `--type-eyebrow`.

### Touch targets

- Minimum 44×44 px for every clickable element: nav links, mailto link, case study card affordance, footer links.

### No-JS / SSR baseline

The rebuild drops scroll-reveal entirely — there is no `FadeIn` wrapper. Content renders visible from first paint, server-side. No `.no-js` class, no inline removal script, no hydration mismatch surface. Editorial sites earn restraint by NOT animating on entry; hover motion (link underline grow, card border lift + translate, cover ken-burns) carries the kinetic vocabulary instead. Crawlers, no-JS users, and CLS budgets all benefit.

## Affordance without color (delta valence)

`<MetricRow>` shows positive/negative deltas with prefix glyphs and tabular-nums:

- Positive: `▲ 28%`
- Negative: `▼ 14%`
- Neutral: no glyph

`font-variant-numeric: tabular-nums` keeps the numbers aligned. Geometry carries valence — no green/red needed.

## Responsive layout — case study card

Three layouts, switched by min-width queries:

```
≤640px  (mobile)            641-1024px  (tablet)              ≥1025px  (desktop)
┌──────────────┐            ┌────────┬─────────────────┐      ┌────┬────┬────┐
│   COVER      │            │ COVER  │ HEADER          │      │ A  │ B  │ C  │ (3 cards grid)
├──────────────┤            │        │ METRICS         │      │    │    │    │
│ HEADER       │            │        │ SERVICES        │      │    │    │    │
│ METRICS      │            │        │ CTA             │      │    │    │    │
│ SERVICES     │            └────────┴─────────────────┘      └────┴────┴────┘
│ CTA          │
└──────────────┘
```

Metric row at ≤640px becomes a 2-col grid (never horizontal scroll).

## What we deliberately did NOT do

- No chromatic accent. Affordance lives in border shifts, underline offsets, and motion.
- No Tailwind. CSS Modules continue.
- No design tokens generator (Style Dictionary etc.). One CSS file, one source of truth.
- No icon library. Glyph valence and `▲ ▼` are inline UTF-8.
- No EN/IT toggle (out of scope per plan).
- No light-mode (the rebuild is dark per user direction; reference site is light — divergence is intentional).
