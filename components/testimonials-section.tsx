"use client"

import { Check, Calendar, Zap } from "lucide-react"
import { HelloRatesImage } from "@/components/hello-rates-image"

export function TestimonialsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const items = [
    {
      quote: (
        <>
          &quot;Recovered a <strong className="text-[var(--navy)] font-semibold">$12,600 HVAC decline</strong> in
          minutes. My customer was at 612 FICO, my primary lender said no. HelloRates approved them instantly.
          That&apos;s a deal I would have lost forever.&quot;
        </>
      ),
      name: "Mark Stevens",
      role: "Owner, Stevens Heating & Air",
      src: "https://hellorates.com/wp-content/uploads/2024/12/3.png",
    },
    {
      quote: (
        <>
          &quot;Eliminated <strong className="text-[var(--navy)] font-semibold">9 to 12% merchant fees immediately.</strong>{" "}
          I was paying GreenSky over $3,000 a month in fees on my volume. Now I pay $67. Same approvals, thousands more
          in my pocket every single month.&quot;
        </>
      ),
      name: "Danielle Ruiz",
      role: "Operations Director, Ruiz Remodeling Group",
      src: "https://hellorates.com/wp-content/uploads/2024/12/1-1.png",
    },
    {
      quote: (
        <>
          &quot;Launched with{" "}
          <strong className="text-[var(--navy)] font-semibold">
            no revenue minimums and no time-in-business requirements.
          </strong>{" "}
          I was 8 months in, every other program turned me down. HelloRates had me live in 20 minutes. First approval
          came the same day.&quot;
        </>
      ),
      name: "Chris Wallace",
      role: "President, Wallace Roofing",
      src: "https://hellorates.com/wp-content/uploads/2024/12/paul-avatar-pro-2.5cf11db1a6d555551db8.png",
    },
  ]

  return (
    <section className="hr-section hr-surface-muted" aria-labelledby="testimonials-heading">
      <div className="hr-container">
        <p className="hr-eyebrow">Proven in the Field</p>
        <h2 id="testimonials-heading" className="hr-headline mb-4 max-w-3xl">
          7,800 Contractors
          <br />
          <span className="text-[var(--green)]">Have Closed Their Financing Gaps.</span>
        </h2>
        <p className="hr-lead mb-12 max-w-2xl">
          From single-truck operations to multi-location contractors, HelloRates works as your primary program or your
          most powerful backup.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {items.map((t) => (
            <article
              key={t.name}
              className="hr-card flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-[var(--gold)] text-base tracking-widest px-6 pt-6">★★★★★</div>
              <p className="text-sm text-[var(--text-mid)] leading-relaxed px-6 pt-2 pb-4 flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 bg-[var(--bg-blue)] px-6 py-4 mt-auto border-t border-[#BFDBFE]">
                <div className="w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 bg-[var(--navy)]">
                  <HelloRatesImage
                    src={t.src}
                    alt={t.name}
                    width={42}
                    height={42}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--navy)]">{t.name}</div>
                  <div className="text-[11px] text-[var(--text-mid)] mt-0.5">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary px-10">
            Get Started Now
          </button>
          <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-[var(--text-mid)] mt-3">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
              No contract
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" strokeWidth={2.5} />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
              Live in minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
