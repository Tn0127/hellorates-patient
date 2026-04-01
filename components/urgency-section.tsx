"use client";

import { X, DollarSign, ArrowRight } from "lucide-react";

export function UrgencySection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hr-section">
      <div className="hr-container text-center">
        <p className="hr-eyebrow">Waiting Is Costly</p>
        <h2 className="hr-headline mx-auto mb-4 max-w-3xl">
          Every Week You Wait,
          <br />
          Patients Choose Practices That Can Say Yes.
        </h2>
        <p className="hr-lead mx-auto mb-6 max-w-2xl">
          Patients below 650 FICO don&apos;t disappear. They find a practice with a better patient financing program.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <div className="hr-card border-t-[3px] border-t-[var(--red)] p-6 text-center">
            <div className="mb-3">
              <X className="mx-auto h-8 w-8 text-[#e53935]" strokeWidth={2.5} />
            </div>
            <div className="mb-2 text-base font-bold text-[var(--navy)]">Declined Patients</div>
            <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">
              At 3 declined patients per month on a $6,000 average treatment that is{" "}
              <strong className="text-[var(--navy)]">$18,000 in lost revenue every 30 days</strong> walking out of your
              practice.
            </div>
          </div>

          <div className="hr-card border-t-[3px] border-t-[#e65100] p-6 text-center">
            <div className="mb-3">
              <DollarSign className="mx-auto h-8 w-8 text-[#e65100]" strokeWidth={2.5} />
            </div>
            <div className="mb-2 text-base font-bold text-[var(--navy)]">Eroding Margins</div>
            <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">
              At 8% merchant financing fees on 8 treatments a month at $6,000 each that is{" "}
              <strong className="text-[var(--navy)]">$3,840 deducted from your practice revenue every single month.</strong>
            </div>
          </div>

          <div className="hr-card border-t-[3px] border-t-[var(--navy)] p-6 text-center">
            <div className="mb-3">
              <ArrowRight className="mx-auto h-8 w-8 text-[var(--navy)]" strokeWidth={2.5} />
            </div>
            <div className="mb-2 text-base font-bold text-[var(--navy)]">Patients Choosing Other Practices</div>
            <div className="text-[13px] leading-relaxed text-[var(--text-mid)]">
              Patients below 650 FICO do not disappear. They find someone who can say yes.{" "}
              <strong className="text-[var(--navy)]">
                Patients who cannot get financed at your practice will find a practice that can finance them. Every week
                without HelloRates is a week another practice earns that loyalty.
              </strong>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2.5">
          <button type="button" onClick={() => scrollTo("pricing")} className="hr-btn-primary">
            Get Started Now
          </button>
          <div className="text-xs text-[var(--text-mid)]">
            No merchant financing fees · 500 FICO approvals · No recourse · Live in minutes
          </div>
        </div>
      </div>
    </section>
  );
}
