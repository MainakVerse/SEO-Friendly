import { HeroSection } from "@/components/hero-section"
import { TrialSection } from "@/components/trial-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrialSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
