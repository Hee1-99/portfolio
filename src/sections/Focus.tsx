import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from '../components/Reveal'

export default function Focus() {
  const { t } = useLang()

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {t(profile.focusTitle)}
          </p>
          <p className="mt-8 max-w-3xl font-display text-2xl leading-relaxed md:text-3xl">
            {t(profile.focusBody)}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-20 text-xs uppercase tracking-[0.24em] text-ink-soft">
            {t(profile.whatIBuildTitle)}
          </p>
          <ol className="mt-6 grid gap-x-12 md:grid-cols-2">
            {profile.whatIBuild.map((item, i) => (
              <li
                key={item.en}
                className="flex gap-5 border-b border-line py-5"
              >
                <span className="font-display text-sm text-accent pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed">{t(item)}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
