import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { PricingPage } from "@/components/landing/PricingPage"

export const metadata = {
  title: "Pricing - BookmarkAI Hub | Choose Your Perfect Plan",
  description: "Simple, transparent pricing for BookmarkAI Hub. Start free and upgrade as you grow. Plans for individuals, professionals, and teams.",
}

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingPage />
      <Footer />
    </main>
  )
}

