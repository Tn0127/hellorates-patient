"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { Plus } from "lucide-react"

type FAQItem = {
  q: string
  a: ReactNode
}

const faqs: FAQItem[] = [
  {
    q: "What happens if my customer defaults after I've been paid?",
    a: (
      <>
        <strong>Nothing happens to you.</strong> The loan is between the homeowner and the lender. If a customer
        defaults after you have been paid, that is between them and the lender. Your payment is never clawed back.
        Zero recourse. This is structurally built into every HelloRates transaction.
      </>
    ),
  },
  {
    q: "Do I have to switch lenders?",
    a: (
      <>
        Never. HelloRates runs <strong>alongside your existing program</strong>. Use it as your primary, your backup for
        declines, or both. You keep everything you already have and add coverage for every customer they turn away. No
        existing program? HelloRates is your complete financing solution from day one.
      </>
    ),
  },
  {
    q: "Are there per-loan or merchant fees?",
    a: (
      <>
        <strong>Zero.</strong> Unlimited loan approvals for <strong>$67/month on the annual plan</strong> or{" "}
        <strong>$97/month month-to-month</strong>. No per-loan fees, no merchant fees, no dealer charges. Ever. No
        matter how many deals you close or how large they get, your cost stays flat.
      </>
    ),
  },
  {
    q: "What stops the customer from using the money for something else?",
    a: (
      <>
        Before the customer sees any rates, they agree to a{" "}
        <strong>legally binding fund agreement locking money to your company by name.</strong> It&apos;s a condition of
        the application, fully enforceable from the first click, not fine print after approval.
      </>
    ),
  },
  {
    q: "What are the risks to me?",
    a: (
      <>
        <strong>Zero recourse.</strong> The loan is between the homeowner and the lender. Not you. If a customer
        defaults after you&apos;ve been paid, that&apos;s between them and the lender. Your payment is never clawed
        back.
      </>
    ),
  },
  {
    q: "How fast do I get paid?",
    a: (
      <>
        <strong>Cash within 24–48 hours of job completion.</strong> No completion certificates, no lender inspections,
        no holdbacks. You invoice for the full amount and receive the full amount. HelloRates earns on loan
        origination. Not from you.
      </>
    ),
  },
  {
    q: "Does this affect my customer's credit score?",
    a: (
      <>
        The application is a <strong>soft pull. Zero credit impact.</strong> A customer just declined by your primary
        lender can immediately check 35+ more options with no further damage to their score. A hard pull only happens
        if they choose to accept an offer and proceed to funding.
      </>
    ),
  },
  {
    q: "How quickly does my customer see their approval options?",
    a: (
      <>
        In about <strong>60 seconds</strong> from starting the application. Our approval engine runs each application
        against 35+ lender guidelines in real time simultaneously. There is no waiting, no callbacks, no second form.
        Your customer sees up to 3 approval options instantly and chooses the best one for their situation.
      </>
    ),
  },
  {
    q: "How does the 0% APR option work?",
    a: (
      <>
        For jobs under $15,000 with customers who have good to excellent credit, HelloRates offers access to{" "}
        <strong>0% Intro APR credit cards up to 21 months</strong> through partnerships with major card issuers. A
        standard 3% card network processing fee applies, paid to the card network, not HelloRates. You can toggle this
        option off in your portal if you prefer not to offer it.
      </>
    ),
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0, 1]))

  const toggle = (idx: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <section className="hr-section hr-surface-muted" id="faqs">
      <div className="hr-container">
        <div className="mb-12 text-center">
          <p className="hr-eyebrow">FAQs</p>
          <h2 className="hr-headline mx-auto">
            Straight Answers.
            <br />
            <span className="text-[var(--green)]">No Fine Print.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[820px] overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_12px_40px_-16px_rgba(13,27,79,0.1)]">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className={`border-b border-[var(--border)] ${idx === faqs.length - 1 ? "border-b-0" : ""}`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full cursor-pointer items-center justify-between bg-white px-6 py-4 text-left text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--bg-light)]"
              >
                {faq.q}
                <Plus
                  className={`ml-4 h-[22px] w-[22px] shrink-0 text-[var(--blue)] transition-transform ${
                    openItems.has(idx) ? "rotate-45" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              {openItems.has(idx) && (
                <div className="bg-white px-6 pb-5 text-sm leading-relaxed text-[var(--text-mid)]">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
