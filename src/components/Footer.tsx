import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'
import Reveal from './Reveal'

export default function Footer() {
  const { t } = useLang()
  const { contact } = profile

  return (
    <footer id="contact" className="border-t-[3px] border-ink bg-paper-2">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="mr-3 text-accent">05</span>
            {t(profile.closingTitle)}
          </p>
          <p className="mt-8 max-w-3xl text-xl font-bold leading-relaxed tracking-tight md:text-2xl">
            {t(profile.closing)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Email', href: `mailto:${contact.email}`, text: contact.email, external: false },
              { label: 'Phone', href: `tel:${contact.phone}`, text: contact.phone, external: false },
              { label: 'GitHub', href: contact.github, text: contact.githubLabel, external: true },
            ].map((item) => (
              <div key={item.label} className="border-2 border-ink bg-paper shadow-brut-sm">
                <dt className="border-b border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {item.label}
                </dt>
                <dd className="px-4 py-3">
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="text-sm font-medium hover:underline decoration-accent decoration-[3px] underline-offset-4 break-all"
                  >
                    {item.text}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
          © {new Date().getFullYear()} Hee Won Jung
        </p>
      </div>
    </footer>
  )
}
