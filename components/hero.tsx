"use client";

import { Check, Calendar, Zap, Shield } from "lucide-react";
import { HelloRatesImage } from "@/components/hello-rates-image";
import { useRequestMoreInfo } from "@/components/request-more-info-dialog";

export function Hero() {
  const { openRequestMoreInfo } = useRequestMoreInfo();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const benefits = [
    "Credit decline recovery",
    "Partial approval gap coverage",
    "Eliminates 5–15% dealer fees",
  ];

  return (
    <section className="relative flex min-h-[calc(100dvh-4.25rem)] flex-col justify-center overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-white via-[#FAFBFD] to-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.85]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 55% at 15% -10%, rgba(59, 130, 246, 0.09), transparent 50%),
            radial-gradient(ellipse 70% 45% at 95% 10%, rgba(22, 163, 74, 0.06), transparent 45%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(248,250,252,0.65)_100%)]"
        aria-hidden
      />

      <div className="hr-container relative z-10 grid grid-cols-1 items-center gap-10 py-10 md:gap-12 md:py-12 lg:grid-cols-[minmax(0,1fr)_min(480px,44%)] lg:gap-16 lg:py-14">
        <div className="hero-content max-w-[640px] lg:max-w-none">
          <p className="hr-eyebrow">
            Contractor Financing. Built to Close More Deals.
          </p>

          <h1 className="hr-headline mb-5 max-w-[22ch] md:max-w-[28ch]">
            Close More Jobs. Keep Every Dollar.
            <br />
            Zero Dealer Fees.{" "}
            <span className="text-[var(--green)]">Guaranteed.</span>
          </h1>

          <p className="hr-lead mb-8">
            Whether you already offer financing or are starting from scratch,
            HelloRates recovers credit declines, funds the gap on partial
            approvals, and eliminates 5–15% dealer fees.{" "}
            <span className="font-semibold text-[var(--navy)]">
              Use it as your complete program or your most powerful backup.
            </span>{" "}
            More approvals, stronger margins, zero dealer fees.
          </p>

          <ul className="mb-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            {benefits.map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-3.5 py-2 text-sm font-medium text-[var(--navy)] shadow-sm backdrop-blur-sm"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-[var(--green)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                {label}
              </li>
            ))}
          </ul>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="hr-card flex items-center gap-3 rounded-full border-0 py-2 pl-2 pr-4 shadow-md">
              <div className="flex -space-x-2">
                <HelloRatesImage
                  src="https://hellorates.com/wp-content/uploads/2024/12/alex-avatar-pro-1.a02ab5f79ea38be4bf33.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
                <HelloRatesImage
                  src="https://hellorates.com/wp-content/uploads/2024/12/elisa-avatar-pro-3.a3ac3ee418f94d898780.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
                <HelloRatesImage
                  src="https://hellorates.com/wp-content/uploads/2024/12/rares-avatar-pro-4.a9b0a76b100fcac90798.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-[var(--navy)]">
                  Trusted by <span className="tabular-nums">7,800+</span>{" "}
                  contractors
                </div>
                <div className="text-[11px] tracking-wide text-[var(--gold)]">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollTo("pricing")}
              className="hr-btn-primary w-full sm:w-auto"
            >
              Get Started Now
            </button>
            <button
              type="button"
              onClick={openRequestMoreInfo}
              className="hr-btn-secondary w-full sm:w-auto"
            >
              Request More Info
            </button>
          </div>

          <p className="mt-4 text-sm text-[var(--text-mid)]">
            Prefer to talk first?{" "}
            <a
              href="#"
              className="font-semibold text-[var(--blue)] underline decoration-[var(--blue)]/30 underline-offset-2 transition-colors hover:decoration-[var(--blue)]"
            >
              Book a 15-minute call
            </a>
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)]/80 pt-6 text-xs text-[var(--text-mid)]">
            <span className="inline-flex items-center gap-1.5">
              <Check
                className="h-3.5 w-3.5 text-[var(--green)]"
                strokeWidth={2.5}
                aria-hidden
              />
              No contract
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar
                className="h-3.5 w-3.5 text-[var(--text-mid)]"
                strokeWidth={2}
                aria-hidden
              />
              Cancel anytime
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap
                className="h-3.5 w-3.5 text-[var(--gold)]"
                strokeWidth={2}
                aria-hidden
              />
              Live in minutes
            </span>
          </div>

          <div className="mt-5 flex max-w-lg items-start gap-3 rounded-xl border border-[#BFDBFE] bg-[var(--bg-blue)]/80 px-4 py-3 backdrop-blur-sm">
            <Shield
              className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--green)]"
              strokeWidth={2.5}
              aria-hidden
            />
            <p className="text-xs leading-relaxed text-[var(--text-mid)]">
              <span className="font-semibold text-[var(--navy)]">
                Zero risk to get started.
              </span>{" "}
              60-day money-back guarantee. No contracts.
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[460px] justify-center lg:mx-0 lg:max-w-none">
          <div className="relative w-full lg:max-w-[480px]">
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[380px] md:max-w-[440px] lg:max-w-[480px]">
              <HelloRatesImage
                src="https://hellorates.com/wp-content/uploads/2026/03/hellorates-phone.png"
                alt="HelloRates mobile experience"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-contain object-center drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
