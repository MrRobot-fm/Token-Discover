"use client";

import { useMemo } from "react";
import { PAGES_PATH } from "@/utils/constants/pages-path";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { Section } from "@/components/molecules/Section/Section";
import { TopCollectionList } from "@/components/molecules/TopCollectionList/TopCollectionList";
import { styles } from "./top-collection-section.styles";

export const TopCollectionSection = () => {
  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: 10,
  });

  const collectionIds = useMemo(() => {
    return topCollection?.collections.map(
      (collection) => collection.collection_id
    );
  }, [topCollection?.collections]);

  return (
    <Section
      title="Top Collection"
      subTitle="Checkout our weekly updated top collection."
      hasCta
      ctaProps={{
        label: "See all",
        icon: "rocketLaunch",
        href: PAGES_PATH.DISCOVER_TOP_COLLECTIONS,
      }}
      titleProps={{
        subtitleStyles: "lowercase first-letter:uppercase font-normal",
      }}
    >
      <div className={styles.topCollectionListWrapper}>
        <TopCollectionList collectionId={collectionIds || []} />
      </div>
    </Section>
  );
};
