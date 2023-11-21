"use client";

import { useMemo } from "react";
import { useGetTrendingCollections } from "@/api/collections/hooks/use-get-trending-collections";
import { HighlightedNftList } from "@/components/molecules/HighlightedNftList/HighlightedNftList";
import { Section } from "@/components/molecules/Section/Section";

export const DiscoverNftSection = () => {
  const { data: trendingCollection } = useGetTrendingCollections({
    limit: 10,
    chain: "ethereum",
    interval: "24h",
  });

  const collectionId = useMemo(() => {
    return trendingCollection?.collections?.map((collection) => {
      return collection?.collection_id;
    });
  }, [trendingCollection?.collections]);

  return (
    <Section
      title="Discover More NFTs"
      subTitle="Explore new trending NFTs"
      ctaProps={{ label: "see all", icon: "eye" }}
      hasCta
    >
      <div className="w-full gap-[3rem] base:hidden md:grid md:grid-cols-2 lg:grid-cols-3">
        <HighlightedNftList hasCarousel {...{ collectionId }} />
      </div>

      <div className="w-full gap-[5rem] base:grid base:grid-cols-1 sm:grid-cols-1 md:hidden">
        <HighlightedNftList {...{ collectionId }} />
      </div>
    </Section>
  );
};
