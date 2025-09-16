import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, DollarSign, RotateCcw, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Form Your Circle",
    description:
      "Gather your team, club, or organization members to create a savings circle. Set your contribution amount and schedule.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Make Contributions",
    description:
      "Each member contributes the agreed amount in stablecoin. Smart contracts ensure secure and transparent handling.",
  },
  {
    icon: RotateCcw,
    step: "03",
    title: "Rotate Payouts",
    description:
      "Members take turns receiving the full pool amount. The rotation order is predetermined and transparent to all.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Achieve Goals",
    description:
      "Complete your savings cycle with zero interest paid. Use your payout for equipment, events, or personal goals.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent, and effective. Join thousands who are already saving smarter with Bloompay.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-card/80 to-muted/50 border border-border rounded-2xl p-8 max-w-5xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Interactive Money Flow</h3>
            
            {/* Organic Flower-like Diagram */}
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* Central Treasury (Flower Center) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 border-4 border-primary/40 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-500 shadow-2xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">$500</div>
                      <div className="text-sm text-muted-foreground font-medium">Treasury Pool</div>
                    </div>
                  </div>
                  {/* Pulsing ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full border border-accent/20 animate-ping"></div>
                </div>
              </div>

              {/* Member Petals (Arranged like flower petals) */}
              {[0, 1, 2, 3, 4].map((index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180); // 72 degrees apart, starting from top
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    {/* Connecting stem */}
                    <div 
                      className="absolute w-1 bg-gradient-to-r from-accent/60 to-primary/60 origin-bottom group-hover:from-accent group-hover:to-primary transition-all duration-500"
                      style={{
                        height: `${radius - 40}px`,
                        transform: `rotate(${angle + Math.PI/2}rad)`,
                        bottom: '50%',
                        left: '50%',
                        transformOrigin: 'bottom center',
                      }}
                    />
                    
                    {/* Member petal */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-emerald-500/20 border-3 border-accent/60 flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">${100}</div>
                          <div className="text-xs text-muted-foreground">Member {index + 1}</div>
                        </div>
                      </div>
                      
                      {/* Floating contribution indicator */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold shadow-md group-hover:animate-bounce">
                        +
                      </div>
                      
                      {/* Active recipient indicator */}
                      {index === 2 && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Trophy className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Animated flow particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${30 + (i * 5)}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="mt-12 flex justify-center space-x-4">
              <button className="px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary transition-all duration-300 hover:scale-105">
                Start Animation
              </button>
              <button className="px-6 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-full text-sm font-medium text-accent transition-all duration-300 hover:scale-105">
                Next Payout
              </button>
            </div>

            <div className="mt-8 text-center bg-muted/50 rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Live Example:</strong> Watch how 5 members contribute $100 each to create a $500 monthly pool. 
                Each member receives the full amount once during the cycle - completely interest-free.
              </p>
              <div className="mt-4 flex justify-center items-center space-x-8 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Contributing Member</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  <span>Current Recipient</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Smart Contract Pool</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border text-center">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-foreground">{step.step}</span>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
