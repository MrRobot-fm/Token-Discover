"use client";

import { useMemo } from "react";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { DiscoverTopCollection } from "@/components/organism/discover/DiscoverTopCollection/DiscoverTopCollection";

export default function DiscoverTopCollectionsPage() {
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
      <DiscoverTopCollection collectionId={topCollectionIds || []} />
    </div>
  );
}
