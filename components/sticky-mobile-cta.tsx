"use client";

export function StickyMobileCta() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between gap-3 bg-[var(--navy)] px-5 py-3 shadow-[0_-4px_20px_rgba(13,27,79,0.2)] md:hidden">
      <p className="min-w-0 text-xs leading-snug text-white/80">
        <strong className="mb-0.5 block text-[13px] text-white">Get Started Now</strong>
        $67/mo. 60-day guarantee.
      </p>
      <button
        type="button"
        onClick={() => scrollTo("pricing")}
        className="shrink-0 rounded-full bg-[var(--green-bright)] px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[var(--green)]"
      >
        Get Started Now
      </button>
    </div>
  );
}
