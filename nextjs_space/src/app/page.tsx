import {
  Navbar,
  Hero,
  PASSection,
  SocialProof,
  AnalyticsShowcase,
  PowerTools,
  MarketplaceSection,
  FeatureShowcase,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing"

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-polka-dots">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero with bold AI-era messaging + waitlist CTA + interactive visualization */}
      <Hero />

      {/* 2. PAS Section - Problem cards */}
      <PASSection />

      {/* 3. Social proof with animated counters */}
      <SocialProof />

      {/* 4. Analytics feature showcase (primary differentiator) */}
      <section id="analytics">
        <AnalyticsShowcase />
      </section>

      {/* 5. 21 add-on features for project management */}
      <PowerTools />

      {/* 6. Marketplace monetization opportunity */}
      <section id="marketplace">
        <MarketplaceSection />
      </section>

      {/* 7. Feature showcase with all 4 screenshots */}
      <section id="features">
        <FeatureShowcase />
      </section>

      {/* 8. Testimonials/social proof */}
      <Testimonials />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. Final waitlist CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
