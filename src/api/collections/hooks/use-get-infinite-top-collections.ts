import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { getTopCollections } from "@/api/collections/get-top-collections";
import type {
  GetInfiniteTopCollectionsResponseModel,
  GetTopCollectionsResponseModel,
  GetTopCollectionsSearchParams,
  UseGetTopCollectionsApiParams,
} from "@/types/model/api-top-collections";

export const useGetInfiniteTopCollections = (
  apiParams: UseGetTopCollectionsApiParams,
  queryOptions?: UseInfiniteQueryOptions<
    GetTopCollectionsResponseModel & GetInfiniteTopCollectionsResponseModel
  >
) => {
  const {
    chains,
    cursor,
    includeTopContractDetails,
    limit,
    period,
    referenceDate,
  } = apiParams || {};

  const parsedParams: GetTopCollectionsSearchParams = useMemo(() => {
    return {
      chains,
      ...(cursor && { cursor }),
      ...(includeTopContractDetails && {
        include_top_contract_details: includeTopContractDetails,
      }),
      ...(period && { time_period: period }),
      ...(referenceDate && { reference_date: referenceDate }),
    };
  }, [apiParams]);

  return useInfiniteQuery({
    queryKey: ["top-collections", { limit }, parsedParams],
    queryFn: ({ pageParam }) =>
      getTopCollections({
        cursor: pageParam as string,
        limit,
        ...parsedParams,
      }),
    initialPageParam: cursor,
    ...queryOptions,
    getNextPageParam: (lastPage, _pages) => lastPage?.next_cursor,
  });
};
