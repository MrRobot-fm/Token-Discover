"use client";

import { useMemo } from "react";
import { useGetTrendingCollections } from "@/api/collections/hooks/use-get-trending-collections";
import { DiscoverNFTs } from "@/components/organism/discover/DiscoverNfts/DiscoverNFTs";

export default function TrendingNftsPage() {
  const { data: trendingCollection } = useGetTrendingCollections({
    chain: "ethereum",
    interval: "24h",
  });

  const trendingCollectionIds = useMemo(() => {
    return trendingCollection?.collections?.map(
      (collection) => collection.collection_id
    );
  }, [trendingCollection?.collections]);

  return (
    <div>
      <DiscoverNFTs collectionId={trendingCollectionIds || []} />
    </div>
  );
}
