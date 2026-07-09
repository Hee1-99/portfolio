# Hee Won Jung Portfolio Website — Design Spec

**Date:** 2026-07-09
**Source of truth:** Notion page "Hee Won Jung's Portfolio" (page id `3690a73b-8f23-8098-a435-db3e6628d1c5`) and its 5 project subpages.

## Goal

A portfolio/profile website for 정희원 (Hee Won Jung), built from the Notion portfolio content. Minimal editorial design, Korean/English language toggle, one-page main layout with per-project detail pages, all Notion images included.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, hover micro-interactions, page transitions)
- Lenis (smooth scrolling)
- React Router (`react-router-dom`) for detail-page routing

## Routes

| Route | Content |
|---|---|
| `/` | One-page scroll: Hero → About → Focus & What I Build → Projects grid → Core Skills → Closing/Footer |
| `/projects/:slug` | Project detail pages for slugs: `on-hwa`, `safebridge`, `soulfeed`, `etl-smart-summary`, `etl-organizer` |

Unknown slugs redirect to `/`. Detail pages scroll to top on navigation.

## Content Architecture

All content lives in `src/content/` as TypeScript modules. Every user-visible string is a `Bilingual` value: `{ ko: string; en: string }`.

- `src/content/profile.ts` — hero, about, focus, whatIBuild, skills, closing, contact
- `src/content/projects.ts` — array of 5 project objects: slug, title, emoji, type, oneLiner, problem, solution, features[], userFlow (single or grouped e.g. SafeBridge admin/worker flows), techStack[], portfolioPoint, links (service/github/chrome web store), images[], and optional `future` section (ON-HWA Studio: description, size-recommendation table, MVP composition table, expected effects, expansion ideas)
- `src/i18n/LanguageContext.tsx` — React context with `lang: 'ko' | 'en'`, toggle persisted to `localStorage` (`portfolio-lang`), default `ko`. Helper `t(bilingual)` returns the active-language string.

English translations are authored during implementation from the Korean Notion source.

## Page Structure (main page, mirrors Notion)

1. **Nav** — fixed top; name/logo, anchor links (About, Projects, Skills, Contact), KO/EN toggle button.
2. **Hero** — tagline chip "SNU · Builder · Vibe Coding · Automotive Industry", name, headline "문제를 발견하고 직접 만들어 해결하는 빌더" / "A builder who finds problems and solves them by making", supporting sentence about MVP-first validation.
3. **About** — ID photo + intro paragraphs (SNU 자유전공학부 23, DWNC club, interests: 창업/자동차/기계공학/바이브코딩).
4. **Focus & What I Build** — Portfolio Focus paragraph + 4-item "What I Build" list.
5. **Projects** — 5 cards (emoji, title, type, one-line what-it-solves) linking to detail pages.
6. **Core Skills** — 6-row area/keywords table styled as editorial list (Product Building, Web App, AI Product, Data & Auth, Extension, Direction).
7. **Closing / Footer** — closing paragraph, contact: email `ctlover99@gmail.com`, phone `010-6707-6806`, GitHub `https://github.com/Hee1-99`.

## Project Detail Page Structure

Hero (emoji, title, type, one-liner, external links) → screenshot images → sections: 문제 정의 / 해결 방식 / 주요 기능 / 사용자 흐름 (ordered steps; SafeBridge has two labeled flows) / 기술 스택 (tag chips) / 포트폴리오 포인트 / 링크. ON-HWA additionally renders the "추후 개발해볼 것: ON:HWA Studio" section with its two tables (size recommendation, MVP composition), expected effects, and expansion ideas. Back-to-home link and prev/next project navigation at the bottom.

## Design Language

- Minimal editorial: warm off-white background, near-black ink text, one restrained accent color.
- Large display serif for headlines contrasted with clean sans body; generous whitespace; thin rules between sections.
- Korean body text uses Pretendard; display/serif accents use a serif stack (e.g. Noto Serif KR for Korean display). Fonts self-hosted or system-stack fallback — no render-blocking CDN dependency required for correctness.
- Motion: fade + small y-offset scroll reveals (Framer Motion `whileInView`), subtle card hover lift, route transition fade. Respect `prefers-reduced-motion` (disable Lenis smoothing and nontrivial animations).
- Fully responsive (mobile-first; nav collapses appropriately).

## Images

Notion S3 URLs are signed with ~5-minute expiry. During implementation, re-fetch each Notion page and immediately download images to `public/images/`:

- `profile.jpg` (증명사진) — About section
- `on-hwa-1.jpg`, `on-hwa-2.jpg`, `on-hwa-3.jpg` — ON-HWA detail
- `safebridge-1.png` — SafeBridge detail
- `etl-summary-1.png`, `etl-summary-2.png` — eTL Smart Summary detail
- `etl-organizer-1.png` — eTL 강의자료 정리기 detail

All images get descriptive `alt` text and `loading="lazy"` (except above-the-fold profile image).

## Error Handling

- Static site — no runtime data fetching, so no loading/error states.
- Unknown project slug → redirect to `/`.
- Missing image files fail visibly at build review (manual check), not silently.

## Testing / Verification

- `npm run build` and `tsc` must pass with zero errors.
- Manual verification via dev server: both languages on every page, all 6 routes, responsive breakpoints, reduced-motion behavior.
- No automated test suite for v1 (static content site; type-checked content is the main safety net).

## Deployment

Out of scope for v1; output is a standard Vite static build deployable to Vercel/Netlify later.
