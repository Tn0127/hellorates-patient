"use client"

import { Check, Calendar, Zap } from "lucide-react"

export function GetStartedSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="hr-section" id="get-started">
      <div className="hr-container text-center">
        <p className="hr-eyebrow">Getting Started</p>
        <h2 className="hr-headline mx-auto mb-4 max-w-3xl">
          Get Your First Approval Today.
          <br />
          <span className="text-[var(--green)]">
            Portal and Full System Activation. Live Same Day.
          </span>
        </h2>
        <p className="hr-lead mx-auto mb-14 max-w-2xl">
          Your portal and Full System Activation are live the same day you sign up. Start sending approvals today.
          Printed QR cards ship to your door within a week.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3 md:gap-5">
          {/* Step 1 */}
          <div className="hr-card relative border-[var(--blue)]/40 p-8 ring-1 ring-[var(--blue)]/15">
            <div className="w-9 h-9 rounded-full bg-[var(--navy)] text-white text-[15px] font-bold flex items-center justify-center mb-4">
              1
            </div>
            <div className="text-[17px] font-bold text-[var(--navy)] mb-2">Create your account</div>
            <div className="text-sm text-[var(--text-mid)] leading-relaxed">
              Enter your business name and basic info. No credit check, no review. Approved instantly in about two
              minutes.
            </div>
            <div className="mt-3.5 text-[11px] font-semibold text-[var(--text-light)] tracking-widest">~2 minutes</div>
          </div>

          {/* Step 2 */}
          <div className="hr-card relative border-2 border-[var(--green)] p-8 shadow-md ring-2 ring-[var(--green)]/15">
            <div className="absolute -top-2.5 left-5 text-[10px] font-bold bg-[var(--green-bright)] text-white px-3 py-0.5 rounded-full tracking-widest">
              You&apos;re live
            </div>
            <div className="w-9 h-9 rounded-full bg-[var(--green-bright)] text-white text-[15px] font-bold flex items-center justify-center mb-4">
              2
            </div>
            <div className="text-[17px] font-bold text-[var(--navy)] mb-2">Choose your plan &amp; go live</div>
            <div className="text-sm text-[var(--text-mid)] leading-relaxed">
              Pick monthly or annual, upload your logo, and our team activates your co-branded portal, video, and
              digital assets the same day.
            </div>
            <div className="mt-3.5 text-[11px] font-semibold text-[var(--green)] tracking-widest">
              Portal Live Same Day
            </div>
          </div>

          {/* Step 3 */}
          <div className="hr-card border-[var(--blue)]/40 p-8 ring-1 ring-[var(--blue)]/15">
            <div className="w-9 h-9 rounded-full bg-[var(--navy)] text-white text-[15px] font-bold flex items-center justify-center mb-4">
              3
            </div>
            <div className="text-[17px] font-bold text-[var(--navy)] mb-2">Your branded cards arrive</div>
            <div className="text-sm text-[var(--text-mid)] leading-relaxed">
              500 QR-enabled cards printed with your name and logo ship to your door. Hand one on a decline. Your
              customer applies in 60 seconds.
            </div>
            <div className="mt-3.5 text-[11px] font-semibold text-[var(--text-light)] tracking-widest">~1 week</div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mx-auto inline-flex max-w-[680px] items-center gap-4 rounded-xl border border-[#BFDBFE] bg-[var(--bg-blue)] px-6 py-5 shadow-sm md:px-8">
          <Zap className="w-[22px] h-[22px] text-[var(--blue)] flex-shrink-0" strokeWidth={2.5} />
          <div className="text-sm text-[var(--navy)] leading-snug text-left">
            <strong>Don&apos;t wait to get started.</strong> Your portal link goes live the same day you sign up. Text
            it to a customer tonight. Your co-branded QR cards ship within a week.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary px-10 py-4">
            Get Started Now
          </button>
          <div className="text-xs text-[var(--text-mid)] mt-3 flex items-center gap-4 justify-center flex-wrap">
            <span className="flex items-center gap-1.5">
              <Check className="w-3 h-3" strokeWidth={2.5} />
              No contract
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" strokeWidth={2.5} />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3 h-3" strokeWidth={2.5} />
              Live today
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
