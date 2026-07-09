import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="border-t-2 border-ink">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="mr-3 text-accent">04</span>
            {t(profile.skillsTitle)}
          </p>
        </Reveal>

        <div className="mt-12 border-t-2 border-ink">
          {profile.skills.map((row, i) => (
            <Reveal key={row.area.en} delay={0.04 * i}>
              <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[220px_1fr] md:gap-8">
                <p className="pt-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {t(row.area)}
                </p>
                <p className="leading-relaxed">{t(row.keywords)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
