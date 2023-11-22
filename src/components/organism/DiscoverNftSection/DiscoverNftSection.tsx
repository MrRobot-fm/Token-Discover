"use client";

import { useMemo } from "react";
import { useGetTrendingCollections } from "@/api/collections/hooks/use-get-trending-collections";
import { HighlightedNftList } from "@/components/molecules/HighlightedNftList/HighlightedNftList";
import { Section } from "@/components/molecules/Section/Section";
import { styles } from "./discover-nft-section.styles";

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
      <div className={styles.desktopListWrapper}>
        <HighlightedNftList hasCarousel {...{ collectionId }} />
      </div>

      <div className={styles.mobileListWrapper}>
        <HighlightedNftList {...{ collectionId }} />
      </div>
    </Section>
  );
};
