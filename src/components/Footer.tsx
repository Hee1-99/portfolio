import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from './Reveal'

export default function Footer() {
  const { t } = useLang()
  const { contact } = profile

  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {t(profile.closingTitle)}
          </p>
          <p className="mt-6 max-w-3xl font-display text-xl leading-relaxed md:text-2xl">
            {t(profile.closing)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid gap-6 border-t border-line pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-ink-soft">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-ink-soft">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.24em] text-ink-soft">GitHub</dt>
              <dd className="mt-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  {contact.githubLabel}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <p className="mt-16 text-xs text-ink-soft">
          © {new Date().getFullYear()} Hee Won Jung
        </p>
      </div>
    </footer>
  )
}
