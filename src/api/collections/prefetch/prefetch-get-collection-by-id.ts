import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  GetCollectionByIdSearchParams,
  UseGetCollectionByIdApiParams,
} from "@/types/model/api-collection-by-id";
import { getCollectionById } from "../get-collection-by-id";

export const prefetchCollectionById = async (
  apiParams: UseGetCollectionByIdApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = new QueryClient();

  const { collectionId, includeTopContractDetails } = apiParams || {};

  const parsedParams: GetCollectionByIdSearchParams = {
    collection_ids: collectionId,
    ...(includeTopContractDetails && {
      include_top_contract_details: includeTopContractDetails,
    }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["collection-by-id", parsedParams],
    queryFn: () => getCollectionById(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
