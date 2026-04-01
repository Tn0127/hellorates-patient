"use client";

import { useEffect, useState } from "react";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector(".hero-section");
      const finalCtaEl = document.querySelector(".final-cta-section");

      const heroGone = heroEl ? heroEl.getBoundingClientRect().bottom < 0 : true;
      const ctaVisible = finalCtaEl
        ? finalCtaEl.getBoundingClientRect().top < window.innerHeight
        : false;

      setVisible(heroGone && !ctaVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] border-t-[3px] border-[var(--green-bright)] bg-[var(--navy)]/95 py-3.5 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="region"
      aria-label="Quick signup"
    >
      <div className="hr-container flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 text-center sm:flex-row sm:gap-4 sm:text-left md:justify-start">
          <span className="text-sm font-bold text-white">HelloRates</span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden />
          <span className="text-[13px] font-medium text-white">
            <strong className="text-white">$67/mo</strong> annual &middot; No merchant fees
          </span>
          <span className="hidden h-4 w-px bg-white/30 md:block" aria-hidden />
          <span className="text-[13px] text-white">500 FICO approvals &middot; 35+ lenders</span>
          <span className="hidden h-4 w-px bg-white/30 lg:block" aria-hidden />
          <span className="text-[13px] text-white">
            <strong className="text-white">60-day</strong> full money-back guarantee
          </span>
        </div>
        <button
          type="button"
          onClick={() => scrollTo("pricing")}
          className="hr-btn-primary-sm flex-shrink-0 self-center md:self-auto"
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}
