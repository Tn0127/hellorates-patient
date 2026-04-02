"use client";

import { CreditCard, Check } from "lucide-react";

export function CommercialCallout() {
  const bullets = [
    "Medical and dental equipment financing",
    "Practice acquisition and expansion loans",
    "Working capital for growing practices",
  ] as const;

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-light)] py-9 md:py-10">
      <div className="hr-container">
        <div className="hr-card grid grid-cols-1 items-center gap-8 border border-[var(--border-blue-soft)] p-8 md:grid-cols-[1fr_auto] md:gap-10 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[var(--border)] bg-white">
              <CreditCard className="h-6 w-6 text-[var(--navy)]" strokeWidth={2} />
            </div>
            <div>
              <div className="mb-1.5 text-[11px] font-bold tracking-wide text-[var(--blue)]">
                Practice Growth Financing
              </div>
              <div className="mb-2 text-xl font-bold tracking-tight text-[var(--navy)]">
                Financing to Grow Your Practice. Not Just Your Patient Base.
              </div>
              <div className="max-w-[560px] text-sm leading-relaxed text-[var(--text-mid)]">
                HelloRates also provides dedicated practice financing for medical, dental, chiropractic and wellness
                practices — including equipment financing, practice expansion, acquisition loans, and working capital.
                Our team of practice finance specialists works hands-on through closing. Available separately and on
                request — not included in your patient financing subscription.
              </div>
              <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2">
                {bullets.map((text) => (
                  <span key={text} className="inline-flex items-center gap-1.5 text-xs text-[var(--text-mid)]">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[var(--green)]" strokeWidth={2.5} />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center md:shrink-0">
            <div className="text-[42px] font-bold leading-none tracking-tight text-[var(--navy)]">45+</div>
            <div className="mt-1 text-[11px] leading-snug text-[var(--text-light)]">
              Practice loan
              <br />
              products
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
