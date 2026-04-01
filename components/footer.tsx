"use client";

import Link from "next/link";
import { HelloRatesImage } from "@/components/hello-rates-image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Lock,
  Shield,
  Activity,
  Globe,
  DollarSign,
  Check,
} from "lucide-react";

const social = [
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "X", href: "#", Icon: Twitter },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "YouTube", href: "#", Icon: Youtube },
  { name: "Instagram", href: "#", Icon: Instagram },
] as const;

const linkClass =
  "text-[13px] text-white/85 hover:text-white transition-colors py-1.5 text-left rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy)]";

const colTitleClass =
  "text-[11px] font-semibold text-white tracking-[0.07em] mb-4 pb-3 border-b border-white/[0.08]";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[var(--navy)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--blue)]/35 to-transparent"
        aria-hidden
      />

      <div className="hr-container grid grid-cols-1 gap-10 border-b border-white/[0.08] pt-12 pb-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,300px)_repeat(3,minmax(0,1fr))] lg:gap-0">
        <div className="sm:col-span-2 border-white/[0.08] lg:col-span-1 lg:border-r lg:pr-8">
          <Link
            href="/"
            className="inline-flex flex-col items-center transition-opacity lg:items-start"
          >
            <HelloRatesImage
              src="https://hellorates.com/wp-content/uploads/2026/03/contractor-logo.png"
              alt="HelloRates — Contractor Financing Solutions"
              width={200}
              height={56}
              className="h-[38px] w-auto object-contain"
            />
          </Link>
          <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-white/85">
            HelloRates is the most comprehensive contractor financing program in the market. Recover credit declines,
            fund the gap on partial approvals, and eliminate 5–15% dealer fees. Use it as your primary program or your
            most powerful backup. Zero risk. No contracts.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {social.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/90 transition-all hover:border-[var(--blue)] hover:text-[var(--blue)]"
                aria-label={name}
              >
                <Icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-white/[0.08] lg:border-r lg:px-5">
          <h2 className={colTitleClass}>Contractors</h2>
          <nav className="flex flex-col" aria-label="Contractors">
            <button type="button" onClick={() => scrollTo("how-it-works")} className={linkClass}>
              How It Works
            </button>
            <button type="button" onClick={() => scrollTo("pricing")} className={linkClass}>
              Pricing
            </button>
            <button type="button" onClick={() => scrollTo("calculators-roi")} className={linkClass}>
              Revenue Calculator
            </button>
            <button type="button" onClick={() => scrollTo("faqs")} className={linkClass}>
              FAQs
            </button>
            <button type="button" onClick={() => scrollTo("pricing")} className={linkClass}>
              60-Day Guarantee
            </button>
            <Link
              href="https://app.hellorates.com/login"
              className={linkClass}
            >
              Contractor Login
            </Link>
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className={`${linkClass} font-bold text-[var(--green-bright)] hover:text-[var(--green)]`}
            >
              Get Started Now →
            </button>
          </nav>
        </div>

        <div className="border-white/[0.08] lg:border-r lg:px-5">
          <h2 className={colTitleClass}>Commercial</h2>
          <nav className="flex flex-col" aria-label="Commercial">
            <Link href="#" className={linkClass}>
              Business loans
            </Link>
            <Link href="#" className={linkClass}>
              B2B platform
            </Link>
            <Link href="#" className={linkClass}>
              Apply now
            </Link>
            <Link href="#" className={linkClass}>
              Partner login
            </Link>
          </nav>
        </div>

        <div className="lg:px-5">
          <h2 className={colTitleClass}>Company</h2>
          <nav className="flex flex-col" aria-label="Company">
            <Link href="#" className={linkClass}>
              About HelloRates
            </Link>
            <Link href="#" className={linkClass}>
              Our team
            </Link>
            <Link href="#" className={linkClass}>
              Media
            </Link>
            <Link href="#" className={linkClass}>
              Careers
            </Link>
            <Link href="#" className={linkClass}>
              Contact us
            </Link>
            <Link href="#" className={linkClass}>
              Site map
            </Link>
          </nav>
        </div>
      </div>

      <div className="hr-container flex flex-col items-start justify-between gap-3 border-b border-white/[0.06] py-4 md:flex-row md:items-center">
        <p className="order-2 text-xs text-white/85 md:order-1">
          © {new Date().getFullYear()} HelloRates Contractor Financing Solutions. All rights reserved.
        </p>
        <nav
          className="order-1 flex flex-wrap gap-x-5 gap-y-2 md:order-2"
          aria-label="Legal"
        >
          {(
            [
              "Privacy policy",
              "Terms & conditions",
              "Partner terms & conditions",
              "Advertising disclosures",
              "Accessibility",
              "Unsubscribe",
            ] as const
          ).map((label) => (
            <Link
              key={label}
              href="#"
              className="text-xs text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy)] rounded-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/[0.06] px-4 py-4 md:px-8">
        <div className="hr-container flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[10px] font-semibold tracking-[0.1em] text-white/85">
            Secured & Trusted
          </span>
          <div className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-semibold text-white/75">256-bit SSL</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-semibold text-white/75">Privacy Protected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-semibold text-white/75">Soft Pull Only</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-semibold text-white/75">35+ Lending Partners</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-4 w-4 shrink-0 text-white" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-semibold text-white/75">Zero Dealer Fees</span>
          </div>
          <div className="flex w-full items-center justify-center gap-1.5 pt-2 md:ml-auto md:w-auto md:justify-end md:pt-0">
            <Check className="h-3.5 w-3.5 shrink-0 text-white" strokeWidth={2} aria-hidden />
            <span className="text-[10px] font-medium text-white/80">
              Made with <span className="text-[#ff6b6b]">♥</span> in Charleston, SC
            </span>
          </div>
        </div>
      </div>

      <div className="hr-container pb-10 pt-2">
        <p className="text-[10.5px] leading-relaxed text-white/75">
          This website does not constitute an offer or solicitation to lend. Annual Percentage Rates (APR),
          Introductory Rates (Intro), terms, interest rates, amounts, and fee(s) are provided by Trust Tech LLC / DBA
          HelloRates.com lending partners. HelloRates.com is a technology company, not a lender, does not accept
          applications for credit, does not make loans, and does not make credit decisions. All financial terms of the
          loan will be provided to you by the lending partner and may vary by lending partner, state, and your
          individual creditworthiness. This site is directed at persons in the continental U.S., Alaska and Hawaii only.
        </p>
      </div>
    </footer>
  );
}
