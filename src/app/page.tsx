import AudienceSection from "@/components/Common/AudienceSection";
import CTASection from "@/components/Common/CTASection";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import HeroSection from "@/components/Common/HeroSection";
import HowItWorksSection from "@/components/Common/HowItWorksSection";
import ReportPreviewSection from "@/components/Common/ReportPreviewSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ReportPreviewSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </>
  );
}
