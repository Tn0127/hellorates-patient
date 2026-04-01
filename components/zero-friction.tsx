"use client"

import { XCircle, Check } from "lucide-react"

export function ZeroFriction() {
  const whatYouNeverDo = [
    {
      title: "No paperwork. Ever.",
      desc: "The homeowner is the borrower. There is no contractor-side paperwork, no forms, no documents to chase. You hand a card or share a link and walk away.",
    },
    {
      title: "No switching lenders. No training required.",
      desc: "Keep your primary lender exactly as-is. You don't need to understand loan terms, rates, or underwriting. HelloRates handles everything. You just close the job.",
    },
    {
      title: "No customer handholding or follow-up.",
      desc: "Your customer applies privately on their phone. You get a notification when they're approved. No calls, no chasing, no explaining loan terms. You collect payment.",
    },
    {
      title: "No fees deducted from your payment. Ever.",
      desc: "Other programs charge 5–15% per funded deal. HelloRates charges $0. You invoice for the full amount, you receive the full amount. HelloRates earns on loan origination, not from you.",
    },
  ]

  const paymentSteps = [
    "Customer applies and sees up to 3 approval options. They choose the best one for their situation.",
    "The loan funds direct to the customer within 24–48 hours of loan confirmation.",
    <>
      <strong className="text-[var(--navy)]">Customer pays you in full on your terms.</strong> Before the job starts
      or however you choose to structure it.
    </>,
  ]

  return (
    <section className="hr-section hr-surface-muted">
      <div className="hr-container">
        <p className="hr-eyebrow">Zero Friction Adoption</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Two Minutes to Add It.
          <br />
          <span className="text-[var(--green)]">Go Live the Same Day.</span>
        </h2>
        <p className="hr-lead mb-10 max-w-2xl">
          Already using a financing program? HelloRates runs alongside it and covers everything your current program
          cannot: declines, partial approvals, and dealer fees. If your program can&apos;t do all three, it&apos;s
          incomplete. HelloRates makes it whole. No switching. No training. No changes to how you work.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: What you never have to do */}
          <div className="flex flex-col gap-4">
            {whatYouNeverDo.map((item, i) => (
              <div key={i} className="hr-card flex items-start gap-4 p-5 md:p-6">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-[var(--red)]" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[var(--navy)] mb-1">{item.title}</div>
                  <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Payment card */}
          <div className="flex flex-col gap-5">
            <div className="hr-card border-2 border-[var(--blue)]/35 p-7 text-center shadow-md md:p-8">
              <div className="text-xs font-semibold text-[var(--navy)] tracking-wider mb-2">You get paid</div>
              <div className="text-5xl font-bold text-[var(--green)] tracking-tight leading-none mb-1">In Cash</div>
              <div className="text-base font-semibold text-[var(--navy)] mb-4">
                Upfront within 24–48 hours
              </div>
              <div className="h-px bg-[var(--border)] mb-4" />
              <div className="flex flex-col gap-2.5">
                {paymentSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-left">
                    <div className="w-7 h-7 rounded-full bg-[var(--green)] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white mt-0.5">
                      {i + 1}
                    </div>
                    <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
