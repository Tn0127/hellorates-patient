"use client";

export function CtaStrip() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[var(--navy)] py-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 75% 90% at 100% 20%, rgba(59, 130, 246, 0.18), transparent 52%),
            radial-gradient(ellipse 55% 70% at 0% 100%, rgba(34, 197, 94, 0.14), transparent 48%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_35%,transparent_65%,rgba(0,0,0,0.12)_100%)]" aria-hidden />

      <div className="hr-container relative flex flex-col items-stretch gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="text-center md:max-w-[min(100%,28rem)] md:text-left">
          <h2 className="text-balance text-lg font-bold leading-snug tracking-tight text-white sm:text-xl md:text-[1.125rem]">
            Plans Start at Just $67/mo. Zero Dealer Fees.
          </h2>
          <p className="mt-3 text-[13px] text-white/88">
            No contract · 60-day money-back guarantee · Cancel anytime
          </p>
        </div>

        <div className="flex shrink-0 justify-center md:justify-end">
          <button
            type="button"
            onClick={() => scrollTo("pricing")}
            className="hr-btn-primary whitespace-nowrap px-8 py-3.5 text-[15px] ring-offset-2 ring-offset-[var(--navy)]"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
