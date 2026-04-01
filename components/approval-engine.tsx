"use client"

import { Clock, Activity, X, Check } from "lucide-react"

export function ApprovalEngine() {
  return (
    <section
      className="hr-section hr-surface-muted"
      id="approval-engine"
      aria-labelledby="approval-engine-heading"
    >
      <div className="hr-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Copy */}
          <div>
            <p className="hr-eyebrow">Approval Engine Technology</p>
            <h2 id="approval-engine-heading" className="hr-headline mb-5">
              Single Loan Paths Are
              <br />
              Rigid and Restrictive.
              <br />
              <span className="text-[var(--green)]">Ours Are Not.</span>
            </h2>
            <p className="hr-lead mb-4">
              Traditional financing gives your customer one shot. One lender. One set of guidelines. One decision. If
              that lender says no, for any reason, the deal is dead.
            </p>
            <p className="hr-lead mb-8">
              HelloRates runs each 60-second application through our approval engine against 35+ lender guidelines
              simultaneously in real time. The engine optimizes for the best rate, term, loan amount and highest
              approval probability for each unique customer profile. Every time.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-blue)] shadow-sm">
                  <Clock className="h-[18px] w-[18px] text-[var(--blue)]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--navy)] mb-0.5">Real-time. Not batch.</div>
                  <div className="text-[13px] text-[var(--text-mid)] leading-snug">
                    Results in 60 seconds. Not hours. Not callbacks. Not a second form.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0FDF4] shadow-sm">
                  <Activity className="h-[18px] w-[18px] text-[var(--green)]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--navy)] mb-0.5">Optimized for each customer.</div>
                  <div className="text-[13px] text-[var(--text-mid)] leading-snug">
                    Rate, term, payment, and loan amount are all optimized simultaneously. Your customer sees up to 3
                    options and chooses the best fit for their situation.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEF2F2] shadow-sm">
                  <X className="h-[18px] w-[18px] text-[var(--red)]" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--navy)] mb-0.5">Zero credit impact. Always.</div>
                  <div className="text-[13px] text-[var(--text-mid)] leading-snug">
                    One soft pull runs against all 35+ guidelines. No hard inquiry until the customer accepts an offer.
                    No harm to their score at the application stage.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Comparison */}
          <div className="flex flex-col gap-5">
            {/* Traditional */}
            <div className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-6 shadow-sm">
              <div className="text-[11px] font-bold text-[#B91C1C] tracking-wide mb-3">
                Traditional Single-Lender Program
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center flex-shrink-0 text-xl font-bold text-[var(--red)]">
                  1
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[var(--navy)]">One lender. One decision.</div>
                  <div className="text-[13px] text-[var(--text-mid)]">
                    If they say no, the deal is dead. No alternatives. No second chance.
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-3 px-3 py-2 bg-[#FEE2E2] rounded-lg">
                <X className="w-3.5 h-3.5 text-[#e53935]" strokeWidth={2.5} />
                <span className="text-xs font-semibold text-[#B91C1C]">Rigid. Inflexible. One size fits no one.</span>
              </div>
            </div>

            {/* HelloRates */}
            <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-6 shadow-sm ring-1 ring-[var(--green)]/10">
              <div className="text-[11px] font-bold text-[#15803D] tracking-wide mb-3">HelloRates Approval Engine</div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center flex-shrink-0 text-xl font-bold text-[var(--green)]">
                  35+
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[var(--navy)]">35+ lenders. One application.</div>
                  <div className="text-[13px] text-[var(--text-mid)]">
                    Every guideline checked simultaneously. Best rate, term and amount returned in 60 seconds.
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-2.5 px-3 py-2 bg-[#DCFCE7] rounded-lg">
                <Check className="w-3.5 h-3.5 text-[var(--green)]" strokeWidth={2.5} />
                <span className="text-xs font-semibold text-[#15803D]">Flexible. Optimized. Built for approvals.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
