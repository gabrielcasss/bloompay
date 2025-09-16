"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useEmailSignupContext } from "@/components/email-signup-provider"

const benefits = [
  "No setup fees or hidden costs",
  "Start with as few as 5 members",
  "Flexible contribution schedules",
  "24/7 customer support",
]

export function CTASection() {
  const { openEmailModal } = useEmailSignupContext()

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl mb-6">
            Transform Your Organization's Financial Future
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading organizations worldwide who've revolutionized their group savings with our enterprise-grade 
            blockchain platform. Start building wealth together, interest-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-primary-foreground/95 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-left font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20 hover:scale-105" 
              onClick={openEmailModal}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Schedule Enterprise Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-primary-foreground/70 mb-4">Trusted by organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Bank-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>
    </section>
  )
}
