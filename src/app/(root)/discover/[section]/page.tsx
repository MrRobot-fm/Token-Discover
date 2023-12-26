import { notFound } from "next/navigation";
import { useCallback } from "react";
import v from "voca";
import { DISCOVER_PARAMS } from "@/utils/constants/pages-path";
import { DiscoverTopSoldNftsSection } from "@/components/organism/discover/DiscoverNFTSold/DiscoverTopSoldNftsSection";
import { DiscoverTrendingNftsSection } from "@/components/organism/discover/DiscoverNfts/DiscoverTrendingNftsSection";
import { DiscoverTopCollectionsSection } from "@/components/organism/discover/DiscoverTopCollection/DiscoverTopCollectionsSection";

export const generateMetadata = ({
  params,
}: {
  params: { section: string };
}) => {
  const { section } = params || {};
  return {
    title: `${v.titleCase(section).replaceAll("-", " ")} | Token Discover`,
  };
};

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

  return <>{sectionRendered()}</>;
}
