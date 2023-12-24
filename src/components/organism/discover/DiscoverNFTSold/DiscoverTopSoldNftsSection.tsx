"use client";

import { useState } from "react";
import useBreakpoints from "@/hooks/use-breakpoints";
import { useFetchNextPage } from "@/hooks/use-fetch-next-page";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { DiscoverNFTSold } from "@/components/organism/discover/DiscoverNFTSold/DiscoverNFTSold";

export const DiscoverTopSoldNftsSection = () => {
  const [nextPage, setNextPage] = useState("");

  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: limitValue,
    cursor: nextPage,
  });

  const { collectionIds, handleFetchNextPage } = useFetchNextPage({
    data: topCollection,
    nextCursor: topCollection?.next_cursor || "",
    setNextPage,
    keyValue: "collections",
  });

  return (
    <DiscoverNFTSold
      collectionId={collectionIds || []}
      fetchNextPage={handleFetchNextPage}
    />
  );
};
