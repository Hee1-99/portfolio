import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Bilingual } from '../content/types'

export type Lang = 'ko' | 'en'
const STORAGE_KEY = 'portfolio-lang'

interface LangContextValue {
  lang: Lang
  toggle: () => void
  t: (b: Bilingual) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function initialLang(): Lang {
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ko'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko'
      localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
      return next
    })
  }, [])

  const value = useMemo<LangContextValue>(
    () => ({ lang, toggle, t: (b) => b[lang] }),
    [lang, toggle],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
