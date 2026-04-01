"use client"

import { X, DollarSign, ArrowRight } from "lucide-react"

export function UrgencySection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="hr-section">
      <div className="hr-container text-center">
        <p className="hr-eyebrow">Waiting Is Costly</p>
        <h2 className="hr-headline mx-auto mb-4 max-w-3xl">
          Every Week You Wait,
          <br />
          <span className="text-[var(--red)]">30% of Your Market Walks.</span>
        </h2>
        <p className="hr-lead mx-auto mb-6 max-w-2xl">
          Customers below 650 FICO don&apos;t disappear. They find a competitor with a better financing program.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className="hr-card border-t-[3px] border-t-[var(--red)] p-6 text-center">
            <div className="mb-3">
              <X className="w-8 h-8 text-[#e53935] mx-auto" strokeWidth={2.5} />
            </div>
            <div className="text-base font-bold text-[var(--navy)] mb-2">Lost approvals</div>
            <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">
              At 2 declines per month on a $12,000 average job that is{" "}
              <strong className="text-[var(--navy)]">$24,000 in lost revenue every 30 days</strong> handed directly to
              your competitor.
            </div>
          </div>

          <div className="hr-card border-t-[3px] border-t-[#e65100] p-6 text-center">
            <div className="mb-3">
              <DollarSign className="w-8 h-8 text-[#e65100] mx-auto" strokeWidth={2.5} />
            </div>
            <div className="text-base font-bold text-[var(--navy)] mb-2">Shrinking profit</div>
            <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">
              At 8% dealer fees on 5 jobs a month at $12,000 each that is{" "}
              <strong className="text-[var(--navy)]">$4,800 deducted from your proceeds every single month.</strong>
            </div>
          </div>

          <div className="hr-card border-t-[3px] border-t-[var(--navy)] p-6 text-center">
            <div className="mb-3">
              <ArrowRight className="w-8 h-8 text-[var(--navy)] mx-auto" strokeWidth={2.5} />
            </div>
            <div className="text-base font-bold text-[var(--navy)] mb-2">
              Customers choosing competitors
            </div>
            <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">
              Customers below 650 FICO do not disappear. They call someone who can say yes.{" "}
              <strong className="text-[var(--navy)]">
                Every week without HelloRates is a week your competitor grows and you don&apos;t.
              </strong>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2.5">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary">
            Get Started Now
          </button>
          <div className="text-xs text-[var(--text-mid)]">
            No merchant or financing fees · 500 FICO approvals · No recourse · Live in minutes
          </div>
        </div>
      </div>
    </section>
  )
}
