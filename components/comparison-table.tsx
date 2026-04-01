"use client"

import { Fragment } from "react"
import { Check, X } from "lucide-react"

export function ComparisonTable() {
  const categories = [
    {
      name: "Cost & Fees",
      rows: [
        {
          feature: "Dealer and merchant fees",
          good: "Zero. $67/mo annual or $97/mo monthly, unlimited approvals",
          bad: "3–15% on every funded deal",
          highlight: true,
        },
        {
          feature: "Per-loan fees",
          good: "Never. you keep 100% of every job",
          bad: "Yes. off the top of every job",
          highlight: false,
        },
      ],
    },
    {
      name: "Approval & Eligibility",
      rows: [
        {
          feature: "Minimum credit score",
          good: "500 FICO minimum. 35+ lenders checked",
          bad: "650 FICO minimum",
          highlight: true,
        },
        {
          feature: "How approvals work",
          good: "35+ lenders checked at once. up to 35x more chances of approval",
          bad: "One lender. one set of rules",
          highlight: false,
        },
        {
          feature: "New contractor requirements",
          good: "Any contractor. Day one",
          bad: "Revenue minimums and time-in-business required",
          highlight: false,
        },
        {
          feature: "Partial approval gap funding",
          good: "HelloRates funds the gap. job made whole",
          bad: "Customer pays out of pocket or the job is lost",
          highlight: true,
        },
      ],
    },
    {
      name: "Process & Risk",
      rows: [
        {
          feature: "Funds locked to your company",
          good: "Yes. Legally bound before approval",
          bad: "No. Paid only after lender sign-off",
          highlight: false,
        },
        {
          feature: "Completion certificate required",
          good: "Never required",
          bad: "Required. Lender must approve your work",
          highlight: false,
        },
        {
          feature: "Credit impact",
          good: "Soft pull only. Zero credit impact",
          bad: "Hard pull. Harms customer's credit",
          highlight: false,
        },
        {
          feature: "Use with existing lender?",
          good: "Yes. Runs alongside any program",
          bad: "Usually requires switching programs",
          highlight: false,
        },
      ],
    },
  ]

  return (
    <section className="hr-section hr-surface-muted">
      <div className="hr-container">
        <p className="hr-eyebrow">The Full Picture</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          HelloRates vs. Traditional Financing.
          <br />
          <span className="text-[var(--green)]">There Is No Comparison.</span>
        </h2>
        <p className="hr-lead mb-8 max-w-2xl">
          Every contractor using a traditional program is paying fees and losing deals they don&apos;t have to lose.
          Here&apos;s the full picture.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border-2 border-[var(--navy)] shadow-[0_20px_50px_-20px_rgba(13,27,79,0.25)] ring-1 ring-[var(--navy)]/10">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-[3px] border-white/10">
                <th className="bg-[var(--navy)] text-white text-left text-[15px] font-bold p-4 px-6">Features</th>
                <th className="bg-[var(--navy)] text-white text-left text-[15px] font-bold p-4 px-6">
                  HelloRates Contractor Financing
                </th>
                <th className="bg-[var(--navy)] text-white text-left text-[15px] font-bold p-4 px-6">
                  Traditional Financing Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Fragment key={category.name}>
                  <tr>
                    <td
                      colSpan={3}
                      className="border-b border-[var(--border)] border-t-[3px] border-t-[var(--navy)] bg-[var(--bg-light)] p-3.5 px-6 text-[15px] font-bold text-[var(--navy)]"
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.rows.map((row, idx) => (
                    <tr key={`${category.name}-${idx}`} className={row.highlight ? "bg-white" : ""}>
                      <td
                        className={`p-3.5 px-6 text-[13px] font-semibold text-[var(--navy)] ${row.highlight ? "bg-[var(--bg-light)]" : "bg-white"} w-[30%]`}
                      >
                        {row.feature}
                      </td>
                      <td
                        className={`text-[13px] font-semibold text-[#15803D] p-3.5 px-6 ${row.highlight ? "bg-[#DCFCE7]" : "bg-[#F0FDF4]"}`}
                      >
                        <span className="flex items-start gap-1.5">
                          <Check className="w-4 h-4 text-[var(--green-bright)] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          {row.good}
                        </span>
                      </td>
                      <td
                        className={`text-[13px] font-medium text-[#B91C1C] p-3.5 px-6 ${row.highlight ? "bg-[#FEE2E2]" : "bg-[#FEF2F2]"}`}
                      >
                        <span className="flex items-start gap-1.5">
                          <X className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          {row.bad}
                        </span>
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
