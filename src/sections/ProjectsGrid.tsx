import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import Reveal from '../components/Reveal'

export default function ProjectsGrid() {
  const { t } = useLang()

  return (
    <section id="projects" className="border-t-2 border-ink">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="mr-3 text-accent">03</span>
            {t(profile.projectsTitle)}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            {t(profile.projectsIntro)}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * (i % 2)} className="h-full">
              <Link
                to={`/projects/${project.slug}`}
                className="brut-press group flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-brut"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl" aria-hidden>
                    {project.emoji}
                  </span>
                  <span className="border-2 border-ink bg-accent-pale px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] leading-tight text-right">
                    {t(project.type)}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-tight group-hover:underline decoration-accent decoration-[3px] underline-offset-4">
                  {t(project.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t(project.solves)}
                </p>

                <p className="mt-auto pt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.12em]">
                  {t({ ko: '자세히 보기', en: 'View project' })}{' '}
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
