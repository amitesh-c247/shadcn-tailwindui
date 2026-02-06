import AudienceSection from "@/components/Common/AudienceSection";
import CTASection from "@/components/Common/CTASection";
import HeroSection from "@/components/Common/HeroSection";
import HowItWorksSection from "@/components/Common/HowItWorksSection";
import ReportPreviewSection from "@/components/Common/ReportPreviewSection";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ReportPreviewSection />
      <AudienceSection />
      <CTASection />
    </>
  );
}