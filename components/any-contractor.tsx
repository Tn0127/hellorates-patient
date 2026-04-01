"use client"

import { Check, Briefcase, Wrench, CircleDollarSign } from "lucide-react"
import { HelloRatesImage } from "@/components/hello-rates-image"

const INTEGRATION_LOGOS: { src: string; alt: string; className?: string }[] = [
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/330px-ServiceTitan_logo.svg.png",
    alt: "ServiceTitan",
  },
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/jobber-logo-png_seeklogo-445423.png",
    alt: "Jobber",
  },
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/Housecall_Pro_Logo.svg",
    alt: "Housecall Pro",
  },
  { src: "https://hellorates.com/wp-content/uploads/2026/03/workiz.svg", alt: "Workiz" },
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/byEP_SF-full-color.svg",
    alt: "Service Fusion",
  },
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/filed-pulse.svg",
    alt: "FieldPulse",
  },
  {
    src: "https://hellorates.com/wp-content/uploads/2026/03/mhelpDesk.png",
    alt: "mHelpDesk",
    className: "hr-integration-mhelpdesk",
  },
]

function IntegrationMarquee() {
  return (
    <div
      className="hr-integration-marquee mt-6"
      role="region"
      aria-label="Field service software integrations"
    >
      <div className="hr-integration-track">
        <div className="hr-integration-group">
          {INTEGRATION_LOGOS.map((logo) => (
            <HelloRatesImage
              key={`a-${logo.alt}`}
              src={logo.src}
              alt={logo.alt}
              width={145}
              height={26}
              style={{ width: "auto" }}
              className={`h-[26px] w-auto max-w-[145px] object-contain object-center rounded shrink-0 ${logo.className ?? ""}`}
            />
          ))}
        </div>
        <div className="hr-integration-group" aria-hidden="true">
          {INTEGRATION_LOGOS.map((logo) => (
            <HelloRatesImage
              key={`b-${logo.alt}`}
              src={logo.src}
              alt=""
              width={145}
              height={26}
              style={{ width: "auto" }}
              className={`h-[26px] w-auto max-w-[145px] object-contain object-center rounded shrink-0 ${logo.className ?? ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function AnyContractor() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const cards = [
    {
      icon: Briefcase,
      title: "No minimum time in business required",
      items: [
        "No time-in-business minimum",
        "No revenue threshold or volume requirement",
        "Day one of business or twenty years in, you qualify",
      ],
    },
    {
      icon: Wrench,
      title: "Any trade. Any product. Any service.",
      items: [
        "Roofing, HVAC, pools, solar, windows, electrical, plumbing, painting and more",
        "Any home improvement job can be financed",
        "No product restrictions or service exclusions",
      ],
    },
    {
      icon: CircleDollarSign,
      title: "Flexible Loan Amounts From $500–$100,000+",
      items: [
        "A $600 water heater or a $95,000 whole-home remodel",
        "Offer financing on every invoice you write",
        "The widest loan range in the industry. $500 to $100,000",
      ],
    },
  ]

  return (
    <section className="hr-section hr-surface-muted">
      <div className="hr-container">
        <p className="hr-eyebrow">No Barriers. No Minimums. No Restrictions.</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Every Contractor Qualifies.
          <br />
          <span className="text-[var(--green)]">
            Any Trade. Any Job Size. No Restrictions.
          </span>
        </h2>
        <p className="hr-lead mb-12 max-w-2xl">
          Most programs have a list of requirements. HelloRates has one: you need to be a contractor.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card, i) => (
            <div key={i} className="hr-card border-[var(--border)] bg-white p-6 md:p-7">
              <div className="w-[52px] h-[52px] bg-[var(--bg-blue)] rounded-[14px] flex items-center justify-center mb-4">
                <card.icon className="w-7 h-7 text-[var(--blue)]" strokeWidth={1.75} />
              </div>
              <div className="text-base font-bold text-[var(--navy)] mb-3.5">{card.title}</div>
              <div className="flex flex-col gap-2">
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-[13px] text-[var(--text-mid)] leading-relaxed">
                    <span className="text-[var(--green-bright)] font-bold shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-2xl bg-[var(--navy)] px-6 py-8 shadow-[0_20px_50px_-15px_rgba(13,27,79,0.4)] ring-1 ring-white/10 md:px-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-[22px] font-bold text-white tracking-tight mb-2">
              No Existing Program? HelloRates Is Your Complete Financing Solution.
            </div>
            <p className="text-sm text-white/88 leading-relaxed">
              35+ lenders, 500–850 FICO, $500–$100,000, zero dealer fees, live in hours. The only program you&apos;ll
              ever need.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className="hr-btn-primary-sm whitespace-nowrap px-8"
            >
              Get Started Now
            </button>
            <span className="text-[11px] text-white/65">Live today. No contract.</span>
          </div>
        </div>

        <div className="mt-8 hr-card px-6 py-6 md:px-8">
          <p className="text-xs font-bold text-[var(--text-mid)] tracking-wide mb-5 text-center">
            Works inside your existing field service apps
          </p>
          <IntegrationMarquee />
        </div>
      </div>
    </section>
  )
}
