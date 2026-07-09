import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { getProject, projects } from '../content/projects'
import type { Bilingual, TableData } from '../content/types'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-4 text-xs uppercase tracking-[0.24em] text-accent">
      <span className="font-display">{index}</span>
      {children}
    </h2>
  )
}

function FutureTable({ table, t }: { table: TableData; t: (b: Bilingual) => string }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-ink-soft">{t(table.title)}</h4>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink/20 text-left">
              {table.headers.map((h) => (
                <th
                  key={h.en}
                  className="py-3 pr-6 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft"
                >
                  {t(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="border-b border-line align-top">
                {row.map((cell, j) => (
                  <td key={j} className="py-3 pr-6 leading-relaxed">
                    {t(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useLang()
  const project = getProject(slug)

  useEffect(() => {
    if (!project) return
    document.title = `${project.title.en} — Hee Won Jung`
    return () => {
      document.title = 'Hee Won Jung — Portfolio'
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  let section = 0
  const num = () => String(++section).padStart(2, '0')

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-24">
        <Reveal>
          <Link
            to="/#projects"
            className="text-xs uppercase tracking-[0.2em] text-ink-soft hover:text-accent transition-colors"
          >
            ← {t({ ko: '홈으로', en: 'Home' })}
          </Link>

          <div className="mt-12 max-w-3xl">
            <span className="text-4xl" aria-hidden>
              {project.emoji}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl">
              {t(project.title)}
            </h1>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              {t(project.type)}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ink/90">{t(project.oneLiner)}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-5 py-2 text-xs uppercase tracking-[0.16em] text-ink-soft hover:border-accent hover:text-accent transition-colors"
                >
                  {t(link.label)} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {project.images.length > 0 && (
          <Reveal delay={0.1}>
            <div
              className={`mt-16 grid gap-4 ${
                project.images.length === 1
                  ? 'grid-cols-1'
                  : project.images.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-3'
              }`}
            >
              {project.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={t(image.alt)}
                  loading="lazy"
                  className="w-full rounded-lg border border-line"
                />
              ))}
            </div>
          </Reveal>
        )}

        <div className="mx-auto mt-8 max-w-3xl">
          <Reveal>
            <section className="border-t border-line pt-12 mt-12">
              <SectionHeading index={num()}>
                {t({ ko: '문제 정의', en: 'Problem' })}
              </SectionHeading>
              <p className="mt-6 leading-loose text-ink/90">{t(project.problem)}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-line pt-12 mt-16">
              <SectionHeading index={num()}>
                {t({ ko: '해결 방식', en: 'Solution' })}
              </SectionHeading>
              <p className="mt-6 leading-loose text-ink/90">{t(project.solution)}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-line pt-12 mt-16">
              <SectionHeading index={num()}>
                {t({ ko: '주요 기능', en: 'Features' })}
              </SectionHeading>
              <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature.en}
                    className="flex gap-3 border-b border-line py-3 text-sm leading-relaxed"
                  >
                    <span className="text-accent" aria-hidden>
                      —
                    </span>
                    {t(feature)}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-line pt-12 mt-16">
              <SectionHeading index={num()}>
                {t({ ko: '사용자 흐름', en: 'User Flow' })}
              </SectionHeading>
              <div className="mt-6 grid gap-10 md:grid-cols-1">
                {project.flows.map((flow, fi) => (
                  <div key={fi}>
                    {flow.label && (
                      <h3 className="mb-4 text-sm font-semibold">{t(flow.label)}</h3>
                    )}
                    <ol className="space-y-4">
                      {flow.steps.map((step, si) => (
                        <li key={si} className="flex gap-5">
                          <span className="font-display text-sm text-accent pt-0.5">
                            {String(si + 1).padStart(2, '0')}
                          </span>
                          <span className="leading-relaxed">{t(step)}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-line pt-12 mt-16">
              <SectionHeading index={num()}>
                {t({ ko: '기술 스택', en: 'Tech Stack' })}
              </SectionHeading>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-white/60 px-4 py-1.5 text-xs tracking-wide text-ink-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-line pt-12 mt-16">
              <SectionHeading index={num()}>
                {t({ ko: '포트폴리오 포인트', en: 'Portfolio Point' })}
              </SectionHeading>
              <blockquote className="mt-6 border-l-2 border-accent pl-6 font-display text-lg leading-relaxed">
                {t(project.portfolioPoint)}
              </blockquote>
            </section>
          </Reveal>

          {project.future && (
            <Reveal>
              <section className="mt-20 rounded-xl border border-line bg-white/50 p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-accent">
                  {t({ ko: '추후 개발해볼 것', en: 'Future Work' })}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">
                  {t(project.future.title)}
                </h3>
                <p className="mt-6 leading-loose text-ink/90">{t(project.future.intro)}</p>
                <p className="mt-6 border-l-2 border-accent pl-5 text-sm leading-relaxed text-ink-soft">
                  {t(project.future.oneLiner)}
                </p>

                <div className="mt-10 space-y-10">
                  {project.future.tables.map((table) => (
                    <FutureTable key={table.title.en} table={table} t={t} />
                  ))}
                </div>

                <h4 className="mt-12 text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {t({ ko: '기대 효과', en: 'Expected Effects' })}
                </h4>
                <ul className="mt-4 space-y-3">
                  {project.future.effects.map((effect) => (
                    <li key={effect.en} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-accent" aria-hidden>
                        —
                      </span>
                      {t(effect)}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-10 text-xs uppercase tracking-[0.2em] text-ink-soft">
                  {t({ ko: '추가 확장 아이디어', en: 'Expansion Ideas' })}
                </h4>
                <ul className="mt-4 space-y-3">
                  {project.future.ideas.map((idea) => (
                    <li key={idea.en} className="flex gap-3 text-sm leading-relaxed">
                      <span className="text-accent" aria-hidden>
                        —
                      </span>
                      {t(idea)}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          <nav className="mt-20 flex items-center justify-between border-t border-line pt-8 text-sm">
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex items-center gap-3 text-ink-soft hover:text-accent transition-colors"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em]">Prev</span>
                {t(prev.title)}
              </span>
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center gap-3 text-right text-ink-soft hover:text-accent transition-colors"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em]">Next</span>
                {t(next.title)}
              </span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
