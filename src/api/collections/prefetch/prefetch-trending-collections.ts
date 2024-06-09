import { DehydratedState, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/providers/get-query-client";
import { getTrendingCollections } from "@/api/collections/get-trending-collections";
import type { UseGetTrendingCollectionsApiParams } from "@/types/model/api-trending-collections";

export const prefetchTrendingCollections = async (
  apiParams?: UseGetTrendingCollectionsApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = getQueryClient();

  const { chains, interval, limit, includeContractDetails } = apiParams || {};

  const parsedParams: UseGetTrendingCollectionsApiParams = {
    ...(chains && { chains }),
    ...(interval && { time_period: interval }),
    ...(limit && { limit }),
    ...(includeContractDetails && {
      include_top_contract_details: includeContractDetails,
    }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["trending-collections", parsedParams],
    queryFn: () => getTrendingCollections(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
