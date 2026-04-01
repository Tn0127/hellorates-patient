"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3
}

function formatInt(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

function useReducedMotion() {
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

function useInViewOnce(options?: IntersectionObserverInit) {
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

function useCountUp(
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

type StatConfig = {
  key: string
  end: number
  suffix: string
  prefix?: string
  label: string
  delayMs: number
  /** Optional extra static fragment after the animated number (e.g. loan range) */
  trailing?: string
}

const STATS: StatConfig[] = [
  { key: "contractors", end: 7800, suffix: "+", label: "Contractors", delayMs: 0 },
  { key: "roi", end: 10, suffix: "x", label: "Average ROI", delayMs: 70 },
  { key: "fico", end: 500, suffix: "", label: "Min FICO", delayMs: 140 },
  {
    key: "loan",
    end: 500,
    prefix: "$",
    suffix: "",
    trailing: "–$100K",
    label: "Loan range",
    delayMs: 210,
  },
  { key: "lenders", end: 35, suffix: "+", label: "Lenders", delayMs: 280 },
]

function StatCard({
  stat,
  inView,
  reduceMotion,
}: {
  stat: StatConfig
  inView: boolean
  reduceMotion: boolean
}) {
  const animate = inView && !reduceMotion
  const count = useCountUp(stat.end, animate, {
    durationMs: stat.end >= 1000 ? 2200 : 1600,
    delayMs: stat.delayMs,
  })
  const n = reduceMotion && inView ? stat.end : count
  const num =
    stat.key === "loan"
      ? `${stat.prefix ?? ""}${formatInt(n)}${stat.suffix}`
      : `${formatInt(n)}${stat.suffix}`

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 md:px-5 md:py-6",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm",
        "transition-[transform,background-color,border-color] duration-300",
        "hover:border-white/[0.14] hover:bg-white/[0.07]",
        inView && "animate-in fade-in-0 zoom-in-95 duration-500"
      )}
      style={{ animationDelay: `${stat.delayMs}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(245,158,11,0.12), transparent 55%)",
        }}
      />
      <span
        className="relative text-center text-2xl font-bold leading-none tracking-tight text-white tabular-nums md:text-[1.65rem]"
        aria-live={animate ? "polite" : undefined}
      >
        {stat.trailing ? (
          <span className="whitespace-nowrap">
            {num}
            <span className="text-white/90">{stat.trailing}</span>
          </span>
        ) : (
          num
        )}
      </span>
      <span className="relative mt-2.5 text-center text-[11px] font-semibold tracking-[0.06em] text-white/50">
        {stat.label}
      </span>
    </div>
  )
}

export function SocialProofBar() {
  const reduceMotion = useReducedMotion()
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-[var(--navy)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(245,158,11,0.08), transparent)",
        }}
      />

      <div className="hr-container relative">
        <div className="flex flex-col items-center gap-2 pt-8 pb-2 md:pt-10">
          <div className="h-px w-10 bg-[var(--gold)]/80" aria-hidden />
          <p className="text-[11px] font-bold tracking-[0.12em] text-white/55">
            By The Numbers
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {STATS.map((stat) => (
            <StatCard
              key={stat.key}
              stat={stat}
              inView={inView}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 py-5 pb-6 md:pb-8">
          <div className="flex items-start gap-2.5 flex-1 min-w-0">
            <span className="text-[var(--gold)] text-xs tracking-wider flex-shrink-0">
              ★★★★★
            </span>
            <span className="text-[13px] text-white/85 leading-snug italic">
              &quot;Recovered a $12,600 HVAC job my primary lender declined. 612 FICO,
              approved instantly.&quot;{" "}
              <strong className="text-white not-italic">
                Mark Stevens, Stevens Heating &amp; Air
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
