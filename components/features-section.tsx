import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Banknote, TrendingUp, Globe, Lock, Building2, BarChart3, CreditCard } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Enterprise-Grade Infrastructure",
    description: "Built for scale with institutional-level security, compliance, and performance standards.",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    icon: Banknote,
    title: "Zero-Fee Architecture",
    description: "Eliminate traditional banking fees with our efficient stablecoin-powered savings protocol.",
    color: "text-accent",
    bgColor: "bg-accent/10", 
    borderColor: "border-accent/20"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Multi-signature wallets, smart contract audits, and institutional custody solutions.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Advanced treasury management with live performance tracking and automated reporting.",
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    icon: Globe,
    title: "Global Treasury Management",
    description: "Seamless multi-currency operations with instant cross-border settlement capabilities.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: CreditCard,
    title: "Automated Compliance",
    description: "Built-in regulatory compliance with automated KYC/AML and transaction monitoring.",
    color: "text-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">Enterprise Financial Infrastructure</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Institutional-grade technology powering the future of collaborative finance and treasury management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border ${feature.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-card/80 backdrop-blur-sm`}>
              <CardHeader>
                <div className={`h-14 w-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
