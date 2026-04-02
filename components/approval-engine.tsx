"use client"

import Link from "next/link"
import { Check, X, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  useCountUp,
  useCountUpFloat,
  useInViewOnce,
  useReducedMotion,
} from "@/lib/stats-motion"

const numClass =
  "relative text-center text-2xl font-bold leading-none tracking-tight text-white tabular-nums md:text-[1.65rem]"

function StatCellInt({
  end,
  accentSuffix,
  line1,
  line2,
  delayMs,
  inView,
  reduceMotion,
}: {
  end: number
  accentSuffix: string
  line1: string
  line2: string
  delayMs: number
  inView: boolean
  reduceMotion: boolean
}) {
  const animate = inView && !reduceMotion
  const count = useCountUp(end, animate, {
    durationMs: end >= 1000 ? 2200 : 1600,
    delayMs,
  })
  const n = reduceMotion && inView ? end : count
  return (
    <div
      className={cn(
        "bg-[var(--navy)] px-5 py-7 text-center transition-colors",
        inView && "animate-in fade-in-0 zoom-in-95 duration-500",
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className={cn(numClass, "mb-1.5 max-[480px]:text-[1.35rem]")} aria-live={animate ? "polite" : undefined}>
        {n}
        <span className="text-[var(--green-bright)] not-italic">{accentSuffix}</span>
      </div>
      <div className="text-[11px] font-medium leading-normal text-white/50">
        <span className="mb-px block font-semibold tracking-[0.06em] text-white/70">{line1}</span>
        {line2}
      </div>
    </div>
  )
}

function StatCellK({
  line1,
  line2,
  delayMs,
  inView,
  reduceMotion,
}: {
  line1: string
  line2: string
  delayMs: number
  inView: boolean
  reduceMotion: boolean
}) {
  const animate = inView && !reduceMotion
  const v = useCountUpFloat(7.8, animate, { durationMs: 2200, delayMs })
  const display = reduceMotion && inView ? 7.8 : v
  return (
    <div
      className={cn(
        "bg-[var(--navy)] px-5 py-7 text-center transition-colors",
        inView && "animate-in fade-in-0 zoom-in-95 duration-500",
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className={cn(numClass, "mb-1.5 max-[480px]:text-[1.35rem]")} aria-live={animate ? "polite" : undefined}>
        {display.toFixed(1)}
        <span className="text-[var(--green-bright)] not-italic">K+</span>
      </div>
      <div className="text-[11px] font-medium leading-normal text-white/50">
        <span className="mb-px block font-semibold tracking-[0.06em] text-white/70">{line1}</span>
        {line2}
      </div>
    </div>
  )
}

function StatCellDollarZero({
  line1,
  line2,
  delayMs,
  inView,
}: {
  line1: string
  line2: string
  delayMs: number
  inView: boolean
}) {
  return (
    <div
      className={cn(
        "bg-[var(--navy)] px-5 py-7 text-center transition-colors",
        inView && "animate-in fade-in-0 zoom-in-95 duration-500",
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className={cn(numClass, "mb-1.5 max-[480px]:text-[1.35rem]")}>
        <span className="text-[var(--green-bright)] not-italic">$</span>0
      </div>
      <div className="text-[11px] font-medium leading-normal text-white/50">
        <span className="mb-px block font-semibold tracking-[0.06em] text-white/70">{line1}</span>
        {line2}
      </div>
    </div>
  )
}

function ApprovalStatsBar() {
  const reduceMotion = useReducedMotion()
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className="relative mb-8 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-gradient-to-r from-[var(--blue)] to-[var(--green-bright)]"
        aria-hidden
      />
      <StatCellInt
        end={35}
        accentSuffix="+"
        line1="Lenders working simultaneously."
        line2="No other program is close."
        delayMs={0}
        inView={inView}
        reduceMotion={reduceMotion}
      />
      <StatCellInt
        end={60}
        accentSuffix="s"
        line1="To the best available offer."
        line2="Automatic. Protected. Instant."
        delayMs={80}
        inView={inView}
        reduceMotion={reduceMotion}
      />
      <StatCellK
        line1="Practices"
        line2="across 350+ specialties with this advantage."
        delayMs={160}
        inView={inView}
        reduceMotion={reduceMotion}
      />
      <StatCellDollarZero
        line1="Merchant financing fees."
        line2="Ever. Your revenue stays yours."
        delayMs={240}
        inView={inView}
      />
    </div>
  )
}

export function ApprovalEngine() {
  return (
    <section
      className="hr-section hr-surface-muted"
      id="approval-engine"
      aria-labelledby="approval-engine-heading"
    >
      <div className="hr-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="hr-eyebrow">Patient Financing Technology</p>
          <h2 id="approval-engine-heading" className="hr-headline mb-4">
            35+ Chances to Say Yes.
            <br />
            <span className="text-[var(--green)]">Zero Credit Impact.</span>
          </h2>
          <p className="hr-lead mx-auto max-w-2xl">
            Most financing programs give your patient one lender. One decision. When that answer is no, the treatment
            plan is declined and the revenue is gone. HelloRates practices don&apos;t lose those patients. The{" "}
            <strong className="font-semibold text-[var(--navy)]">
              HelloRates Patient Approval Waterfall™ Technology
            </strong>{" "}
            works for your patient automatically, checking 35+ lenders at once and returning the best offer in 60
            seconds, on a single soft inquiry with no effect on their credit score.
          </p>
        </div>

        <ApprovalStatsBar />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)_minmax(0,0.95fr)]">
          <div className="flex max-md:order-none flex-col gap-3.5 md:order-2 lg:order-none">
            <div className="hr-card overflow-hidden shadow-sm">
              <div className="border-b border-[#FECACA] bg-[#FEF2F2] px-[18px] py-4">
                <div className="mb-2.5 flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#B91C1C]">
                  <X className="h-3 w-3 shrink-0 text-[var(--red)]" strokeWidth={2.5} aria-hidden />
                  Every Other Financing Program
                </div>
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2] text-[15px] font-black text-[var(--red)]">
                    1
                  </div>
                  <div className="text-[13px] font-bold leading-snug text-[var(--navy)]">
                    One lender. One decision. Treatment declined.
                  </div>
                </div>
                <p className="mb-2.5 pl-[46px] text-[13px] leading-relaxed text-[var(--text-mid)]">
                  If that lender says no, nothing is left to try. Your patient walks away from the treatment plan.
                </p>
                <div className="flex items-center gap-1.5 rounded-md bg-[#FEE2E2] px-3 py-1.5 text-[11px] font-bold text-[#B91C1C]">
                  <X className="h-3.5 w-3.5 shrink-0 text-[var(--red)]" strokeWidth={2.5} aria-hidden />
                  One no ends the conversation.
                </div>
              </div>
              <div className="bg-[#F0FDF4] px-[18px] py-4">
                <div className="mb-2.5 flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#15803D]">
                  <Check className="h-3 w-3 shrink-0 text-[var(--green)]" strokeWidth={2.5} aria-hidden />
                  HelloRates Patient Approval Waterfall™ Technology
                </div>
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[11px] font-black text-[var(--green)]">
                    35+
                  </div>
                  <div className="text-[13px] font-bold leading-snug text-[var(--navy)]">
                    35+ lenders. All working for your patient at once.
                  </div>
                </div>
                <p className="mb-2.5 pl-[46px] text-[13px] leading-relaxed text-[var(--text-mid)]">
                  One soft inquiry. Every lender evaluated simultaneously. Best offer returned in 60 seconds. Credit fully
                  protected.
                </p>
                <div className="flex items-center gap-1.5 rounded-md bg-[#DCFCE7] px-3 py-1.5 text-[11px] font-bold text-[var(--green)]">
                  <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} aria-hidden />
                  35+ chances. Zero credit impact. Zero merchant financing fees.
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] p-5">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--blue)] to-[var(--green-bright)]"
                aria-hidden
              />
              <div className="mb-2.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[var(--blue)]">
                🏆 HelloRates Exclusive
              </div>
              <p className="mb-3.5 text-sm font-bold leading-snug text-white">
                The advantage your competitors{" "}
                <span className="text-[rgba(252,165,165,0.85)]">cannot offer.</span>
              </p>
              <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-white/70">
                <li className="flex gap-2">
                  <span className="mt-px shrink-0 text-[11px] font-extrabold text-[var(--green-bright)]">✓</span>
                  <span>
                    <strong className="font-semibold text-white">One soft inquiry.</strong> Fully protected credit.
                    Always.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-px shrink-0 text-[11px] font-extrabold text-[var(--green-bright)]">✓</span>
                  <span>
                    <strong className="font-semibold text-white">7,800+ practices</strong> across 350+ specialties rely
                    on this every day.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-px shrink-0 text-[11px] font-extrabold text-[var(--green-bright)]">✓</span>
                  <span>
                    <strong className="font-semibold text-white">No other program</strong> gives your patient 35+
                    chances on a single protected inquiry.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex max-md:order-none flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_1px_2px_rgba(13,27,79,0.04),0_12px_40px_-12px_rgba(13,27,79,0.12)] md:order-1 md:col-span-2 lg:order-none lg:col-span-1">
            <div className="border-b border-white/10 bg-[var(--navy)] px-[22px] py-[18px]">
              <div className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/40">
                HelloRates Exclusive Technology
              </div>
              <p className="text-[13px] font-bold leading-snug text-white">
                <span className="text-[var(--green-bright)]">Patient Approval Waterfall™ Technology</span> working for
                your patient
              </p>
            </div>

            <div className="flex-1">
              {[
                {
                  badge: "Protected",
                  badgeClass: "bg-[#DCFCE7] text-[#15803D]",
                  fd: "fd-1",
                  circle: "1",
                  title: "Patient submits once",
                  body: "60-second application. One soft inquiry. Credit score fully protected throughout.",
                },
                {
                  badge: "Automatic",
                  badgeClass: "bg-[var(--bg-blue)] text-[var(--blue-dark)]",
                  fd: "fd-2",
                  circle: "AW™",
                  title: "Patient Approval Waterfall™ Technology goes to work",
                  body: "35+ lenders evaluate their profile simultaneously and automatically. No extra forms. No waiting.",
                },
                {
                  badge: "Best offer",
                  badgeClass: "bg-[#FEF9C3] text-[#854D0E]",
                  fd: "fd-3",
                  circle: <Zap className="h-3.5 w-3.5 text-[var(--blue)]" strokeWidth={2.5} aria-hidden />,
                  title: "Best available offer returned in 60 seconds",
                  body: "Strongest rate, term and amount across all 35+ lenders, identified and returned instantly.",
                },
                {
                  badge: "Plan accepted",
                  badgeClass: "border border-[#BBF7D0] bg-[#F0FDF4] text-[var(--green)]",
                  fd: "fd-4",
                  circle: <Check className="h-3.5 w-3.5 text-[var(--green)]" strokeWidth={2.5} aria-hidden />,
                  title: "Your patient says yes. Treatment plan accepted.",
                  body: "Up to 3 tailored offers. Full control. No pressure. Their credit is completely unaffected.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className={cn(
                    "relative flex items-start gap-[13px] border-b border-[#F1F5F9] px-5 py-4 last:border-b-0",
                    "after:pointer-events-none after:absolute after:top-12 after:left-8 after:block after:h-[calc(100%-24px)] after:w-0.5 after:bg-gradient-to-b after:from-[var(--border)] after:to-transparent last:after:hidden",
                  )}
                >
                  <div
                    className={cn(
                      "relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-extrabold",
                      step.fd === "fd-1" && "border-[var(--blue)]/35 bg-[var(--bg-blue)] text-[var(--blue)]",
                      step.fd === "fd-2" &&
                        "border-white/25 bg-[var(--navy)] text-[8px] font-extrabold leading-tight text-white",
                      step.fd === "fd-3" && "border-[var(--blue)]/35 bg-[var(--bg-blue)]",
                      step.fd === "fd-4" && "border-[#BBF7D0] bg-[#DCFCE7]",
                    )}
                  >
                    {step.circle}
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="mb-0.5 text-sm font-bold leading-snug text-[var(--navy)]">{step.title}</div>
                    <p className="text-[13px] leading-relaxed text-[var(--text-mid)]">{step.body}</p>
                  </div>
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 self-start whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold",
                      step.badgeClass,
                    )}
                  >
                    {step.badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-[#BBF7D0] bg-[#F0FDF4] px-5 py-3">
              <Shield className="h-3.5 w-3.5 shrink-0 text-[var(--green)]" strokeWidth={2} aria-hidden />
              <p className="text-[13px] font-bold leading-snug text-[#15803D]">
                One soft inquiry. Fully protected credit. Every time.{" "}
                <span className="font-normal text-[var(--text-mid)]">No other program works this way.</span>
              </p>
            </div>
          </div>

          <div className="max-md:order-none animate-in fade-in-0 slide-in-from-bottom-4 duration-500 md:order-3 [animation-delay:140ms] lg:order-none lg:col-span-1">
            {(
              [
                {
                  title: "Accept treatment plans your competitors already wrote off.",
                  body: (
                    <>
                      Their declined patient is your opportunity. When one lender says no,{" "}
                      <strong className="font-semibold text-[var(--navy)]">34 more are still working</strong> for your
                      patient.
                    </>
                  ),
                },
                {
                  title: "Options, not declined applications.",
                  body: (
                    <>
                      Your patient chooses from{" "}
                      <strong className="font-semibold text-[var(--navy)]">up to 3 tailored offers,</strong> each matched
                      to their credit profile for best rate and payment.
                    </>
                  ),
                },
                {
                  title: "Zero merchant financing fees. Zero catches.",
                  body: (
                    <>
                      <strong className="font-semibold text-[var(--navy)]">35+ chances to say yes</strong> and your
                      practice keeps 100% of its revenue. No other program offers both.
                    </>
                  ),
                },
              ] as const
            ).map((item, i) => (
              <div key={item.title}>
                <div
                  className={cn(
                    "group relative ml-2 border-l-2 border-[var(--border)] py-5 pl-5 transition-colors hover:border-[var(--green-bright)] max-lg:ml-0 max-lg:border-l-0 max-lg:pl-0",
                    i === 0 && "pt-1",
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-[5px] h-2 w-2 rounded-full bg-[var(--border)] transition-colors group-hover:bg-[var(--green-bright)] max-lg:hidden",
                      i === 0 ? "top-1.5" : "top-[22px]",
                    )}
                    aria-hidden
                  />
                  <h3 className="mb-1.5 text-base font-bold leading-snug text-[var(--navy)]">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[var(--text-mid)]">{item.body}</p>
                </div>
                {i < 2 ? <div className="ml-7 h-px bg-[var(--border)] max-lg:ml-0" aria-hidden /> : null}
              </div>
            ))}

            <div className="relative mt-6 ml-2 overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)] p-5 max-lg:ml-0">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--blue)] to-[var(--green-bright)]"
                aria-hidden
              />
              <h3 className="mb-1.5 text-base font-bold leading-snug text-white">
                Ready to accept treatment plans your competitors{" "}
                <span className="text-[var(--green-bright)]">can&apos;t touch?</span>
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-white/60">
                Join 7,800+ practices already using the Patient Approval Waterfall™ Technology.
              </p>
              <Link
                href="#pricing"
                className="hr-btn-primary inline-flex w-full justify-center py-3.5 text-[15px] font-semibold"
              >
                Start Offering HelloRates Patient Financing
              </Link>
              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-3">
                {["No setup fee", "No merchant financing fees", "Live in 24 hours"].map((label) => (
                  <span key={label} className="flex items-center gap-1 text-[10px] font-medium text-white/40">
                    <Check className="h-3 w-3 shrink-0 text-[var(--green-bright)]" strokeWidth={2.5} aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
