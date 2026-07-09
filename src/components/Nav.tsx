import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { profile } from '../content/profile'

const links = [
  { hash: '#about', label: profile.nav.about },
  { hash: '#projects', label: profile.nav.projects },
  { hash: '#skills', label: profile.nav.skills },
  { hash: '#contact', label: profile.nav.contact },
]

export default function Nav() {
  const { lang, toggle, t } = useLang()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-wide hover:text-accent transition-colors"
        >
          {lang === 'ko' ? '정희원' : 'Hee Won Jung'}
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/${link.hash}`}
                  className="text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="rounded-full border border-line px-3 py-1 text-xs font-medium tracking-widest text-ink-soft hover:border-accent hover:text-accent transition-colors"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
        </div>
      </nav>
    </header>
  )
}
