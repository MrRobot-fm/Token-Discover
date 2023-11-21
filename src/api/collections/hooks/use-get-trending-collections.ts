import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetTrendingCollectionsResponseModel,
  UseGetTrendingCollectionsApiParams,
} from "@/types/model/api-trending-collections";
import { getTrendingCollections } from "../get-trending-collections";

export const useGetTrendingCollections = (
  apiParams?: UseGetTrendingCollectionsApiParams,
  queryOptions?: UseQueryOptions<GetTrendingCollectionsResponseModel>
) => {
  const { chain, interval, limit, includeContractDetails } = apiParams || {};

  const parsedParams: UseGetTrendingCollectionsApiParams = useMemo(() => {
    return {
      ...(chain && { chain }),
      ...(interval && { time_period: interval }),
      ...(limit && { limit }),
      ...(includeContractDetails && {
        include_top_contract_details: includeContractDetails,
      }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["trending-collections", parsedParams],
    queryFn: () => getTrendingCollections(parsedParams),
    ...queryOptions,
  });
};
