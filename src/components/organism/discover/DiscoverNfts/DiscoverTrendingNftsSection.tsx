"use client";

import useBreakpoints from "@/hooks/use-breakpoints";
import { useGetInfiniteTrendingCollections } from "@/api/collections/hooks/use-infinite-trending-collections";
import { DiscoverNFTs } from "@/components/organism/discover/DiscoverNfts/DiscoverNFTs";

export const DiscoverTrendingNftsSection = () => {
  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data, fetchNextPage } = useGetInfiniteTrendingCollections({
    chains: "ethereum,polygon,solana",
    interval: "24h",
    limit: limitValue,
  });

  const collectionIds = data?.pages?.flatMap(
    (item) => item?.collections?.map((item) => item?.collection_id)
  );

  return (
    <DiscoverNFTs
      collectionId={collectionIds || []}
      fetchNextPage={fetchNextPage}
    />
  );
};
