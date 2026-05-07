# jsohn.app — Personal Portfolio

my personal portfolio containing updated information to May 2026, built with Next.js 14 and TailwindCSS.

## Tech Stack

- **Framework** — Next.js 14 (App Router, static export)
- **Styling** — TailwindCSS 3
- **Animations** — Framer Motion 11
- **Fonts** — Syne (headings), DM Sans (body), JetBrains Mono (labels) via `next/font/google`
- **Contact form** — EmailJS
- **Language** — TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start local dev server at localhost:3000 |
| `npm run build` | Build for production                     |
| `npm run start` | Serve the production build locally       |
| `npm run lint`  | Run ESLint                               |

## Project Structure

```
src/
└── app/
    ├── layout.tsx   # Root layout, font config, metadata
    ├── page.tsx     # All sections (Hero, About, Skills, Experience, Projects, Contact)
    └── globals.css  # Tailwind directives, dot-grid background, blink keyframe
public/
└── Resume.pdf       # Downloadable CV
```

## Sections

- **Hero** — Name, typewriter role, CV download, social links
- **About** — Bio, stats grid with resume metrics
- **Skills** — Languages, Frameworks, Tools, Databases
- **Experience** — Work history and education
- **Projects** — Project cards with tech stack and GitHub links
- **Contact** — EmailJS contact form

## Changes from v1 (Create React App)

### Framework migration
- Replaced Create React App with **Next.js 14** (App Router)
- Removed `react-scripts` and all CRA-specific config (`public/index.html`, `manifest.json`, `react-app-env.d.ts`)
- Added `next.config.js`, `postcss.config.js`, and migrated to `tailwind.config.ts`
- Switched from `tsconfig.json` targeting CRA to Next.js bundler module resolution

### Styling
- Removed Material UI (`@mui/*`, `@emotion/*`) entirely
- Replaced with **TailwindCSS 3** utility classes throughout
- Pure black (`#000`) background with dot-grid radial-gradient pattern
- Cyan-400 accent rule under every section header

### Dependencies removed
- `@mui/material`, `@emotion/react`, `@emotion/styled`
- `react-scroll`, `react-simple-typewriter`, `web-vitals`

### Dependencies added
- `next`, `framer-motion`, `@emailjs/browser`
- `tailwindcss`, `postcss`, `autoprefixer`

### Content
- Resume synced to May 2026 version — updated work experience, projects, skills, and stats
- Added TruAbutment (QA Engineer) as first work experience entry
- Projects updated: MP4 Transcription Automator, VCT Discord Bot, AI StoryTeller Generator, Swipe&Dine, Mumble
- Old CRA source files (`src/pageLayout/`, `src/components/`, `src/utils/`, `src/assets/`) removed
