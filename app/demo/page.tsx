import { HowItWorksSection } from "@/components/how-it-works-section"
import { Header } from "@/components/header"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dark Mode Demo</h1>
          <p className="text-muted-foreground mb-6">
            Experience the sleek fintech design with our new dark mode and animated money flow diagram.
          </p>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <HowItWorksSection />
    </div>
  )
}

