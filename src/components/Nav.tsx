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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-sm font-extrabold tracking-tight hover:bg-accent-pale transition-colors px-1"
        >
          Hee Won Jung’s Portfolio
        </Link>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  to={`/${link.hash}`}
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink hover:underline decoration-accent decoration-[3px] underline-offset-4"
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
            className="brut-press border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[11px] font-semibold tracking-widest shadow-brut-sm hover:bg-accent-pale"
          >
            {lang === 'ko' ? 'EN' : 'KO'}
          </button>
        </div>
      </nav>
    </header>
  )
}
