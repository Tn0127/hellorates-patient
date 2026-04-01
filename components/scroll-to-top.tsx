"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 480;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 z-[210] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-white shadow-lg shadow-[var(--navy)]/25 transition-all duration-200 hover:bg-[var(--blue-dark)] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 md:bottom-28 md:right-8"
    >
      <ChevronUp className="h-6 w-6" strokeWidth={2.25} aria-hidden />
    </button>
  );
}
