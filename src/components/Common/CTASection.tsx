import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, Shield, CreditCard } from "lucide-react";

const benefits = [
  { icon: Clock, text: "5-minute assessment" },
  { icon: Shield, text: "100% confidential" },
  { icon: CreditCard, text: "No credit card needed" },
];

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative bg-card/80 backdrop-blur-xl rounded-[2rem] border border-border/50 p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Sparkle decoration */}
            <div className="absolute top-6 right-6">
              <Sparkles className="w-8 h-8 text-primary/20" />
            </div>
            
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Free Today</span>
              </div>
              
              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Find Your{' '}
                <span className="text-gradient-primary">Path</span>?
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students who've discovered their ideal career path 
                and started building character for success.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="min-w-[200px]">
                  Start Assessment
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="lg" className="min-w-[200px]">
                  Create Free Account
                </Button>
              </div>

              {/* Price note */}
              <p className="mt-6 text-sm text-muted-foreground">
                Free to start • Full report available for <span className="font-semibold text-foreground">$29.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
