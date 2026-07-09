import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'

export default function Hero() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  const item = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="mx-auto flex min-h-[88svh] max-w-5xl flex-col justify-center px-6 pt-24 pb-16">
      <motion.p
        {...item}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex w-fit items-center rounded-full border border-line px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-ink-soft"
      >
        {t(profile.chip)}
      </motion.p>

      <motion.h1
        {...item}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 text-sm font-medium uppercase tracking-[0.3em] text-ink-soft"
      >
        {t(profile.name)}
        <span className="ml-3 normal-case tracking-normal text-ink-soft/70">
          {t(profile.nameSub)}
        </span>
      </motion.h1>

      <motion.p
        {...item}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-sm text-ink-soft"
      >
        {t(profile.headlineLead)}
      </motion.p>

      <motion.h2
        {...item}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.2] md:text-6xl md:leading-[1.15]"
      >
        <span className="text-accent">“</span>
        {t(profile.headline)}
        <span className="text-accent">”</span>
      </motion.h2>

      <motion.p
        {...item}
        transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-xl leading-relaxed text-ink-soft"
      >
        {t(profile.headlineNote)}
      </motion.p>
    </section>
  )
}
