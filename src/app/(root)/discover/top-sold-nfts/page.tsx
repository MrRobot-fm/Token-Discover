"use client";

import { useMemo } from "react";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { DiscoverNFTSold } from "@/components/organism/discover/DiscoverNFTSold/DiscoverNFTSold";

export default function TopSoldNFTsPage() {
  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
  });

  const topCollectionIds = useMemo(() => {
    return topCollection?.collections?.map(
      (collection) => collection.collection_id
    );
  }, [topCollection?.collections]);

  return (
    <div>
      <DiscoverNFTSold collectionId={topCollectionIds || []} />
    </div>
  );
}
