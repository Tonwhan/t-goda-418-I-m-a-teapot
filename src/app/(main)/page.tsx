import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { TrendingDestinations } from "@/components/home/trending-destinations";
import { PromoBanner } from "@/components/home/promo-banner";
import { Newsletter } from "@/components/home/newsletter";
import { MainFooter } from "@/components/layout/main-footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-16 md:gap-24 h-[3110px] overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <TrendingDestinations />
      <PromoBanner />
      <Newsletter />
      <MainFooter />
    </div>
  );
}
