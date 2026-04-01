"use client";

import Image from "next/image";
import { Check, Briefcase, Stethoscope, CircleDollarSign } from "lucide-react";

const INTEGRATION_LOGOS: { src: string; alt: string; className?: string }[] = [
  { src: "/logos/Dentrix-Logo-SVG_001.svg", alt: "Dentrix" },
  { src: "/logos/eaglesoft-logo.jpg", alt: "Eaglesoft" },
  { src: "/logos/KAREO_LOGO.jpg", alt: "Kareo" },
  {
    src: "/logos/65f01bef1a8bde9564e722e8_redesign-logo.png.webp",
    alt: "ChiroTouch",
  },
  { src: "/logos/MM-Logo_RGB_HI.jpg", alt: "Modernizing Medicine" },
  {
    src: "/logos/jane-app.jpg",
    alt: "Jane App",
    className: "h-[28px] max-w-[min(240px,45vw)]",
  },
  { src: "/logos/aestheticspro-logo-horizontal.svg", alt: "Aesthetics Pro" },
];

function IntegrationMarquee() {
  const imgLayout = "w-auto object-contain object-center rounded shrink-0";

  return (
    <div
      className="hr-integration-marquee mt-6"
      role="region"
      aria-label="Practice management software integrations"
    >
      <div className="hr-integration-track">
        <div className="hr-integration-group">
          {INTEGRATION_LOGOS.map((logo) => (
            <Image
              key={`a-${logo.alt}`}
              src={logo.src}
              alt={logo.alt}
              width={145}
              height={26}
              style={{ width: "auto" }}
              className={`${imgLayout} ${logo.className ?? "h-[26px] max-w-[145px]"}`}
            />
          ))}
        </div>
        <div className="hr-integration-group" aria-hidden="true">
          {INTEGRATION_LOGOS.map((logo) => (
            <Image
              key={`b-${logo.alt}`}
              src={logo.src}
              alt=""
              width={145}
              height={26}
              style={{ width: "auto" }}
              className={`${imgLayout} ${logo.className ?? "h-[26px] max-w-[145px]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnyContractor() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cards = [
    {
      icon: Briefcase,
      title: "No Minimum Time In Practice Required",
      items: [
        "No time-in-business minimum",
        "No revenue threshold or volume requirement",
        "Day one of business or twenty years in, you qualify",
      ],
    },
    {
      icon: Stethoscope,
      title: "Any Specialty. Any Treatment. Any Procedure.",
      items: [
        "Medical, dental, chiro, med spa, wellness, and more",
        "Any procedure or treatment plan can be financed",
        "No treatment type restrictions or specialty exclusions",
      ],
    },
    {
      icon: CircleDollarSign,
      title: "Flexible Loan Amounts From $500–$100,000+",
      items: [
        "Small procedures or comprehensive treatment plans",
        "Offer financing on every treatment plan you present",
        "The widest loan range in the industry. $500 to $100,000",
      ],
    },
  ];

  return (
    <section className="hr-section hr-surface-muted">
      <div className="hr-container">
        <p className="hr-eyebrow">No Barriers. No Minimums. No Restrictions.</p>
        <h2 className="hr-headline mb-4 max-w-3xl">
          Every Practice Qualifies.
          <br />
          <span className="text-[var(--green)]">
            Any Specialty. Any Treatment Size. No Restrictions.
          </span>
        </h2>
        <p className="hr-lead mb-12 max-w-2xl">
          Most programs have a list of requirements. HelloRates has one: you
          need to be a licensed practice.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="hr-card border-[var(--border)] bg-white p-6 md:p-7"
            >
              <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[var(--bg-blue)]">
                <card.icon
                  className="h-7 w-7 text-[var(--blue)]"
                  strokeWidth={1.75}
                />
              </div>
              <div className="mb-3.5 text-base font-bold text-[var(--navy)]">
                {card.title}
              </div>
              <div className="flex flex-col gap-2">
                {card.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-[var(--text-mid)]"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-[var(--green-bright)]">
                      <Check className="h-4 w-4" />
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
            <div className="mb-2 text-[22px] font-bold tracking-tight text-white">
              No Existing Program? HelloRates Is Your Complete Patient Financing
              Solution.
            </div>
            <p className="text-sm leading-relaxed text-white/88">
              35+ lenders, 500–850 FICO, $500–$100,000, zero merchant financing
              fees, live in hours. The only patient financing program
              you&apos;ll ever need.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className="hr-btn-primary-sm whitespace-nowrap px-8"
            >
              Get Started Now
            </button>
            <span className="text-[11px] text-white/65">
              Live today. No contract.
            </span>
          </div>
        </div>

        <div className="mt-8 hr-card px-6 py-6 md:px-8">
          <p className="mb-5 text-center text-xs font-bold tracking-wide text-[var(--text-mid)]">
            Works alongside your practice management software
          </p>
          <IntegrationMarquee />
        </div>
      </div>
    </section>
  );
}
