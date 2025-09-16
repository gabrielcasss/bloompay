import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FinancialDashboardSection } from "@/components/financial-dashboard-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { EmailSignupProvider } from "@/components/email-signup-provider"

export default function HomePage() {
  return (
    <EmailSignupProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <FinancialDashboardSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </EmailSignupProvider>
  )
}
