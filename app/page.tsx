import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProofBar } from "@/components/social-proof-bar"
import { ProblemSolution } from "@/components/problem-solution"
import { ApprovalEngine } from "@/components/approval-engine"
import { UrgencySection } from "@/components/urgency-section"
import { ComparisonTable } from "@/components/comparison-table"
import { CtaStrip } from "@/components/cta-strip"
import { RoiCalculator } from "@/components/roi-calculator"
import { HowItWorks } from "@/components/how-it-works"
import { ZeroFriction } from "@/components/zero-friction"
import { AnyContractor } from "@/components/any-contractor"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TradesSection } from "@/components/trades-section"
import { PricingSection } from "@/components/pricing-section"
import { GetStartedSection } from "@/components/get-started-section"
import { CommercialCallout } from "@/components/commercial-callout"
import { FAQSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyBar } from "@/components/sticky-bar"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[var(--foreground)]">
      <Navbar />
      <div className="hero-section">
        <Hero />
      </div>
      <SocialProofBar />
      <ProblemSolution />
      <ApprovalEngine />
      <UrgencySection />
      <ComparisonTable />
      <CtaStrip />
      <RoiCalculator />
      <HowItWorks />
      <ZeroFriction />
      <AnyContractor />
      <TestimonialsSection />
      <TradesSection />
      <PricingSection />
      <GetStartedSection />
      <CommercialCallout />
      <FAQSection />
      <div className="final-cta-section">
        <FinalCta />
      </div>
      <Footer />
      <ScrollToTop />
      <StickyBar />
    </main>
  )
}
