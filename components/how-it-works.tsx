"use client"

import { Shield, Check } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Share Your Link or Hand Your Card",
      desc: (
        <>
          Text, email, or hand your QR card. Your customer applies from their phone.{" "}
          <strong className="text-[var(--navy)]">You&apos;re done in 30 seconds.</strong>
        </>
      ),
    },
    {
      num: 2,
      title: "60-Second Application, Zero Credit Impact",
      desc: (
        <>
          One soft pull. <strong className="text-[var(--navy)]">No harm to their score, ever.</strong> Before seeing
          any results they agree to lock the funds to your company by name. Legally binding from the first click.
        </>
      ),
    },
    {
      num: 3,
      title: "35+ Lenders Checked Instantly",
      desc: (
        <>
          Same soft pull, <strong className="text-[var(--navy)]">no additional credit impact.</strong> They choose from
          approval options and complete two simple steps: proof of identity and bank details. About 2 minutes total.
        </>
      ),
    },
    {
      num: 4,
      title: "Funded in 24–48 Hours. You Collect in Full.",
      desc: (
        <>
          Funds hit their account within 24-48 hours of submitting their details.{" "}
          <strong className="text-[var(--navy)]">They pay you immediately.</strong> Cash or check. Full invoice amount.
          No deductions.
        </>
      ),
    },
  ]

  const protectionItems = [
    {
      title: "Funds locked to your company before they see a rate",
      desc: "A condition of the application, enforceable from the first click. Not fine print.",
    },
    {
      title: "No completion certificate. Ever.",
      desc: "You're paid on completion. No lender inspection, no sign-off, no holdback.",
    },
    {
      title: "Zero recourse if a customer defaults",
      desc: "That's between them and the lender. Your payment is never clawed back.",
    },
    {
      title: "No holdbacks. No lender inspections.",
      desc: "Paid at project completion. No sign-off required from anyone.",
    },
    {
      title: "Primary program or powerful backup. Your call.",
      desc: "The protection is identical either way. Add it in 2 minutes. Go live same day.",
    },
  ]

  return (
    <section id="how-it-works" className="hr-section">
      <div className="hr-container">
        <p className="hr-eyebrow">How It Works</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Four Steps. Zero Paperwork.
          <br />
          <span className="text-[var(--green)]">You Get Paid in Cash Upfront.</span>
        </h2>
        <p className="hr-lead mb-6 max-w-2xl">
          Your customer applies. You get paid in full within 24–48 hours of your customer confirming the loan.
        </p>
        <div className="mb-10 max-w-[680px] rounded-xl border border-[var(--blue)]/20 border-l-4 border-l-[var(--blue)] bg-[var(--bg-blue)] p-4 text-sm font-semibold leading-relaxed text-[var(--navy)] shadow-sm">
          The funds are legally locked to your company by name before your customer sees a single rate. A condition of
          the application, enforceable from the first click.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Steps */}
          <div>
            <div className="text-[11px] font-bold text-[var(--blue)] tracking-wide mb-5 uppercase">
              What Your Customer Experiences
            </div>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5 pb-8 relative">
                  {i < steps.length - 1 && (
                    <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-[var(--border)]" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-[var(--navy)] text-white text-lg font-bold flex items-center justify-center flex-shrink-0 z-10 border-3 border-[var(--blue)]">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <div className="text-[15px] font-bold text-[var(--navy)] mb-1.5">{step.title}</div>
                    <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Protection Card */}
          <div className="hr-card border-2 border-[var(--navy)] p-7 md:p-8">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-9 h-9 bg-[var(--navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="text-base font-bold text-[var(--navy)]">Your Payment & Proceeds Are Fully Protected</div>
            </div>
            <div className="text-xs text-[var(--text-mid)] mb-5">
              Structurally different from every other program. Here is what that means for you.
            </div>
            {protectionItems.map((item, i) => (
              <div key={i} className="flex gap-3 py-3 border-b border-[var(--border)] last:border-b-0">
                <div className="text-[var(--green-bright)] font-bold text-[15px] flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[var(--navy)] mb-0.5">{item.title}</div>
                  <div className="text-[11px] text-[var(--text-mid)] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
