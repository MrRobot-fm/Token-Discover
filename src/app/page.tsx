import { DiscoverNftSection } from "@/components/organism/DiscoverNftSection/DiscoverNftSection";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";
import { TopCreatorSection } from "@/components/organism/TopCreatorSection/TopCreatorSection";
import { TrendingCollectionSection } from "@/components/organism/TrendingCollectionSection/TrendingCollectionSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center base:px-[3rem] md:px-[10rem] lg:px-[5rem]">
      <HeroSection />
      <TrendingCollectionSection />
      <TopCreatorSection />
      <DiscoverNftSection />
    </div>
  );
}
