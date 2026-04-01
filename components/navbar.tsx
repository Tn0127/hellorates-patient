"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HelloRatesImage } from "@/components/hello-rates-image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const linkClass =
    "rounded-lg px-3.5 py-2 text-center text-[13px] font-medium text-white/90 transition-colors hover:bg-white/[0.08] hover:text-white md:text-left";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy)] shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.12)]">
      <nav className="hr-container flex h-[4.25rem] items-center justify-between gap-4" aria-label="Main">
        <Link
          href="/"
          className="relative inline-flex shrink-0 items-center rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy)]"
        >
          <HelloRatesImage
            src="https://hellorates.com/wp-content/uploads/2026/03/contractor-logo.png"
            alt="HelloRates — Contractor Financing Solutions"
            width={200}
            height={56}
            className="h-10 w-auto object-contain md:h-11"
            priority
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>

        <div
          className={`${
            isOpen ? "max-h-[min(70vh,520px)] border-t border-white/10 py-3" : "max-h-0 py-0"
          } flex-basis-full w-full overflow-hidden transition-all duration-300 ease-out md:max-h-none md:flex md:w-auto md:items-center md:gap-1 md:border-0 md:py-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-0.5">
            <button type="button" onClick={() => scrollTo("how-it-works")} className={linkClass}>
              How It Works
            </button>
            <button type="button" onClick={() => scrollTo("pricing")} className={linkClass}>
              Pricing
            </button>
            <button type="button" onClick={() => scrollTo("calculators-roi")} className={linkClass}>
              Calculator
            </button>
            <button type="button" onClick={() => scrollTo("faqs")} className={linkClass}>
              FAQs
            </button>
            <Link
              href="https://app.hellorates.com/login"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Contractor Login
            </Link>
            <div className="mt-3 border-t border-white/10 pt-3 md:mt-0 md:ml-3 md:border-0 md:pt-0 md:pl-3 md:border-l md:border-white/15">
              <button
                type="button"
                onClick={() => scrollTo("pricing")}
                className="hr-btn-primary-sm w-full md:w-auto"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
