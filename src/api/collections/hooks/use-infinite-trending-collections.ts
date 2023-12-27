import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { getTrendingCollections } from "@/api/collections/get-trending-collections";
import type {
  GetInfiniteTrendingCollectionsResponseModel,
  GetTrendingCollectionsResponseModel,
  GetTrendingCollectionsSearchParams,
  UseGetTrendingCollectionsApiParams,
} from "@/types/model/api-trending-collections";

export const useGetInfiniteTrendingCollections = (
  apiParams?: UseGetTrendingCollectionsApiParams,
  queryOptions?: UseInfiniteQueryOptions<
    GetTrendingCollectionsResponseModel &
      GetInfiniteTrendingCollectionsResponseModel
  >
) => {
  const { chains, interval, limit, includeContractDetails, cursor } =
    apiParams || {};

  const parsedParams: GetTrendingCollectionsSearchParams = useMemo(() => {
    return {
      ...(chains && { chains }),
      ...(cursor && { cursor }),
      ...(interval && { time_period: interval }),
      ...(includeContractDetails && {
        include_top_contract_details: includeContractDetails,
      }),
    };
  }, [apiParams]);

  return useInfiniteQuery({
    queryKey: ["trending-collections", limit, parsedParams],
    queryFn: ({ pageParam }) =>
      getTrendingCollections({
        cursor: pageParam as string,
        limit,
        ...parsedParams,
      }),
    ...queryOptions,
    initialPageParam: cursor,
    getNextPageParam: (lastPage, _pages) => lastPage?.next_cursor,
  });
};
