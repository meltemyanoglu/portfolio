# Meltem Yanoglu — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Bold editorial design inspired by modern Awwwards/Pinterest aesthetics — playful brutalism with smooth animations.

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion 12 |
| Icons | lucide-react |
| Fonts | Syne + Space Grotesk (Google Fonts) |
| Deploy | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Base styles, scrollbar, selection color
│   │   ├── layout.tsx         # Root layout, font loading, metadata
│   │   └── page.tsx           # Page entry — assembles all sections
│   └── components/
│       ├── Navbar.tsx         # Fixed nav with blur-on-scroll, mobile menu
│       ├── Hero.tsx           # Full-screen hero, parallax, marquee strip
│       ├── Works.tsx          # Project cards grid (4 projects)
│       ├── About.tsx          # Bio section, fact grid, discipline ticker
│       ├── Skills.tsx         # Skill cards with progress bars + tag cloud
│       ├── Contact.tsx        # CTA section, email copy, social links
│       └── Footer.tsx         # Minimal footer with open-to-work indicator
├── .claude/
│   └── launch.json            # Claude Code dev server config
├── tailwind.config.ts         # Custom colors, shadows, animations
├── next.config.ts
└── package.json
```

---

## Sections

### Hero
Oversized editorial name treatment with Framer Motion entrance animations, floating colored shapes, skill sticker tags, and a scrolling marquee strip.

### Selected Works
2×2 grid of project cards, each with a unique color scheme and embedded visual:

| Project | Stack | Color |
|---|---|---|
| MoodFlow | Flutter · Firebase · Spotify API | Cobalt blue |
| Fridgenie | Flutter · Python · OpenAI API | Neon lime |
| Emotional Music Generation (Thesis) | PyTorch · VAE · EnCodec | Sunny yellow |
| UI/UX Experiments | Next.js · Figma · p5.js | Hot pink |

### About
Dark section with outlined giant "M" monogram, bio, fact grid (degree / focus / location / status), and a scrolling discipline ticker.

### Skills
Categorised skill cards (Mobile / Web / AI-ML / Design) with animated progress bars, plus a rotating tag cloud covering the full stack.

### Contact
Neon lime full-bleed section with oversized CTA heading, one-click email copy, GitHub / LinkedIn / email social buttons, and CV download.

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F2EDE4` | Page background |
| `ink` | `#0A0A0A` | Text, borders |
| `hot-pink` | `#FF3CAC` | Primary accent |
| `neon-lime` | `#B5FF39` | Secondary accent, Contact bg |
| `sunny` | `#FFE500` | Thesis card, highlights |
| `cobalt` | `#1D4ED8` | MoodFlow card, Mobile skill |
| `shadow-hard` | `4px 4px 0 #0A0A0A` | Brutalist card shadow |

---

## Customisation

**Update projects** — edit the `projects` array in [`src/components/Works.tsx`](src/components/Works.tsx).

**Update links** — replace GitHub / LinkedIn URLs in [`src/components/Contact.tsx`](src/components/Contact.tsx) and [`src/components/Works.tsx`](src/components/Works.tsx).

**Add CV** — drop `cv.pdf` into the `/public` folder. The download button links to `/cv.pdf`.

**Update metadata** — edit `title`, `description`, and `openGraph` in [`src/app/layout.tsx`](src/app/layout.tsx).

---

## Deployment

```bash
# Deploy to Vercel (zero config)
npx vercel --prod
```

Or connect the GitHub repo in the [Vercel dashboard](https://vercel.com) — it auto-detects Next.js.

---

## License

Personal portfolio — all rights reserved. Code structure is available for reference and inspiration.
