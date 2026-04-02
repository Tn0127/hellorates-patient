"use client"

import { X, Check } from "lucide-react"

interface ProblemCardProps {
  number: number
  problemTitle: string
  problemItems: string[]
  problemSummary: string
  fixTitle: string
  fixItems: string[]
  fixSummary: string
}

function ProblemCard({
  number,
  problemTitle,
  problemItems,
  problemSummary,
  fixTitle,
  fixItems,
  fixSummary,
}: ProblemCardProps) {
  return (
    <div className="hr-card overflow-hidden ring-1 ring-[var(--navy)]/[0.04]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Problem Side */}
        <div className="bg-[#FEF2F2] p-7 border-b md:border-b-0 md:border-r border-[#FECACA]">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-full bg-[var(--red)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              {number}
            </div>
            <div className="text-[10px] font-bold text-[#B91C1C] tracking-wide">The Problem</div>
          </div>
          <div className="text-[19px] font-bold text-[var(--navy)] mb-3.5">{problemTitle}</div>
          <div className="flex flex-col gap-2">
            {problemItems.map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <X className="w-3.5 h-3.5 text-[var(--red)] font-bold flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px] text-[#6B7280]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-3.5 p-2.5 bg-[#FEE2E2] rounded-lg text-xs font-bold text-[#B91C1C]">{problemSummary}</div>
        </div>

        {/* Fix Side */}
        <div className="bg-[#F0FDF4] p-7">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-full bg-[var(--green)] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
              ✓
            </div>
            <div className="text-[10px] font-bold text-[#15803D] tracking-wide">The Fix</div>
          </div>
          <div className="text-[19px] font-bold text-[var(--navy)] mb-3.5">{fixTitle}</div>
          <div className="flex flex-col gap-2">
            {fixItems.map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <Check className="w-3.5 h-3.5 text-[var(--green)] font-bold flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[13px] text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-3.5 p-2.5 bg-[#DCFCE7] rounded-lg text-xs font-bold text-[#15803D]">{fixSummary}</div>
        </div>
      </div>
    </div>
  )
}

export function ProblemSolution() {
  const problems = [
    {
      number: 1,
      problemTitle: "Patient Credit Declines",
      problemItems: [
        "Most financing programs approve 650–850 FICO only",
        "Patients below 650 FICO get declined for care",
        "Treatment plan dies even after the patient said yes",
        "30% of your patients go untreated or seek care elsewhere",
      ],
      problemSummary: "Their FICO range: 650–850 only. Below 650. Declined.",
      fixTitle: "HelloRates Approves 500–850 FICO",
      fixItems: [
        "35+ lender guidelines checked simultaneously",
        "One soft pull. Zero harm to patient's credit",
        "Approvals down to 500 FICO",
        "Covers the 650–500 band most programs won't touch",
      ],
      fixSummary: "Our FICO range: 500–850. Treat more patients, treat more cases.",
    },
    {
      number: 2,
      problemTitle: "Partial Treatment Plan Approvals",
      problemItems: [
        "Program approves $6k on a $10k treatment plan",
        "The $4k gap means the patient accepts less care or leaves",
        "Patient loses confidence. Relationship and referrals at risk.",
        "Treatment deferred even though financing was offered",
      ],
      problemSummary: "$6k approved. $4k gap. Patient undertreated. Revenue lost.",
      fixTitle: "HelloRates Funds the Full Treatment Plan",
      fixItems: [
        "We fund the gap your primary program left short",
        "The full treatment plan stays on track. No out-of-pocket gap for the patient.",
        "Patient gets fully financed for the complete care they need",
        "You collect in full. Patient gets the best outcome.",
      ],
      fixSummary: "$6k + $4k funded = $10k. Full treatment plan. Full payment. Patient retained.",
    },
    {
      number: 3,
      problemTitle: "Per-Loan Merchant Financing Fees",
      problemItems: [
        "5–15% merchant financing fee deducted from every funded treatment",
        "$800 gone on a $10k treatment plan at 8%",
        "Taken before your practice sees a cent",
        "Compounds on every treatment, every month",
      ],
      problemSummary: "$10k treatment. 8% fee = $800 deducted. You receive $9,200.",
      fixTitle: "Zero Merchant Financing Fees. Ever.",
      fixItems: [
        "Zero processing, loan or discount fees on any funded treatment",
        "Flat $67/mo. Covers unlimited patient applications.",
        "Your practice gets paid in full, upfront",
        "No deductions. No holdbacks. Full treatment amount.",
      ],
      fixSummary: "$10k treatment. Zero fees. Your practice receives $10,000. In full. Upfront.",
    },
  ]

  return (
    <section className="hr-section">
      <div className="hr-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="hr-eyebrow">Three Problems. Three Fixes.</p>
          <h2 className="hr-headline mb-4">
            Traditional Patient Financing Programs
            <br />
            Have 3 Costly Problems.
            <br />
            <span className="text-[var(--green)]">HelloRates Solves All Three.</span>
          </h2>
          <p className="hr-lead mx-auto">
            Credit declines, partial treatment plan funding gaps, and per-loan merchant financing fees are costing
            practices revenue, margins, and patient relationships on every case. Here is exactly what causes each one
            and precisely how HelloRates eliminates it.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.number} {...problem} />
          ))}
        </div>

        {/* Trust Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 border-t border-[var(--border)] pt-12 md:grid-cols-3 md:gap-6">
          <div className="hr-card flex flex-col gap-2.5 p-6">
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-blue)] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue)"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-[18px] h-[18px]"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className="text-[34px] font-bold text-[var(--navy)] tracking-tight leading-none">8,300+</div>
            <div className="text-sm font-bold text-[var(--navy)] leading-snug">
              Practices Already Growing Their Revenue
            </div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Using HelloRates as their primary patient financing program or most powerful backup.
            </div>
          </div>

          <div className="hr-card flex flex-col gap-2.5 border-[#BBF7D0] p-6 ring-1 ring-[var(--green)]/15">
            <div className="w-9 h-9 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green)"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-[18px] h-[18px]"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <div className="text-[34px] font-bold text-[var(--green)] tracking-tight leading-none">$0</div>
            <div className="text-sm font-bold text-[var(--navy)] leading-snug">
              In Merchant Financing Fees. On Every Funded Treatment.
            </div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Zero processing, loan or merchant financing fees. Your practice keeps 100% of every dollar billed.
            </div>
          </div>

          <div className="hr-card flex flex-col gap-2.5 border-[var(--blue)]/35 p-6 ring-1 ring-[var(--blue)]/15">
            <div className="w-9 h-9 rounded-lg bg-[var(--bg-blue)] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue)"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-[18px] h-[18px]"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="text-[34px] font-bold text-[var(--blue)] tracking-tight leading-none">500</div>
            <div className="text-sm font-bold text-[var(--navy)] leading-snug">
              Minimum FICO. Approve More Patients Than Any Other Program.
            </div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Most programs stop at 650. HelloRates covers the full 500–650 band and approves patients others turn away.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button type="button" className="hr-btn-primary px-10 py-4 text-base">
            Get Started Now
          </button>
          <div className="text-xs text-[var(--text-mid)] mt-2.5">
            Flat $67/mo. Zero merchant financing fees. 60-day guarantee.
          </div>
          <div className="text-xs text-[var(--text-mid)] mt-1">No contract. Cancel anytime. Live the same day.</div>
        </div>
      </div>
    </section>
  )
}
