# Hee Won Jung Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the bilingual (KO/EN) minimal-editorial portfolio site for Hee Won Jung from the Notion content, per `docs/superpowers/specs/2026-07-09-portfolio-website-design.md`.

**Architecture:** Vite + React + TypeScript SPA. All copy lives in typed bilingual content modules (`src/content/`); a React context supplies the active language and a `t()` helper. React Router serves `/` (one-page scroll) and `/projects/:slug` (5 detail pages). Lenis provides smooth scrolling; Framer Motion provides scroll reveals and transitions.

**Tech Stack:** Vite 6, React 18, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), framer-motion, lenis, react-router-dom.

## Global Constraints

- Language default `ko`; toggle persisted to `localStorage` key `portfolio-lang`.
- Design: warm off-white paper `#faf7f2`, ink `#1c1a17`, single accent `#b0532c`; serif display (Noto Serif KR) + sans body (Pretendard).
- Respect `prefers-reduced-motion`: disable Lenis smoothing and use no-op animation variants.
- Contact: email `ctlover99@gmail.com`, phone `010-6707-6806`, GitHub `https://github.com/Hee1-99`.
- Unknown project slug redirects to `/`. Detail navigation scrolls to top.
- Every task ends with `npm run build` passing and a git commit.
- No automated test suite (per spec): verification = `tsc` via build + manual dev-server checks.

---

### Task 1: Scaffold Vite project with Tailwind v4, fonts, and theme

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `.gitignore`

**Interfaces:**
- Produces: Tailwind theme tokens `paper`, `ink`, `accent`, `font-display`, `font-sans` used by all components; working `npm run dev` / `npm run build`.

- [ ] **Step 1: Scaffold with Vite React-TS template**

```bash
cd /mnt/c/CP/portfolio
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom framer-motion lenis
npm install -D @tailwindcss/vite tailwindcss
```

(If `npm create vite` balks at the non-empty directory because of `docs/.git`, scaffold into a temp dir and move files in.)

- [ ] **Step 2: Configure Vite with Tailwind plugin**

`vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 3: Replace default styles with theme**

Delete `src/App.css`. `src/index.css`:
```css
@import 'tailwindcss';

