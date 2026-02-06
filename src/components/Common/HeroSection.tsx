import { ArrowRight, Play, CreditCard, Clock, Zap, Briefcase, BookOpen, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import cube1 from "@/assets/cube-1.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
      {/* Floating cubes decoration */}
      <Image
        src={cube1}
        alt=""
        width={96}
        height={96}
       className="absolute top-20 right-[10%] w-24 h-24 opacity-60 animate-float"
      />
      <Image
        src={cube1}
        alt=""
        width={64}
        height={64}
        className="absolute top-40 right-[25%] w-16 h-16 opacity-40 animate-float-delayed"
      />
      <Image
        src={cube1}
        alt=""
        width={80}
        height={80}
        className="absolute bottom-20 right-[5%] w-20 h-20 opacity-50 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <Image
        src={cube1}
        alt=""
        width={56}
        height={56}
        className="absolute top-60 left-[5%] w-14 h-14 opacity-30 animate-float-delayed"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="section-badge mb-6">
              <Zap className="w-4 h-4" />
              <span>Career & Character Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Find Your <span className="text-primary">Perfect Career</span>
              <br />
              Build Your <span className="text-primary">Character</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The RIASEC-based assessment that matches students with ideal career paths while developing essential character strengths for success.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="btn-primary text-base">
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" className="btn-secondary text-base">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>5-minute survey</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Feature cards & Stats */}
          <div className="relative">
            {/* Feature cards stack */}
            <div className="space-y-4">
              <div className="card-feature flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">500+ Career Paths</h3>
                  <p className="text-sm text-muted-foreground">Discover careers matched to your RIASEC profile, interests, and strengths in real-time.</p>
                </div>
              </div>
              
              <div className="card-feature flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Academic Roadmap</h3>
                  <p className="text-sm text-muted-foreground">Get a detailed path with courses and subjects that align with your career goals.</p>
                </div>
              </div>
              
              <div className="card-feature flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Character Growth</h3>
                  <p className="text-sm text-muted-foreground">Develop essential life skills and habits to support your career and life goals.</p>
                </div>
              </div>
            </div>
            
            {/* Stats row */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center flex items-center gap-1">
                <div>
                  <div className="text-3xl font-bold text-foreground flex items-center gap-1">
                    4.9
                    <Star className="w-5 h-5 text-star-yellow fill-star-yellow" />
                  </div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;