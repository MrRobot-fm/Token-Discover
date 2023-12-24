import { notFound } from "next/navigation";
import { useCallback } from "react";
import { discoverTabsMaps } from "@/utils/constants/discover-tabs-object-map";
import { DISCOVER_PARAMS } from "@/utils/constants/pages-path";
import { DiscoverTab } from "@/components/atoms/DiscoverTab/DiscoverTab";
import { ScrollToTop } from "@/components/atoms/ScrollToTop/ScrollToTop";
import { Section } from "@/components/molecules/Section/Section";
import { DiscoverTopSoldNftsSection } from "@/components/organism/discover/DiscoverNFTSold/DiscoverTopSoldNftsSection";
import { DiscoverTrendingNftsSection } from "@/components/organism/discover/DiscoverNfts/DiscoverTrendingNftsSection";
import { DiscoverTopCollectionsSection } from "@/components/organism/discover/DiscoverTopCollection/DiscoverTopCollectionsSection";

export default function DiscoverPage({
  params,
}: {
  params: { section: string };
}) {
  const { section } = params || {};

  const sectionRendered = useCallback(() => {
    if (section === DISCOVER_PARAMS.TOP_COLLECTIONS) {
      return <DiscoverTopCollectionsSection />;
    }
    if (section === DISCOVER_PARAMS.TOP_SOLD_NFTS) {
      return <DiscoverTopSoldNftsSection />;
    }

    if (section === DISCOVER_PARAMS.TRENDING_NFTS) {
      return <DiscoverTrendingNftsSection />;
    }

    return notFound();
  }, [section]);

  return (
    <div className="flex w-full justify-center">
      <Section
        title="Discover our NFTs and Collections"
        subTitle="Browse through top sold and trending NTFs and our weekly top collection."
        sectionStyles="base:px-[3rem] md:px-[10rem] lg:px-[5rem] base:py-[3.5rem] md:py-[7rem]"
        titleProps={{
          titleStyles: "base:heading3 md:heading2",
          subtitleStyles: "lowercase first-letter:uppercase font-normal",
        }}
      >
        <DiscoverTab discoverTabsMap={discoverTabsMaps} />
        {sectionRendered()}
      </Section>
      <ScrollToTop />
    </div>
  );
}
