import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getCollectionByContract } from "@/api/collections/get-collections-by-contract";
import type {
  GetCollectionByContractResponseModel,
  GetCollectionsByContractSearchParams,
  UseGetCollectionByContractApiParams,
} from "@/types/model/api-collections-by-contract";

export const useGetCollectionsByContract = (
  apiParams: UseGetCollectionByContractApiParams,
  queryOptions?: GetCollectionByContractResponseModel
) => {
  const { chain, contractAddress, cursor, includeDetails, limit } =
    apiParams || {};

  const parsedParams: GetCollectionsByContractSearchParams = useMemo(() => {
    return {
      chain,
      contract_address: contractAddress,
      ...(cursor && { cursor }),
      ...(limit && { limit }),
      ...(includeDetails && { include_details: includeDetails }),
    };
  }, [apiParams]);
  return useQuery({
    queryKey: ["get-collections-by-contract", parsedParams],
    queryFn: () => getCollectionByContract(parsedParams),
    ...queryOptions,
  });
};
