import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchTopCollections } from "@/api/collections/prefetch/prefetch-top-collections";
import { prefetchTrendingCollections } from "@/api/collections/prefetch/prefetch-trending-collections";
import { DiscoverNftSection } from "@/components/organism/DiscoverNftSection/DiscoverNftSection";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";
import { TopCollectionSection } from "@/components/organism/TopCollectionSection/TopCollectionSection";
import { TopCreatorSection } from "@/components/organism/TopCreatorSection/TopCreatorSection";

export default async function Home() {
  const { dehydrateState: dehydrateTopCollections } =
    await prefetchTopCollections({
      chains: "ethereum,polygon,solana",
      period: "7d",
      limit: 10,
    });

  const { dehydrateState: dehydrateTrendingCollections } =
    await prefetchTrendingCollections({
      limit: 10,
      chain: "ethereum",
      interval: "24h",
    });

  return (
    <div className="flex w-full flex-col items-center base:px-[3rem] md:px-[10rem] lg:px-[5rem]">
      <HeroSection />
      <HydrationBoundary state={dehydrateTopCollections}>
        <TopCollectionSection />
      </HydrationBoundary>
      <TopCreatorSection />
      <HydrationBoundary state={dehydrateTrendingCollections}>
        <DiscoverNftSection />
      </HydrationBoundary>
    </div>
  );
}
