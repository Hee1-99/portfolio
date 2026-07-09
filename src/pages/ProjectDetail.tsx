import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { getProject, projects } from '../content/projects'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
      <span className="mr-3 text-accent">{index}</span>
      {children}
    </h2>
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
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] hover:underline decoration-accent decoration-[3px] underline-offset-4"
          >
            ← {t({ ko: '홈으로', en: 'Home' })}
          </Link>

          <div className="mt-12 max-w-3xl">
            <span className="text-4xl" aria-hidden>
              {project.emoji}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              {t(project.title)}
            </h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <p className="inline-block border-2 border-ink bg-accent-pale px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.06em]">
                {t(project.type)}
              </p>
              {project.award && (
                <p className="inline-block border-2 border-ink bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.02em] text-paper">
                  🏆 {t(project.award)}
                </p>
              )}
            </div>
            <p className="mt-8 text-lg leading-relaxed text-ink/90">{t(project.oneLiner)}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.map((link, i) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`brut-press border-2 border-ink px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.1em] shadow-brut ${
                    i === 0 ? 'bg-accent text-paper' : 'bg-paper'
                  }`}
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
              className={`mt-16 grid gap-6 ${
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
                  className="w-full border-2 border-ink shadow-brut"
                />
              ))}
            </div>
          </Reveal>
        )}

        <div className="mx-auto mt-8 max-w-3xl">
          <Reveal>
            <section className="mt-12 border-t-2 border-ink pt-12">
              <SectionHeading index={num()}>
                {t({ ko: '문제 정의', en: 'Problem' })}
              </SectionHeading>
              <p className="mt-6 leading-loose text-ink/90">{t(project.problem)}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-16 border-t-2 border-ink pt-12">
              <SectionHeading index={num()}>
                {t({ ko: '해결 방식', en: 'Solution' })}
              </SectionHeading>
              <p className="mt-6 leading-loose text-ink/90">{t(project.solution)}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-16 border-t-2 border-ink pt-12">
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
                      ◆
                    </span>
                    {t(feature)}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-16 border-t-2 border-ink pt-12">
              <SectionHeading index={num()}>
                {t({ ko: '사용자 흐름', en: 'User Flow' })}
              </SectionHeading>
              <div className="mt-6 grid gap-10">
                {project.flows.map((flow, fi) => (
                  <div key={fi}>
                    {flow.label && (
                      <h3 className="mb-4 inline-block border-2 border-ink bg-paper-2 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.08em]">
                        {t(flow.label)}
                      </h3>
                    )}
                    <ol className="space-y-4">
                      {flow.steps.map((step, si) => (
                        <li key={si} className="flex gap-5">
                          <span className="pt-0.5 font-mono text-sm font-semibold text-accent">
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
            <section className="mt-16 border-t-2 border-ink pt-12">
              <SectionHeading index={num()}>
                {t({ ko: '기술 스택', en: 'Tech Stack' })}
              </SectionHeading>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="border-2 border-ink bg-paper px-3 py-1.5 font-mono text-xs shadow-brut-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-16 border-t-2 border-ink pt-12">
              <SectionHeading index={num()}>
                {t({ ko: '포트폴리오 포인트', en: 'Portfolio Point' })}
              </SectionHeading>
              <blockquote className="mt-6 border-2 border-ink bg-accent-pale p-6 text-base font-semibold leading-relaxed shadow-brut md:p-8">
                {t(project.portfolioPoint)}
              </blockquote>
            </section>
          </Reveal>

          <nav className="mt-20 flex items-center justify-between gap-4 border-t-2 border-ink pt-8">
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex items-center gap-3 hover:text-accent transition-colors"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  Prev
                </span>
                <span className="text-sm font-bold">{t(prev.title)}</span>
              </span>
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center gap-3 text-right hover:text-accent transition-colors"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  Next
                </span>
                <span className="text-sm font-bold">{t(next.title)}</span>
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
