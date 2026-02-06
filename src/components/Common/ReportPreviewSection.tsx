import { Check, Briefcase, BookOpen, Heart, Headphones, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import reportPreview from "@/assets/report-preview.png";

const features = [
  {
    icon: Briefcase,
    title: "Career Recommendations",
    items: [
      "Top 5 careers matched to your RIASEC profile",
      "Required skills, tasks and skills for each career",
      "Educational pathways and degree requirements",
      "Salary ranges and job outlook information",
    ],
  },
  {
    icon: BookOpen,
    title: "Academic Focus Areas",
    items: [
      "Reading improvement strategies and resources",
      "Major skill development recommendations",
      "Extracurricular activities to strengthen your profile",
      "Personalized study tips and academic goals",
    ],
  },
  {
    icon: Heart,
    title: "Character Development Plan",
    items: [
      "Top priority virtues to focus on developing",
      "Actionable virtue and daily practices",
      "Suggested activities for character growth",
      "Integrated tracking and reflection prompts",
    ],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    items: [
      "Monthly educational resources and tips",
      "Career exploration updates and guides",
      "Character development challenges",
      "Access to mentors and community guidance",
    ],
  },
];

const ReportPreviewSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">
            Sample Report Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See exactly what you'll receive. Preview a limited snapshot below or view the complete sample report.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Report preview image */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-4 shadow-xl">
              <div className="bg-dark-surface rounded-xl overflow-hidden">
                <Image 
                  src={reportPreview} 
                  alt="Sample Report Preview" 
                  className="w-full h-auto"
                  width={600}
                  height={800}
                />
              </div>
              <div className="mt-4 p-4 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Sample Report Preview</h4>
                    <p className="text-xs text-muted-foreground">This is a limited preview. Click below to see the full sample.</p>
                  </div>
                </div>
                <Button className="w-full btn-primary">
                  View Full Sample
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right - Feature list */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">What's Included In Your Report</h3>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  </div>
                  <ul className="space-y-2 pl-13">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportPreviewSection;
