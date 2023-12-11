"use client";

import { useMemo } from "react";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { Section } from "@/components/molecules/Section/Section";
import { TopSalesList } from "@/components/molecules/TopSalesList/TopSalesList";
import { styles } from "./top-nft-sold-secton.styles";

export const TopNFTSoldSection = () => {
  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: 10,
  });

  const collectionId = useMemo(() => {
    return topCollection?.collections?.map((collection) => {
      return collection?.collection_id;
    });
  }, [topCollection?.collections]);

  return (
    <Section
      title="Top NFTs sold by collection"
      subTitle="Checkout the Top Sold NFT on the Marketplace"
      hasCta
      ctaProps={{
        icon: "rocket",
        label: "See all",
        href: PAGES_PATH.DISCOVER_TOP_SOLD_NFTS,
      }}
      titleProps={{
        subtitleStyles: "lowercase first-letter:uppercase font-normal",
      }}
    >
      <div className={styles.list_wrapper}>
        <TopSalesList
          collectionId={collectionId?.map((collectionId) => collectionId) || []}
        />
      </div>
    </Section>
  );
};
