import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { BadgesSection } from "@/components/sections/BadgesSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MixedCardsSection } from "@/components/sections/MixedCardsSection";
import { TemplatesSection } from "@/components/sections/TemplatesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0c0d0d] text-white">
      <TopBanner />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BadgesSection />
        <ShowcaseSection />
        <ServicesSection />
        <PricingSection />
        <MixedCardsSection />
        <TemplatesSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
