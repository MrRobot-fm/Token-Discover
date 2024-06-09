import { DehydratedState, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/providers/get-query-client";
import type { UseGetTopCollectionsApiParams } from "@/types/model/api-top-collections";
import { getTopCollections } from "../get-top-collections";

export const prefetchTopCollections = async (
  apiParams: UseGetTopCollectionsApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = getQueryClient();

  const {
    chains,
    cursor,
    includeTopContractDetails,
    limit,
    period,
    referenceDate,
  } = apiParams || {};

  const parsedParams: UseGetTopCollectionsApiParams = {
    chains,
    ...(limit && { limit }),
    ...(cursor && { cursor }),
    ...(includeTopContractDetails && {
      include_top_contract_details: includeTopContractDetails,
    }),
    ...(period && { time_period: period }),
    ...(referenceDate && { reference_date: referenceDate }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["top-collections", parsedParams],
    queryFn: () => getTopCollections(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
