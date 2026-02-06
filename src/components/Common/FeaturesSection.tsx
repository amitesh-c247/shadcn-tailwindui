import { Briefcase, BookOpen, Heart, Rocket, Sparkles, Target, TrendingUp, Users } from "lucide-react";

const mainFeatures = [
  {
    icon: Briefcase,
    title: "Career Matches",
    description: "Top 5 career paths matched to your RIASEC profile with salary ranges, job outlook, and required education.",
    color: "primary",
    stats: "500+ Careers"
  },
  {
    icon: BookOpen,
    title: "Academic Roadmap",
    description: "Personalized study plans, skill development tips, and extracurricular recommendations for your goals.",
    color: "secondary",
    stats: "Personalized"
  },
  {
    icon: Heart,
    title: "Character Growth",
    description: "3 priority virtues to develop with daily practices, challenges, and reflection prompts.",
    color: "primary",
    stats: "12 Virtues"
  },
  {
    icon: Rocket,
    title: "Ongoing Support",
    description: "Monthly resources, career exploration guides, and access to premium pathway options.",
    color: "secondary",
    stats: "Lifetime Access"
  }
];

const highlights = [
  { icon: Target, text: "RIASEC Certified Assessment" },
  { icon: TrendingUp, text: "95% Career Match Accuracy" },
  { icon: Users, text: "10,000+ Students Guided" },
  { icon: Sparkles, text: "Instant Digital Report" }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            What You Get
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your Complete <span className="text-gradient-secondary">Report</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for career success and personal growth
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mainFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity ${
                feature.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'
              }`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    feature.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    feature.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {feature.stats}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
