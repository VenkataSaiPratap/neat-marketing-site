# Neat Marketing Website

Premium marketing website for **Neat** — a Global Capability Center (GCC) & Fractional Leadership company.

Built with Next.js 16, TypeScript, TailwindCSS v4, and Framer Motion.

## Getting Started

Run the development server on port 3333:

```bash
npm run dev -- --port 3333
```

Open [http://localhost:3333](http://localhost:3333) in your browser.

> The project uses port **3333** (not the default 3000) to avoid conflicts.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **TailwindCSS v4** (`@import "tailwindcss"` syntax — no `tailwind.config.ts`)
- **Framer Motion** (animations, scroll effects)
- **Lucide React** (icons)

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, custom CSS utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustedBy.tsx
│       ├── GCCExplained.tsx
│       ├── FractionalLeadership.tsx
│       ├── Services.tsx
│       ├── Industries.tsx
│       ├── Process.tsx
│       ├── WhyChooseUs.tsx
│       ├── CaseStudies.tsx
│       ├── CostCalculator.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
└── lib/
    └── utils.ts
```

## Build

```bash
npm run build
```

Produces a fully static export with zero TypeScript errors.

## Deploy

Deploy to [Vercel](https://vercel.com) with a single push — no additional configuration needed.
