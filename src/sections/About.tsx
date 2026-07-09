import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="border-t-2 border-ink">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="mr-3 text-accent">01</span>About me
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <Reveal>
            <img
              src="/images/profile.jpg"
              alt={t({ ko: '정희원 증명사진', en: 'Portrait of Hee Won Jung' })}
              className="w-52 border-2 border-ink shadow-brut md:w-full"
            />
          </Reveal>

          <div>
            {profile.aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p className="mb-6 max-w-2xl text-[1.05rem] leading-loose text-ink/90">{t(p)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
