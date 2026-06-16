@AGENTS.md

# Neat Marketing — Project Context

## What this is
Marketing website for **Filostech** (brand name in code) — a GCC (Global Capability Center) and Fractional Leadership company. Single-page scroll with 13 content sections + Navbar + Footer.

## Stack
- **Next.js 16.2.9** — App Router, Turbopack, static export (`output: 'export'`)
- **TailwindCSS v4** — `@import "tailwindcss"` in globals.css; `@theme inline {}` for design tokens; **NO tailwind.config.ts**
- **Framer Motion** — all animations and scroll effects
- **Lucide React** — icons only (note: `Twitter`, `Linkedin`, `Github` icons do NOT exist in this version — use `Globe`, `Share2`, `ExternalLink` instead)
- **TypeScript** — strict mode

Dev server: `npm run dev -- --port 3333`
Build check: `npm run build`

## File structure

```
src/
  app/
    globals.css          ← Design tokens, utility classes, animations
    layout.tsx           ← Root layout (body bg-[#07111E] text-slate-200)
    page.tsx             ← Assembles all sections in order
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Hero.tsx
      TrustedBy.tsx
      GCCExplained.tsx
      FractionalLeadership.tsx
      Services.tsx
      Industries.tsx
      Process.tsx
      WhyChooseUs.tsx
      CaseStudies.tsx
      CostCalculator.tsx
      Testimonials.tsx
      FAQ.tsx
      FinalCTA.tsx
```

## Design system — Sophisticated Navy (dark mode)

### Backgrounds (alternating per section)
| Token | Hex | Usage |
|---|---|---|
| Primary bg | `#07111E` | Hero, GCCExplained, Services, Process, CaseStudies, Testimonials, FinalCTA |
| Secondary bg | `#0B1525` | TrustedBy, FractionalLeadership, Industries, WhyChooseUs, CostCalculator, FAQ |
| Footer bg | `#040C18` | Footer only |

### Glass cards
```css
.glass-card {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
}
.glass-card-hover:hover {
  background: rgba(26, 38, 66, 0.7);
  border-color: rgba(255, 255, 255, 0.13);
  transform: translateY(-2px);
}
```
Use `className="glass-card glass-card-hover rounded-2xl border border-white/[0.06]"` for interactive cards.

### Text hierarchy
| Role | Class | Usage |
|---|---|---|
| Heading | `text-slate-100` | Section titles, card titles |
| Sub-heading | `text-slate-300` | Section mini-headers (uppercase tracking), important labels |
| Body | `text-slate-400` | Descriptive body text, subtitles |
| Muted | `text-slate-500` | Footnotes, disclaimer text |
| Very muted | `text-slate-600` | Footer links, bottom bar copyright |

### Accent colors
- **Primary CTA**: `bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-600/25` — used for ALL primary buttons
- **Gradient text** (headlines): `.gradient-text` class — sky-to-cyan gradient
- **Gold gradient text**: `.gradient-text-gold` class — amber gradient
- **Metric numbers**: `text-amber-400` in Hero metrics bar

### Section badge pattern (pill above each section title)
```tsx
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 bg-sky-500/10 border border-sky-500/20">
  <Icon className="w-3.5 h-3.5 text-sky-400" />
  <span className="text-xs font-medium text-sky-400">Label</span>
</div>
```
Color varies per section: sky (Hero, TrustedBy, GCCExplained, Testimonials, FAQ), violet (FractionalLeadership, CaseStudies), amber (Process, WhyChooseUs, FinalCTA), emerald (Industries, CostCalculator).

### Tags / pills
```tsx
className="text-xs text-slate-500 bg-white/[0.04] rounded-full px-2.5 py-1 border border-white/[0.06]"
```

### Gradient orbs (background decoration)
Use inline `style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}` inside `absolute` positioned divs.

## Key component patterns

### AnimatedCounter (Hero)
Custom hook in Hero.tsx that animates numbers on scroll. Used for metrics bar (e.g. "150+ Engineers", "40% Cost Savings").

### Marquee (TrustedBy)
CSS `@keyframes marquee` in globals.css with `animation: marquee 30s linear infinite`. Fade edges use `from-[#0B1525]` to match section bg.

### Tab selector (FractionalLeadership, CaseStudies)
Active tab uses role/case-specific color border + bg. Pattern: `active === i ? "border-[color]/40 bg-[color]/10" : "border-white/[0.06] bg-white/[0.03]"`.

### Alternating timeline (Process)
Left/right alternating cards at `lg:` breakpoint. `isLeft = i % 2 === 1`. Center line uses `bg-gradient-to-b from-transparent via-white/[0.08] to-transparent`.

### Accordion (FAQ)
`AnimatePresence` with `height: 0 → auto` animation. Open item: `border-sky-500/25`. Toggle icon: sky background when open, `bg-white/[0.04]` when closed.

### Auto-advancing carousel (Testimonials)
`setInterval` 6000ms. Direction state for slide animation. Amber pill as active dot indicator.

### CostCalculator
Interactive — team role counters + fractional leadership checkboxes. Savings computed live and displayed as `text-emerald-400`. Bar chart shows local vs Filostech cost ratio.

## Globals.css — key custom classes
- `.section-padding` — `py-20 sm:py-28 lg:py-36`
- `.glass-card` / `.glass-card-hover` — dark glass morphism
- `.gradient-text` — sky-to-cyan headline gradient
- `.gradient-text-gold` — amber headline gradient
- `.animated-underline` — hover underline via `::after` pseudo-element
- `.grid-pattern` — subtle white grid lines on dark bg
- `.dot-pattern` — subtle white dot grid on dark bg
- `.gradient-orb-amber` — amber radial glow for decoration

## Lucide icon constraint
These icons do **not** exist in the installed version:
- `Twitter` → use `Share2`
- `Linkedin` → use `Share2` or `Globe`
- `Github` → use `ExternalLink`

## Contact info in code
- Email: `hello@filostech.io`
- Phone: `+1 (888) 123-4567`
- All CTAs link to `#contact` (FinalCTA section)
