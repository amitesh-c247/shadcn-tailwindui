import { GraduationCap, Users, School, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    subtitle: "Ages 12-22",
    description: "Discover your strengths, explore 500+ career paths, and build character traits that lead to success.",
    features: ["Personalized career matches", "Academic focus areas", "Character development plan"],
    color: "primary",
    cta: "Start Your Journey"
  },
  {
    icon: Users,
    title: "Parents",
    subtitle: "Guide Your Child",
    description: "Help your children discover their potential and make informed decisions about their educational future.",
    features: ["Understand their interests", "Support their growth", "Track progress together"],
    color: "secondary",
    cta: "Learn More"
  },
  {
    icon: School,
    title: "Educators",
    subtitle: "Schools & Counselors",
    description: "Powerful tools for guiding students in career exploration and character development at scale.",
    features: ["Bulk assessments", "Class analytics", "Counselor dashboard"],
    color: "primary",
    cta: "Get School Access"
  }
];

const AudienceSection = () => {
  return (
    <section id="for-who" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Who We Help
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built For <span className="text-gradient-primary">Everyone</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a student, parent, or educator — we've got you covered
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Top colored bar */}
              <div className={`h-2 ${
                audience.color === 'primary' ? 'bg-primary' : 'bg-secondary'
              }`} />
              
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    audience.color === 'primary' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  } shadow-lg`}>
                    <audience.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {audience.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        audience.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={audience.color === 'primary' ? 'default' : 'outline'} 
                  className="w-full group/btn"
                >
                  {audience.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
