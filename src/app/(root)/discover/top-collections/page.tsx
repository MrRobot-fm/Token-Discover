"use client";

import { useMemo, useState } from "react";
import useBreakpoints from "@/hooks/use-breakpoints";
import { useFetchNextPage } from "@/hooks/use-fetch-next-page";
import { useGetTopCollections } from "@/api/collections/hooks/use-get-top-collections";
import { DiscoverTopCollection } from "@/components/organism/discover/DiscoverTopCollection/DiscoverTopCollection";

export default function DiscoverTopCollectionsPage() {
  const [nextPage, setNextPage] = useState("");

  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data: topCollection } = useGetTopCollections({
    chains: "ethereum,polygon,solana",
    period: "7d",
    limit: limitValue,
    cursor: nextPage,
  });

  const { itemsLoaded, handleFetchNextPage } = useFetchNextPage({
    data: topCollection,
    nextCursor: topCollection?.next_cursor || "",
    setNextPage,
    keyValue: "collections",
  });

  const topCollectionIds = useMemo(() => {
    return itemsLoaded?.map((collection) => collection?.collection_id);
  }, [itemsLoaded]);

  return (
    <div>
      <DiscoverTopCollection
        collectionId={topCollectionIds || []}
        fetchNextPage={handleFetchNextPage}
      />
    </div>
  );
}
