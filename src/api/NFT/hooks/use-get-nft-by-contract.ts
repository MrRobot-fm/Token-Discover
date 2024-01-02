import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetNftByContractResponseModel,
  GetNftsByContractSearchParams,
  UseGetNftsByContractApiParams,
} from "@/types/model/api-nfts-by-contract";
import { getNftByContract } from "../get-nfts-by-contract";

export const UseGetNftByContract = (
  apiParams: UseGetNftsByContractApiParams,
  queryOptions?: GetNftByContractResponseModel
) => {
  const { chain, contractAddress, count, cursor, limit } = apiParams || {};

  const parsedParams: GetNftsByContractSearchParams = useMemo(() => {
    return {
      chain,
      contract_address: contractAddress,
      ...(count && { count }),
      ...(limit && { limit }),
      ...(cursor && { cursor }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["get-nft-by-contract", parsedParams],
    queryFn: () => getNftByContract(parsedParams),
    ...queryOptions,
  });
};
