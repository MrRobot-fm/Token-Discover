"use client";

import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { Section } from "@/components/molecules/Section/Section";
import TopCollectionList from "@/components/molecules/TopCollectionList/TopCollectionList";

export const TopCollectionSection = () => {
  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: 10,
  });

  return (
    <Section
      title="Trending Collection"
      subTitle="Checkout our weekly updated trending collection."
    >
      <div className="w-full gap-[5rem] base:hidden base:grid-cols-1 sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        <TopCollectionList hasCarousel topCollection={topCollection} />
      </div>

      <div className="w-full gap-[5rem] base:grid base:grid-cols-1 sm:grid-cols-1 md:hidden">
        <TopCollectionList hasCarousel={false} topCollection={topCollection} />
      </div>
    </Section>
  );
};
