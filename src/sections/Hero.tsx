import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'

const EASE = [0.22, 1, 0.36, 1] as const

function isMarkWord(word: string): boolean {
  const clean = word.replace(/[^가-힣a-zA-Z]/g, '').toLowerCase()
  return clean === '빌더' || clean === 'builder'
}

function RisingWords({ text }: { text: string }) {
  const reduced = useReducedMotion()
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${text}-${i}`}
          className="mr-[0.24em] inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-top"
        >
          <motion.span
            className={`inline-block ${isMarkWord(word) ? 'bg-accent px-[0.14em] text-paper' : ''}`}
            initial={reduced ? false : { y: '115%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const { lang, t } = useLang()
  const reduced = useReducedMotion()

  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  })

  return (
    <section className="mx-auto flex min-h-[88svh] max-w-5xl flex-col justify-center px-6 pt-28 pb-16">
      <motion.p
        {...fade(0.05)}
        className="w-fit border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] shadow-brut-sm"
      >
        {t(profile.chip)}
      </motion.p>

      <motion.p {...fade(0.12)} className="mt-12 text-2xl font-bold tracking-tight md:text-3xl">
        {t(profile.greeting)}
      </motion.p>

      <motion.p {...fade(0.18)} className="mt-6 text-base font-medium text-ink-soft">
        {t(profile.headlineLead)}
      </motion.p>

      <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.15] tracking-tight md:text-6xl">
        <RisingWords key={lang} text={t(profile.headline)} />
      </h1>

      <motion.p {...fade(0.55)} className="mt-8 max-w-xl leading-relaxed text-ink-soft">
        {t(profile.headlineNote)}
      </motion.p>

      <motion.div {...fade(0.65)} className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/#projects"
          className="brut-press border-2 border-ink bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-brut"
        >
          {t(profile.heroCta.projects)}
        </Link>
        <Link
          to="/#contact"
          className="brut-press border-2 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase tracking-wide shadow-brut"
        >
          {t(profile.heroCta.contact)}
        </Link>
      </motion.div>
    </section>
  )
}
