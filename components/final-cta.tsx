"use client";

import Link from "next/link";

export function FinalCta() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden border-t border-[#BFDBFE] bg-gradient-to-br from-[var(--bg-blue)] via-white to-[var(--bg-light)] py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.12), transparent 55%)",
        }}
      />
      <div className="hr-container relative text-center">
        <h2 className="hr-headline mx-auto mb-4 max-w-[20ch] md:max-w-none">
          Close More Jobs. Keep Every Dollar.
          <br />
          <span className="text-[var(--green)]">Get Started Today.</span>
        </h2>
        <p className="hr-lead mx-auto mb-10 max-w-xl">
          Join 7,800 contractors already recovering declined deals, eliminating merchant and loan fees, and funding
          partial approvals. Live in minutes. 60-day full money-back guarantee.
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary">
            Get Started Now
          </button>
          <Link href="#" className="hr-btn-secondary inline-flex items-center justify-center">
            Book a Call with a Financing Expert
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[var(--text-mid)]">
          <span>No contract</span>
          <span>Cancel anytime</span>
          <span>Live in minutes</span>
        </div>
      </div>
    </section>
  );
}
