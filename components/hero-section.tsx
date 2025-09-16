"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, DollarSign, BarChart3, Building } from "lucide-react"
import { useEmailSignupContext } from "@/components/email-signup-provider"

export function HeroSection() {
  const { openEmailModal } = useEmailSignupContext()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Trust indicators */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <Shield className="h-4 w-4" />
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent border border-accent/20">
              <TrendingUp className="h-4 w-4" />
              <span>0% Fees</span>
            </div>
            <div className="flex items-center space-x-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-500/20">
              <Building className="h-4 w-4" />
              <span>Enterprise Ready</span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              Group Finance
            </span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl lg:max-w-4xl lg:mx-auto leading-relaxed">
            Revolutionize how your organization saves and grows together. Blockchain-powered rotating credit 
            associations with transparent, automated, and secure stablecoin transactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300" onClick={openEmailModal}>
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-2 hover:bg-muted/50 transition-all duration-300">
              View Demo
              <BarChart3 className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Financial metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Organizations</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">$2.1M+</div>
              <div className="text-sm text-muted-foreground">Total Saved</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">0%</div>
              <div className="text-sm text-muted-foreground">Interest Fees</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
    </section>
  )
}
