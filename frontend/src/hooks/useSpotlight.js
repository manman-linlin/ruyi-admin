/**
 * useSpotlight — Enables cursor-following spotlight effect on glass cards.
 *
 * Usage:
 *   const ref = useSpotlight()
 *   return <div ref={ref} className="card-spotlight">...</div>
 *
 * The hook sets --mouse-x and --mouse-y CSS custom properties on the element
 * as percentages, which the .card-spotlight::before pseudo-element uses for
 * its radial-gradient center.
 */
import { useEffect, useRef, useCallback } from 'react'

export default function useSpotlight() {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mouse-x', `${x}%`)
    el.style.setProperty('--mouse-y', `${y}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.removeProperty('--mouse-x')
    el.style.removeProperty('--mouse-y')
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove, { passive: true })
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
