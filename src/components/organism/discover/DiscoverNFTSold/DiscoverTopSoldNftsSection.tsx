"use client";

import useBreakpoints from "@/hooks/use-breakpoints";
import { useGetInfiniteTopCollections } from "@/api/collections/hooks/use-get-infinite-top-collections";
import { DiscoverNFTSold } from "@/components/organism/discover/DiscoverNFTSold/DiscoverNFTSold";

export const DiscoverTopSoldNftsSection = () => {
  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data, fetchNextPage, hasNextPage } = useGetInfiniteTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: limitValue,
  });

  const collectionIds = data?.pages?.flatMap(
    (item) => item?.collections?.map((item) => item?.collection_id)
  );

  return (
    <DiscoverNFTSold
      collectionId={collectionIds || []}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
};
