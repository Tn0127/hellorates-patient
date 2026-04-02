"use client";

import { Check, Calendar, Zap } from "lucide-react";
import { HelloRatesImage } from "@/components/hello-rates-image";

export function TestimonialsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items = [
    {
      quote: (
        <>
          &quot;Approved a patient at 604 FICO for a{" "}
          <strong className="font-semibold text-[var(--navy)]">$12,600 full-mouth restoration</strong>. Our previous
          program said no. HelloRates approved him in under a minute. He&apos;s been with us ever since.&quot;
        </>
      ),
      name: "Dr. Rachel Kim",
      role: "Owner, Apex Dental Group",
      src: "https://hellorates.com/wp-content/uploads/2024/12/3.png",
    },
    {
      quote: (
        <>
          &quot;Eliminated{" "}
          <strong className="font-semibold text-[var(--navy)]">8 to 10% merchant financing fees immediately.</strong>{" "}
          We were paying CareCredit over $2,800 a month in fees on our treatment volume. Now we pay $67. Same approvals,
          thousands more staying in our practice every month.&quot;
        </>
      ),
      name: "Michelle Torres",
      role: "Practice Manager, Radiance Med Spa",
      src: "https://hellorates.com/wp-content/uploads/2024/12/1-1.png",
    },
    {
      quote: (
        <>
          &quot;Launched with{" "}
          <strong className="font-semibold text-[var(--navy)]">
            no minimum patient volume and no time-in-practice requirements.
          </strong>{" "}
          We had just opened our second location. Every other program wanted 12 months of history. HelloRates had us
          live in 20 minutes.&quot;
        </>
      ),
      name: "Dr. Brandon Osei",
      role: "Owner, Osei Chiropractic & Wellness",
      src: "https://hellorates.com/wp-content/uploads/2024/12/paul-avatar-pro-2.5cf11db1a6d555551db8.png",
    },
  ];

  return (
    <section className="hr-section hr-surface-muted" aria-labelledby="testimonials-heading">
      <div className="hr-container">
        <p className="hr-eyebrow">Proven in the Field</p>
        <h2 id="testimonials-heading" className="hr-headline mb-4 max-w-3xl">
          8,300 Practices
          <br />
          <span className="text-[var(--green)]">Are Treating More Patients.</span>
        </h2>
        <p className="hr-lead mb-12 max-w-2xl">
          From solo practitioners to multi-location practices, HelloRates works as your primary patient financing solution
          or your most powerful backup.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {items.map((t) => (
            <article
              key={t.name}
              className="hr-card flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="px-6 pt-6 text-base tracking-widest text-[var(--gold)]">★★★★★</div>
              <p className="flex-1 px-6 pb-4 pt-2 text-sm leading-relaxed text-[var(--text-mid)]">{t.quote}</p>
              <div className="mt-auto flex items-center gap-3 border-t border-[var(--border-blue-soft)] bg-[var(--bg-blue)] px-6 py-4">
                <div className="h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full bg-[var(--navy)]">
                  <HelloRatesImage
                    src={t.src}
                    alt={t.name}
                    width={42}
                    height={42}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--navy)]">{t.name}</div>
                  <div className="mt-0.5 text-[11px] text-[var(--text-mid)]">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary px-10">
            Get Started Now
          </button>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-mid)]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              No contract
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" strokeWidth={2.5} />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
              Live in minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
