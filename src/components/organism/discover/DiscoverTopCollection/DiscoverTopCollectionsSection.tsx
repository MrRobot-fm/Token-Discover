"use client";

import useBreakpoints from "@/hooks/use-breakpoints";
import { useGetInfiniteTopCollections } from "@/api/collections/hooks/use-get-infinite-top-collections";
import { DiscoverTopCollection } from "@/components/organism/discover/DiscoverTopCollection/DiscoverTopCollection";

export const DiscoverTopCollectionsSection = () => {
  const { isBase, isMobile, isTablet } = useBreakpoints();

  const limitValue = isBase || isMobile || isTablet ? 10 : 20;

  const { data, fetchNextPage, hasNextPage } = useGetInfiniteTopCollections({
    chains: "ethereum",
    period: "7d",
    limit: limitValue,
  });

  const collectionIds = data?.pages?.flatMap((item) =>
    item?.collections?.map((item) => item?.collection_id)
  );

  return (
    <DiscoverTopCollection
      collectionId={collectionIds || []}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
};
