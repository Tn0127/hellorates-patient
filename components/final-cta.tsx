"use client";

import Link from "next/link";

export function FinalCta() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-blue)] py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(37, 99, 235, 0.06), transparent 58%)",
        }}
      />
      <div className="hr-container relative max-w-[640px] text-center">
        <h2 className="mb-3.5 text-balance text-[2.75rem] font-bold leading-[1.15] tracking-[-0.04em] text-[var(--navy)] md:text-[2.75rem]">
          Approve More Patients. Keep Every Dollar.
          <br />
          <span className="text-[var(--green)]">Get Started Today.</span>
        </h2>
        <p className="hr-lead mx-auto mb-10 max-w-[560px]">
          Join 8,300+ practices already treating more patients, eliminating merchant financing fees, and funding complete
          treatment plans. Live in minutes. 60-day full money-back guarantee.
        </p>
        <div className="mb-3 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary">
            Get Started Now
          </button>
          <Link href="#" className="hr-btn-secondary inline-flex items-center justify-center">
            Book a Call with a Financing Expert
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[var(--text-mid)]">
          <span>No contract</span>
          <span>Cancel anytime</span>
          <span>Live in minutes</span>
        </div>
      </div>
    </section>
  );
}
