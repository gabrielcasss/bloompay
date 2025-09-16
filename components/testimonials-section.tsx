import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Soccer Club Treasurer",
    organization: "Metro United FC",
    content:
      "Bloompay transformed how our club saves for equipment. No more chasing members for payments or dealing with bank fees. The transparency is incredible.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Manager",
    organization: "TechStart Collective",
    content:
      "Our startup team uses Bloompay for office equipment purchases. The rotating system helped us get what we needed without taking on debt.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    role: "Community Organizer",
    organization: "Local Business Network",
    content:
      "The stablecoin integration makes international contributions seamless. Our global members can participate without currency conversion headaches.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">Trusted by Communities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations and clubs are achieving their financial goals with Bloompay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 italic">"{testimonial.content}"</blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.organization}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
