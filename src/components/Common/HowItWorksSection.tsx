import { ClipboardList, Brain, Heart, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Take the Assessment",
    description: "Complete our RIASEC-based survey to identify your natural interests, passions, and work style preferences.",
    color: "primary"
  },
  {
    icon: Brain,
    number: "02", 
    title: "Academic Analysis",
    description: "Share your grades, test scores, and reading level so we can match careers suited to your abilities.",
    color: "secondary"
  },
  {
    icon: Heart,
    number: "03",
    title: "Character Evaluation",
    description: "Assess your character strengths and select virtues you want to develop for personal growth.",
    color: "primary"
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Get Your Report",
    description: "Receive a comprehensive PDF with career matches, academic focus areas, and character development plans.",
    color: "secondary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
        <span className="section-badge mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Four simple steps to discover your ideal career path
          </p>
        </div>


        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative flex gap-6 lg:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/30 to-secondary/30" />
              )}
              
              {/* Number circle */}
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-sm ${
                step.color === 'primary' 
                  ? 'bg-primary text-primary-foreground shadow-primary' 
                  : 'bg-secondary text-secondary-foreground shadow-secondary'
              } shadow-lg`}>
                {step.number}
              </div>

              {/* Content Card */}
              <div className="flex-1 group">
                <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`hidden sm:flex w-12 h-12 rounded-xl items-center justify-center flex-shrink-0 ${
                      step.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all hidden lg:block" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
