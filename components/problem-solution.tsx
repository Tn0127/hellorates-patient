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
      problemTitle: "Credit Declines",
      problemItems: [
        "Traditional lenders approve 650–850 FICO only",
        "Customers below 650 FICO get declined",
        "Deal dies even after the customer said yes",
        "30% of your market goes unfunded",
      ],
      problemSummary: "Their FICO range: 650–850 only. Below 650. Declined.",
      fixTitle: "HelloRates Approves 500–850 FICO",
      fixItems: [
        "35+ lender guidelines checked simultaneously",
        "One soft pull. Zero harm to customer's credit",
        "Approvals down to 500 FICO",
        "Covers the 650–500 band most lenders won't touch",
      ],
      fixSummary: "Our FICO range: 500–850. That is 30% more of your market.",
    },
    {
      number: 2,
      problemTitle: "Partial Approvals",
      problemItems: [
        "Lender approves $9k on a $14k job",
        "The $5k gap kills the sale and the commission",
        "Customer loses trust. Relationship damaged.",
        "Job lost even though financing was offered",
      ],
      problemSummary: "$9k approved. $5k gap. Deal dead. Commission gone.",
      fixTitle: "HelloRates Funds the Gap",
      fixItems: [
        "We fund the $5k gap your lender left short",
        "The job stays on track. No out-of-pocket gap.",
        "Customer gets fully financed",
        "You collect the full $14k. Commission saved.",
      ],
      fixSummary: "$9k + $5k funded = $14k. Full job. Full pay. Commission saved.",
    },
    {
      number: 3,
      problemTitle: "Dealer & Loan Fees",
      problemItems: [
        "5–15% dealer fee deducted from every funded deal",
        "$1,200 gone on a $15k job at 8%",
        "Taken before you see a cent",
        "Compounds on every job, every month",
      ],
      problemSummary: "$15k job. 8% fee = $1,200 deducted. You receive $13,800.",
      fixTitle: "Zero Per-Deal Fees. Ever.",
      fixItems: [
        "Zero dealer, loan or discount fees on any funded deal",
        "Flat $67/mo. Covers unlimited applications.",
        "You get paid in cash, in full, upfront",
        "No deductions. No hoops. Full invoice amount.",
      ],
      fixSummary: "$15k job. Zero fees. You receive $15,000. In cash. In full. Upfront.",
    },
  ]

  return (
    <section className="hr-section">
      <div className="hr-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="hr-eyebrow">Three Problems. Three Fixes.</p>
          <h2 className="hr-headline mb-4">
            Traditional Contractor Financing
            <br />
            Has 3 Costly Problems.
            <br />
            <span className="text-[var(--green)]">HelloRates Solves All Three.</span>
          </h2>
          <p className="hr-lead mx-auto">
            Credit declines, partial approval gaps, and 5–15% in dealer fees are costing contractors revenue, margins,
            and reputation on every job. Here is exactly what causes each one and precisely how HelloRates eliminates
            it.
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
            <div className="text-[34px] font-bold text-[var(--navy)] tracking-tight leading-none">7,800+</div>
            <div className="text-sm font-bold text-[var(--navy)] leading-snug">
              Contractors Already Closing More Deals
            </div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Using HelloRates as their primary program or most powerful backup.
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
            <div className="text-sm font-bold text-[var(--navy)] leading-snug">In Dealer Fees. On Every Funded Job.</div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Zero dealer, loan or merchant fees. You keep 100% of every dollar you earn.
            </div>
          </div>

          <div className="hr-card flex flex-col gap-2.5 border-[#93C5FD] p-6 ring-1 ring-[var(--blue)]/20">
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
              Minimum FICO. Reach 30% More Of Your Market.
            </div>
            <div className="text-xs text-[var(--text-mid)] leading-snug">
              Most programs stop at 650. HelloRates covers the full 500–650 band your lender won&apos;t touch.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button type="button" className="hr-btn-primary px-10 py-4 text-base">
            Get Started Now
          </button>
          <div className="text-xs text-[var(--text-mid)] mt-2.5">
            Flat $67/mo. Zero dealer fees. 60-day guarantee.
          </div>
          <div className="text-xs text-[var(--text-mid)] mt-1">No contract. Cancel anytime. Live the same day.</div>
        </div>
      </div>
    </section>
  )
}
