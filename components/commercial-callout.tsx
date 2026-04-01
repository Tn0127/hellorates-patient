"use client"

import { Briefcase, Check } from "lucide-react"

export function CommercialCallout() {
  const bullets = [
    "45+ commercial loan products",
    "Equipment financing and working capital",
    "Unlimited partner access included",
  ] as const

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-light)] py-9 md:py-10">
      <div className="hr-container">
        <div className="hr-card grid grid-cols-1 items-center gap-8 border border-[#BFDBFE] p-8 md:grid-cols-[1fr_auto] md:gap-10 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[#BFDBFE] bg-white">
              <Briefcase className="h-6 w-6 text-[var(--navy)]" strokeWidth={2} />
            </div>
            <div>
              <div className="mb-1.5 text-[11px] font-bold tracking-wide text-[var(--blue)]">
                Commercial Financing. Built In.
              </div>
              <div className="mb-2 text-xl font-bold tracking-tight text-[var(--navy)]">
                Commercial Programs for Your Business and Your Customers.
              </div>
              <div className="max-w-[560px] text-sm leading-relaxed text-[var(--text-mid)]">
                HelloRates gives contractors with commercial divisions access to{" "}
                <strong className="text-[var(--navy)]">45+ commercial funding products</strong> for B2B transactions —
                with a dedicated expert team that works hands-on through closing. Our partners also receive unlimited
                access for their own companies, including equipment financing and working capital to grow their business.
              </div>
              <div className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2">
                {bullets.map((text) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--text-mid)]"
                  >
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
              Commercial
              <br />
              loan products
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
