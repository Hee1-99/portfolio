import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">About me</p>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
          <Reveal>
            <img
              src="/images/profile.jpg"
              alt={t({ ko: '정희원 증명사진', en: 'Portrait of Hee Won Jung' })}
              className="w-56 rounded-lg border border-line md:w-full"
            />
          </Reveal>

          <div>
            {profile.aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p className="mb-6 max-w-2xl leading-loose text-ink/90">{t(p)}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <dl className="mt-10 border-t border-line">
                {profile.facts.map((fact) => (
                  <div
                    key={fact.label.en}
                    className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4 md:grid-cols-[160px_1fr]"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-ink-soft pt-0.5">
                      {t(fact.label)}
                    </dt>
                    <dd className="text-sm leading-relaxed">{t(fact.value)}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
