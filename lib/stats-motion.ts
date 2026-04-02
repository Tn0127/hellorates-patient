"use client"

import { useEffect, useRef, useState } from "react"

export function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

export function formatInt(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const fn = () => setReduced(mq.matches)
    mq.addEventListener("change", fn)
    return () => mq.removeEventListener("change", fn)
  }, [])
  return reduced
}

export function useInViewOnce(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setInView(true)
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px", ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [inView])
  return { ref, inView }
}

export function useCountUp(
  target: number,
  enabled: boolean,
  opts?: { durationMs?: number; delayMs?: number }
) {
  const { durationMs = 2000, delayMs = 0 } = opts ?? {}
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const timeout = window.setTimeout(() => {
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts
        const elapsed = ts - start
        const p = Math.min(1, elapsed / durationMs)
        setValue(Math.floor(easeOutCubic(p) * target))
        if (p < 1) raf = requestAnimationFrame(step)
        else setValue(target)
      }
      raf = requestAnimationFrame(step)
    }, delayMs)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [target, enabled, durationMs, delayMs])

  return value
}

/** Smooth count for fractional stats (e.g. 7.8K). */
export function useCountUpFloat(
  target: number,
  enabled: boolean,
  opts?: { durationMs?: number; delayMs?: number }
) {
  const { durationMs = 2000, delayMs = 0 } = opts ?? {}
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const timeout = window.setTimeout(() => {
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts
        const elapsed = ts - start
        const p = Math.min(1, elapsed / durationMs)
        setValue(easeOutCubic(p) * target)
        if (p < 1) raf = requestAnimationFrame(step)
        else setValue(target)
      }
      raf = requestAnimationFrame(step)
    }, delayMs)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [target, enabled, durationMs, delayMs])

  return value
}
