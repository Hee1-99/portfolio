import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import Reveal from '../components/Reveal'

export default function ProjectsGrid() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {t(profile.projectsTitle)}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            {t(profile.projectsIntro)}
          </p>
        </Reveal>

        <div className="mt-14">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * i}>
              <motion.div whileHover={reduced ? undefined : { y: -3 }}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group grid gap-2 border-b border-line py-8 transition-colors hover:bg-white/50 md:grid-cols-[64px_1fr_auto] md:gap-8 md:px-4"
                >
                  <span className="text-3xl" aria-hidden>
                    {project.emoji}
                  </span>
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-2xl font-semibold group-hover:text-accent transition-colors">
                        {t(project.title)}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                        {t(project.type)}
                      </span>
                    </span>
                    <span className="mt-3 block max-w-xl text-sm leading-relaxed text-ink-soft">
                      {t(project.solves)}
                    </span>
                  </span>
                  <span
                    className="hidden self-center text-xl text-ink-soft transition-transform group-hover:translate-x-1.5 group-hover:text-accent md:block"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
