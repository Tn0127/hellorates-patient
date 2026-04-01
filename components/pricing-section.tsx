"use client"

import { Check, Shield } from "lucide-react"

export function PricingSection() {
  const features = [
    "35+ lender approval paths",
    "Approvals down to 500 FICO",
    "Unlimited applications",
    "Zero dealer or merchant fees",
    "Partial approval gap funding",
    "Full system activation included",
  ]

  const bonusFeatures = [
    "0% Intro APR program up to 21 months",
    "Commercial financing program included",
    "60-day risk-free guarantee",
  ]

  const activationFeatures = [
    "500 co-branded QR cards",
    "Co-branded customer loan portal",
    "Print-ready co-branded flyers",
    'Branded "How It Works" video',
    "Website badge + financing link",
    "Social media asset pack",
  ]

  return (
    <section className="hr-section hr-surface-muted" id="pricing">
      <div className="hr-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="hr-eyebrow">Simple Flat-Rate Pricing</p>
          <h2 className="hr-headline mb-4">
            $67 a Month. Unlimited Approvals.
            <br />
            <span className="text-[var(--green)]">Zero Dealer Fees.</span>
          </h2>
          <p className="hr-lead mx-auto">
            No per-loan charges. No merchant fees. No contracts. Every plan includes full system activation, setup, and
            your field-ready sales tools to ensure you close financed deals from day one.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {/* Card 1: Activation */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-[var(--navy)] shadow-[0_16px_48px_-12px_rgba(13,27,79,0.35)] ring-1 ring-white/10">
            <div className="p-5 text-center border-b border-white/10">
              <div className="text-[10px] font-bold text-white/55 tracking-widest mb-1.5 uppercase">
                Included With Every Plan
              </div>
              <div className="text-[26px] font-bold text-white leading-tight mb-1.5">Get Fully Activated Today</div>
              <div className="text-[13px] font-semibold text-white/70 mb-1">Showroom ready. Field ready. Day one.</div>
              <div className="text-[11px] font-semibold text-white/45 tracking-wide">
                HelloRates Contractor Financing Program
              </div>
            </div>
            <div className="flex-1 p-3.5 px-6 flex flex-col gap-2">
              {activationFeatures.map((f) => (
                <div key={f} className="flex gap-2.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--green-bright)] flex-shrink-0" />
                  <div className="text-[13px] text-white/90 font-medium">{f}</div>
                </div>
              ))}
              <div className="mt-3 flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-lg p-3">
                <Shield className="w-[18px] h-[18px] text-[var(--green-bright)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div className="text-xs text-white/80 leading-snug">
                  <strong className="text-white block text-xs mb-0.5">
                    Everything above ships with both plans.
                  </strong>
                  No extra setup fees. No waiting. Your activation is complete the same day you sign up.
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/5 border-t border-white/10 text-center">
              <div className="text-[13px] font-bold text-[var(--green-bright)]">
                From zero to fully operational. Day one.
              </div>
              <div className="text-[11px] text-white/60 mt-0.5">$197 one-time · included with every plan</div>
            </div>
          </div>

          {/* Card 2: Monthly */}
          <div className="hr-card flex flex-col overflow-hidden">
            <div className="p-4 bg-[var(--navy)] text-center">
              <div className="text-xs font-bold text-white/80 tracking-widest mb-2 uppercase">
                Monthly
              </div>
              <div className="text-[52px] font-bold text-white tracking-tight leading-none mb-0.5">
                $97<span className="text-xl font-medium">/mo</span>
              </div>
              <div className="text-[13px] text-white/75 mt-1">+ $197 one-time activation</div>
            </div>
            <div className="p-4 px-6 flex-1 flex flex-col">
              <div className="flex flex-col gap-2 mb-5 flex-1">
                {features.map((f) => (
                  <div key={f} className="flex gap-2 text-[13px] text-[var(--text-mid)]">
                    <Check className="w-4 h-4 text-[var(--green)] flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
                <div className="h-px bg-[var(--border)] my-1" />
                {bonusFeatures.map((f) => (
                  <div key={f} className="flex gap-2 text-[13px] text-[var(--text-mid)]">
                    <Check className="w-4 h-4 text-[var(--green)] flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-auto w-full rounded-xl border-2 border-[var(--navy)] py-3.5 text-sm font-bold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2"
              >
                Get Started Monthly
              </button>
              <div className="text-[11px] text-[var(--text-light)] text-center mt-2">
                Includes full setup and onboarding
              </div>
            </div>
            <div className="p-3 bg-[var(--bg-light)] border-t border-[var(--border)] text-center">
              <div className="text-xs text-[var(--text-mid)]">
                + <strong className="text-[var(--navy)]">$3.23/day</strong> &bull;{" "}
                <strong className="text-[var(--navy)]">$1,361 first year</strong> (incl. activation)
              </div>
            </div>
          </div>

          {/* Card 3: Annual */}
          <div className="hr-card flex flex-col overflow-hidden border-2 border-[var(--green)] shadow-lg ring-2 ring-[var(--green)]/20">
            <div className="p-4 bg-[var(--green)] text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-xs font-bold text-white/90 tracking-widest uppercase">Annual</div>
                <div className="bg-white text-[var(--green)] text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wide whitespace-nowrap">
                  Best Value. Save $360/yr
                </div>
              </div>
              <div className="text-[52px] font-bold text-white tracking-tight leading-none mb-0.5">
                $67<span className="text-xl font-medium">/mo</span>
              </div>
              <div className="text-[13px] text-white/85 mt-1">+ $197 one-time activation</div>
            </div>
            <div className="p-4 px-6 flex-1 flex flex-col">
              <div className="flex flex-col gap-2 mb-5 flex-1">
                {features.map((f) => (
                  <div key={f} className="flex gap-2 text-[13px] text-[var(--text-mid)]">
                    <Check className="w-4 h-4 text-[var(--green)] flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
                <div className="h-px bg-[var(--border)] my-1" />
                {bonusFeatures.map((f) => (
                  <div key={f} className="flex gap-2 text-[13px] text-[var(--text-mid)]">
                    <Check className="w-4 h-4 text-[var(--green)] flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
              </div>
              <button type="button" className="hr-btn-primary mt-auto w-full py-3.5 text-sm font-bold">
                Get Started &amp; Save $360
              </button>
              <div className="text-[11px] text-[var(--text-light)] text-center mt-2">
                Includes full setup and onboarding
              </div>
            </div>
            <div className="p-3 bg-[#F0FDF4] border-t border-[#BBF7D0] text-center">
              <div className="text-xs text-[var(--text-mid)]">
                <strong className="text-[var(--green)]">$1,001 first year</strong> &bull; $804/yr after that
              </div>
            </div>
          </div>
        </div>

        {/* ROI + Guarantee Side by Side */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ROI */}
          <div className="hr-card p-7 md:p-8">
            <div className="text-lg font-bold text-[var(--navy)] mb-2 leading-snug">
              One Closed Job Pays for HelloRates for Years
            </div>
            <div className="text-sm text-[var(--text-mid)] leading-relaxed mb-4">
              Recover one deal or eliminate one dealer fee and your cost is covered.
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-[48px] font-bold text-[var(--green)] tracking-tight leading-none">10+</div>
              <div className="text-[15px] font-bold text-[var(--navy)]">Years of Value From One Deal</div>
            </div>
            <div className="text-xs text-[var(--text-light)]">
              Typical jobs: $12K to $18K | One funded deal = years of ROI
            </div>
          </div>

          {/* Guarantee */}
          <div className="hr-card border-2 border-[var(--green-bright)] p-7 ring-2 ring-[var(--green)]/15 md:p-8">
            <div className="text-[22px] font-bold text-[var(--navy)] mb-1.5">60-Day Risk Free Guarantee</div>
            <div className="text-sm text-[var(--text-mid)] mb-3.5">
              If you don&apos;t get approved deals, you don&apos;t pay.
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-[var(--bg-blue)] flex items-center justify-center flex-shrink-0">
                <Shield className="w-3.5 h-3.5 text-[var(--blue)]" strokeWidth={2.5} />
              </div>
              <div className="text-[13px] text-[var(--text-mid)] leading-relaxed">
                Submit 10 applications in your first 60 days. If none are approved, we refund everything. You keep the
                full system. No questions asked.{" "}
                <a href="#" className="text-[var(--blue)] font-semibold underline">
                  View full terms.
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="border-t border-[var(--border)] pt-10 text-center">
          <div className="text-lg font-medium text-[var(--navy)] md:text-xl">
            It&apos;s not just financing. <strong className="font-bold">It&apos;s how you close more deals.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
