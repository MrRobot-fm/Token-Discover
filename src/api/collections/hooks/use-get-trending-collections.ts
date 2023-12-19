import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetTrendingCollectionsResponseModel,
  GetTrendingCollectionsSearchParams,
  UseGetTrendingCollectionsApiParams,
} from "@/types/model/api-trending-collections";
import { getTrendingCollections } from "../get-trending-collections";

export const useGetTrendingCollections = (
  apiParams?: UseGetTrendingCollectionsApiParams,
  queryOptions?: UseQueryOptions<GetTrendingCollectionsResponseModel>
) => {
  const { chains, interval, limit, includeContractDetails, cursor } =
    apiParams || {};

  const parsedParams: GetTrendingCollectionsSearchParams = useMemo(() => {
    return {
      ...(chains && { chains }),
      ...(cursor && { cursor }),
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
