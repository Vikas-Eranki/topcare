import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturesSection from "@/components/FeaturesSection";
import MinderyKids from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import ParentHubSection from "@/components/ParentHubSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterCTASection from "@/components/FooterCTASection";
import "../App.css";
import "../index.css";
const Index = () => {
  return (
    <div className="min-h-screen md:px-32">
      <Header />
      <HeroSection />
      <WhySection />
      <ProgramsSection />
      <FeaturesSection />
      <MinderyKids />
      <PricingSection />
      <ParentHubSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterCTASection />
    </div>
  );
};

export default Index;
