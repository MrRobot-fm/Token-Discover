"use client";

import { useState } from "react";
import useBreakpoints from "@/hooks/use-breakpoints";
import { useFetchNextPage } from "@/hooks/use-fetch-next-page";
import { useGetTrendingCollections } from "@/api/collections/hooks/use-get-trending-collections";
import { DiscoverNFTs } from "@/components/organism/discover/DiscoverNfts/DiscoverNFTs";

export default function TrendingNftsPage() {
  const [nextPage, setNextPage] = useState("");

  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data: trendingCollection } = useGetTrendingCollections({
    chains: "ethereum,polygon,solana",
    interval: "24h",
    limit: limitValue,
    cursor: nextPage,
  });

  const { handleFetchNextPage, collectionIds } = useFetchNextPage({
    data: trendingCollection,
    nextCursor: trendingCollection?.next_cursor || "",
    setNextPage,
    keyValue: "collections",
  });

  return (
    <DiscoverNFTs
      collectionId={collectionIds || []}
      fetchNextPage={handleFetchNextPage}
    />
  );
}
