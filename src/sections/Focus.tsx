import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

/** Wrap occurrences of `highlight` inside `text` with an accent mark. */
function MarkedText({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(highlight)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <mark className="bg-accent-pale px-1">{highlight}</mark>}
          {part}
        </span>
      ))}
    </>
  )
}

export default function Focus() {
  const { t } = useLang()

  return (
    <section className="border-t-2 border-ink">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="mr-3 text-accent">02</span>
            {t(profile.focusTitle)}
          </p>
          <p className="mt-8 max-w-3xl text-2xl font-bold leading-relaxed tracking-tight md:text-3xl">
            <MarkedText text={t(profile.focusBody)} highlight={t(profile.focusHighlight)} />
          </p>
        </Reveal>

      </div>
    </section>
  )
}
