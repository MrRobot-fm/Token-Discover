"use client";

import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { Section } from "@/components/molecules/Section/Section";
import TopCollectionList from "@/components/molecules/TopCollectionList/TopCollectionList";
import { styles } from "./top-collection-section.styles";

export const TopCollectionSection = () => {
  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: 10,
  });

  return (
    <Section
      title="Top Collection"
      subTitle="Checkout our weekly updated top collection."
    >
      <div className={styles.desktopCollectionListWrapper}>
        <TopCollectionList hasCarousel topCollection={topCollection} />
      </div>

      <div className={styles.mobileCollectionListWrapper}>
        <TopCollectionList hasCarousel={false} topCollection={topCollection} />
      </div>
    </Section>
  );
};
