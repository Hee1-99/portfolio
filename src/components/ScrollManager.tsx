import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../lib/lenis'

export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = getLenis()
    if (hash) {
      const el = document.querySelector<HTMLElement>(hash)
      if (!el) return
      if (lenis) {
        lenis.scrollTo(el, { offset: -56 })
      } else {
        el.scrollIntoView()
      }
    } else if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
