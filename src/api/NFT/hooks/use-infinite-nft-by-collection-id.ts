import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { getNftByCollectionId } from "@/api/NFT/get-nft-by-collection-id";
import type {
  GetInfiniteNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdSearchParams,
  UseGetNftByCollectionsIdApiParams,
} from "@/types/model/api-nft-by-collection-id";

export const useGetInfiniteNftCollectionById = (
  apiParams: UseGetNftByCollectionsIdApiParams,
  queryOptions?: UseInfiniteQueryOptions<
    GetNftByCollectionsIdResponseModel &
      GetInfiniteNftByCollectionsIdResponseModel
  >
) => {
  const { limit, cursor, collectionId } = apiParams || {};

  const parsedParams: GetNftByCollectionsIdSearchParams = useMemo(() => {
    return {
      collection_id: collectionId,
      ...(limit && { limit }),
      ...(cursor && { cursor }),
    };
  }, [apiParams]);

  return useInfiniteQuery({
    queryKey: ["getNftCollectionById", parsedParams],
    queryFn: ({ pageParam }) =>
      getNftByCollectionId({ cursor: pageParam as string, ...parsedParams }),
    ...queryOptions,
    initialPageParam: cursor,
    getNextPageParam: (lastPage, _pages) => lastPage?.next_cursor,
  });
};
