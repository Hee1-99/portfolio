import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {t(profile.skillsTitle)}
          </p>
        </Reveal>

        <div className="mt-12">
          {profile.skills.map((row, i) => (
            <Reveal key={row.area.en} delay={0.04 * i}>
              <div className="grid gap-2 border-b border-line py-6 md:grid-cols-[220px_1fr] md:gap-8">
                <p className="text-xs uppercase tracking-[0.2em] text-accent pt-1">
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
