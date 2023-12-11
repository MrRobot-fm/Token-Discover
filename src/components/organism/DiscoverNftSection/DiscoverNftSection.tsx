"use client";

import { useMemo } from "react";
import { PAGES_PATH } from "@/utils/constants/pages-path";
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
      ctaProps={{
        label: "see all",
        icon: "eye",
        href: PAGES_PATH.DISCOVER_TRENDING_NFTS,
      }}
      titleProps={{
        subtitleStyles: "lowercase first-letter:uppercase font-normal",
      }}
      hasCta
    >
      <div className={styles.discoverNFTListWrapper}>
        <HighlightedNftList collectionId={collectionId || []} />
      </div>
    </Section>
  );
};