@theme {
  --color-paper: #faf7f2;
  --color-ink: #1c1a17;
  --color-ink-soft: #57524a;
  --color-line: #e3ddd2;
  --color-accent: #b0532c;
  --font-sans: 'Pretendard Variable', Pretendard, -apple-system, 'Apple SD Gothic Neo', 'Segoe UI', sans-serif;
  --font-display: 'Noto Serif KR', 'Apple SD Gothic Neo', Georgia, serif;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

body {
  @apply bg-paper text-ink font-sans antialiased;
}
```

- [ ] **Step 4: index.html — lang, title, fonts, meta**

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="정희원 (Hee Won Jung) — 문제를 발견하고 직접 만들어 해결하는 빌더. SNU · Builder · Vibe Coding." />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛠️</text></svg>" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
    <title>Hee Won Jung — Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Minimal placeholder App**

`src/App.tsx`:
```tsx
export default function App() {
  return <main className="min-h-screen grid place-items-center font-display text-3xl">Hee Won Jung — Portfolio</main>
}
```

`src/main.tsx`:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 6: Verify build**

Run: `npm run build` → expect `✓ built` with no TS errors. Run `npm run dev` and confirm page renders with serif font on paper background.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: scaffold Vite + React + Tailwind v4 project with editorial theme"
```

---

### Task 2: Download Notion images

**Files:**
- Create: `public/images/profile.jpg`, `public/images/on-hwa-1.jpg`, `public/images/on-hwa-2.jpg`, `public/images/on-hwa-3.jpg`, `public/images/safebridge-1.png`, `public/images/etl-summary-1.png`, `public/images/etl-summary-2.png`, `public/images/etl-organizer-1.png`

**Interfaces:**
- Produces: image paths `/images/<name>` referenced by content modules (Task 4).

- [ ] **Step 1: Re-fetch each Notion page via MCP** (signed S3 URLs expire in ~5 min) — pages: main `3690a73b-8f23-8098-a435-db3e6628d1c5`, ON-HWA `...81ff-ab49-d704bb114468`, SafeBridge `...813a-b012-f84563532f7b`, eTL Smart Summary `...8122-b8b8-c9739340cd4b`, eTL 정리기 `...81c5-9838-ce484a5d4fde`.

- [ ] **Step 2: Immediately `curl -o public/images/<name> '<signed-url>'` each image** (quote URLs; they contain `&`).

- [ ] **Step 3: Verify** — `file public/images/*` reports JPEG/PNG data (not XML error bodies) and non-trivial sizes.

- [ ] **Step 4: Commit** — `git add public && git commit -m "feat: add profile and project images from Notion"`

---

### Task 3: Content types and language context

**Files:**
- Create: `src/content/types.ts`, `src/i18n/LanguageContext.tsx`

**Interfaces:**
- Produces:
  - `Bilingual = { ko: string; en: string }`, `Project`, `FlowGroup`, `FutureSection`, `TableData`, `SkillRow`, `ProjectImage`, `ProjectLink` types
  - `LanguageProvider`, `useLang(): { lang: 'ko' | 'en'; toggle(): void; t(b: Bilingual): string }`

- [ ] **Step 1: Write `src/content/types.ts`**

```ts
export interface Bilingual {
  ko: string
  en: string
}

export interface ProjectLink {
  label: Bilingual
  url: string
}

export interface ProjectImage {
  src: string
  alt: Bilingual
}

export interface FlowGroup {
  label?: Bilingual
  steps: Bilingual[]
}

export interface TableData {
  title: Bilingual
  headers: Bilingual[]
  rows: Bilingual[][]
}

export interface FutureSection {
  title: Bilingual
  intro: Bilingual
  oneLiner: Bilingual
  tables: TableData[]
  effects: Bilingual[]
  ideas: Bilingual[]
}

export interface Project {
  slug: string
  emoji: string
  title: Bilingual
  type: Bilingual
  solves: Bilingual
  oneLiner: Bilingual
  problem: Bilingual
  solution: Bilingual
  features: Bilingual[]
  flows: FlowGroup[]
  techStack: string[]
  portfolioPoint: Bilingual
  links: ProjectLink[]
  images: ProjectImage[]
  future?: FutureSection
}

export interface SkillRow {
  area: Bilingual
  keywords: Bilingual
}
```

- [ ] **Step 2: Write `src/i18n/LanguageContext.tsx`**

```tsx
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Bilingual } from '../content/types'

export type Lang = 'ko' | 'en'
const STORAGE_KEY = 'portfolio-lang'

interface LangContextValue {
  lang: Lang
  toggle: () => void
  t: (b: Bilingual) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function initialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' ? 'en' : 'ko'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko'
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
      return next
    })
  }, [])

  const value = useMemo<LangContextValue>(
    () => ({ lang, toggle, t: (b) => b[lang] }),
    [lang, toggle],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
```

- [ ] **Step 3: Verify** — `npm run build` passes (modules compile even though unused).

- [ ] **Step 4: Commit** — `git commit -am "feat: add bilingual content types and language context"`

---

### Task 4: Content data modules

**Files:**
- Create: `src/content/profile.ts`, `src/content/projects.ts`

**Interfaces:**
- Consumes: types from `src/content/types.ts`.
- Produces: `profile` object (hero/about/focus/whatIBuild/skills/closing/contact) and `projects: Project[]` (order: on-hwa, safebridge, soulfeed, etl-smart-summary, etl-organizer). All Korean copy verbatim from Notion; English authored translations.

- [ ] **Step 1: Write `src/content/profile.ts`** — hero (chip, name, headline, sub), about paragraphs, profile facts, focus paragraph, whatIBuild items (4), skills rows (6), closing paragraph, contact (email/phone/github). Korean text copied verbatim from the Notion main page; English translated faithfully.

- [ ] **Step 2: Write `src/content/projects.ts`** — all 5 projects fully populated from their Notion subpages (problem, solution, features, flows — SafeBridge has 관리자/근로자 two labeled flow groups —, techStack, portfolioPoint, links, images with alt text). ON-HWA includes `future` (ON:HWA Studio) with the size-recommendation table (4 rows) and MVP composition table (7 rows), effects (4), ideas (4).

- [ ] **Step 3: Verify** — `npm run build` passes; spot-check that every project has non-empty required fields.

- [ ] **Step 4: Commit** — `git commit -am "feat: add bilingual profile and project content"`

*(Full copy lives in the Notion pages fetched in this session; the implementer translates EN inline. No content may be summarized away: every section listed in the spec's detail-page structure must exist for every project.)*

---

### Task 5: App shell — router, Lenis, scroll handling, Reveal helper

**Files:**
- Create: `src/components/SmoothScroll.tsx`, `src/components/ScrollManager.tsx`, `src/components/Reveal.tsx`, `src/pages/Home.tsx` (stub), `src/pages/ProjectDetail.tsx` (stub)
- Modify: `src/App.tsx`, `src/main.tsx`

**Interfaces:**
- Consumes: `LanguageProvider` from Task 3.
- Produces: `<Reveal delay?: number className?: string>` scroll-reveal wrapper; routes `/` and `/projects/:slug`; Lenis active app-wide (disabled under reduced motion); hash + top scroll behavior.

- [ ] **Step 1: `src/components/SmoothScroll.tsx`**

```tsx
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.12 })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
  return null
}
```

- [ ] **Step 2: `src/components/ScrollManager.tsx`** — on route change: if hash, scroll to element; else scroll to top.

```tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}
```

- [ ] **Step 3: `src/components/Reveal.tsx`**

```tsx
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Wire `src/App.tsx`** with `BrowserRouter`, `LanguageProvider`, `SmoothScroll`, `ScrollManager`, routes `/`, `/projects/:slug`, and `*` → `<Navigate to="/" replace />`. Stub pages return headings for now.

- [ ] **Step 5: Verify** — `npm run build`; dev server: `/` renders stub, `/projects/x` renders stub, `/nope` redirects home.

- [ ] **Step 6: Commit** — `git commit -am "feat: app shell with routing, Lenis smooth scroll, reveal helper"`

---

### Task 6: Nav and Footer

**Files:**
- Create: `src/components/Nav.tsx`, `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `useLang`, `profile.contact`, `profile.closing`.
- Produces: `<Nav />` fixed header with anchors (`/#about`, `/#projects`, `/#skills`, `/#contact`) + KO/EN toggle; `<Footer />` with closing copy and contact links (mailto/tel/github). Footer section id `contact`.

- [ ] **Step 1: Write Nav** — fixed top, `backdrop-blur`, paper/80 background, bottom hairline border; left: name button to `/`; right: anchor links (hidden on mobile, shown ≥ md) + toggle button showing the *other* language code. Toggle: `aria-label` "Switch language".
- [ ] **Step 2: Write Footer** — `id="contact"`, top hairline, closing paragraph (serif, large), contact rows: email `mailto:ctlover99@gmail.com`, phone `tel:010-6707-6806`, GitHub external link, © line.
- [ ] **Step 3: Verify** — build passes; dev server: toggle flips all visible copy, persists across reload.
- [ ] **Step 4: Commit** — `git commit -am "feat: nav with language toggle and footer with contact"`

---

### Task 7: Home page sections

**Files:**
- Create: `src/sections/Hero.tsx`, `src/sections/About.tsx`, `src/sections/Focus.tsx`, `src/sections/ProjectsGrid.tsx`, `src/sections/Skills.tsx`
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: `profile`, `projects`, `useLang`, `Reveal`.
- Produces: complete `/` page. Section ids: `about`, `projects`, `skills` (Footer provides `contact`).

- [ ] **Step 1: Hero** — full-viewport-ish (min-h `[88svh]`); chip (small caps, letter-spacing, hairline border); name in sans; headline in display serif with quotes styled in accent; sub paragraph in ink-soft; staggered entrance animation (not scroll-triggered).
- [ ] **Step 2: About** — two-column ≥ md: photo (`/images/profile.jpg`, rounded, max-w) + paragraphs; profile facts as definition list under hairlines.
- [ ] **Step 3: Focus** — Portfolio Focus paragraph (display serif pull-quote style) + "What I Build" 4 items as numbered editorial list (01–04 in accent).
- [ ] **Step 4: ProjectsGrid** — heading + 5 `<Link to={'/projects/' + slug}>` rows/cards: emoji, title (serif), type (small caps), solves line, arrow → with hover x-shift; hover: subtle background tint and lift via framer-motion `whileHover={{ y: -3 }}`.
- [ ] **Step 5: Skills** — 6 rows, area label (small caps, accent) | keywords, separated by hairlines.
- [ ] **Step 6: Compose Home** — `<Hero /><About /><Focus /><ProjectsGrid /><Skills />` each wrapped in consistent container (`mx-auto max-w-5xl px-6`), generous vertical rhythm (`py-24` ~ `py-32`), sections wrapped in `Reveal`.
- [ ] **Step 7: Verify** — build + dev server both languages, mobile (375px) and desktop layouts.
- [ ] **Step 8: Commit** — `git commit -am "feat: home page sections"`

---

### Task 8: Project detail page

**Files:**
- Modify: `src/pages/ProjectDetail.tsx`

**Interfaces:**
- Consumes: `projects`, `useLang`, `Reveal`.
- Produces: full detail page; invalid slug → `<Navigate to="/" replace />`; prev/next navigation.

- [ ] **Step 1: Implement** — resolve project by `useParams().slug`. Layout (`max-w-3xl` prose column, images can extend to `max-w-5xl`):
  - Back link "← Home / 홈으로"
  - Header: emoji, title (display serif, 4xl–6xl), type (small caps), one-liner, external link buttons (service / GitHub / Chrome Web Store as available)
  - Image strip: grid (1–3 cols by count), rounded, hairline border, `loading="lazy"`
  - Sections with numbered small-caps headings (문제 정의 / Problem, 해결 방식 / Solution, 주요 기능 / Features as list, 사용자 흐름 / User Flow as ordered steps with optional group labels, 기술 스택 / Tech Stack as chips, 포트폴리오 포인트 / Portfolio Point as accent-bordered callout, 링크 / Links)
  - ON-HWA `future` block: divider + title, intro, one-liner, two tables (`overflow-x-auto` wrapper, hairline styling), effects list, ideas list
  - Prev/next project footer nav
- [ ] **Step 2: Verify** — build; visit all 5 slugs in both languages; `/projects/nope` redirects; tables scroll horizontally on mobile.
- [ ] **Step 3: Commit** — `git commit -am "feat: project detail pages"`

---

### Task 9: Final polish and verification

**Files:**
- Modify: as needed from findings.

- [ ] **Step 1: Route transition** — wrap `Routes` in `AnimatePresence` fade (skip if it fights ScrollManager; plain render is acceptable).
- [ ] **Step 2: Full manual pass** — dev server: every route × both languages × 375px/768px/1440px; keyboard focus visible on links/toggle; document.title stays sensible; reduced-motion (emulate) shows content without animation.
- [ ] **Step 3: `npm run build` + `npm run preview`** — production smoke test.
- [ ] **Step 4: Commit** — `git commit -am "polish: transitions, responsive and a11y fixes"`
