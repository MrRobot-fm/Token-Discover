import { DehydratedState, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/providers/get-query-client";
import {
  GetCollectionsByContractSearchParams,
  UseGetCollectionByContractApiParams,
} from "@/types/model/api-collections-by-contract";
import { getCollectionByContract } from "../get-collections-by-contract";

export const prefetchCollectionsByContract = async (
  apiParams: UseGetCollectionByContractApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = getQueryClient();

  const { chain, contractAddress, cursor, includeDetails, limit } =
    apiParams || {};

  const parsedParams: GetCollectionsByContractSearchParams = {
    chain,
    contract_address: contractAddress,
    ...(cursor && { cursor }),
    ...(limit && { limit }),
    ...(includeDetails && { include_details: includeDetails }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["get-collections-by-contract", parsedParams],
    queryFn: () => getCollectionByContract(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
