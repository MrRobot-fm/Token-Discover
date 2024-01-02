import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetInfiniteNftByContractResponseModel,
  GetNftByContractResponseModel,
  GetNftsByContractSearchParams,
  UseGetNftsByContractApiParams,
} from "@/types/model/api-nfts-by-contract";
import { getNftByContract } from "../get-nfts-by-contract";

export const useGetInfiniteNftByContract = (
  apiParams: UseGetNftsByContractApiParams,
  queryOptions?: UseInfiniteQueryOptions<
    GetNftByContractResponseModel & GetInfiniteNftByContractResponseModel
  >
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

  return useInfiniteQuery({
    queryKey: ["get-nft-by-contract", parsedParams],
    queryFn: ({ pageParam }) =>
      getNftByContract({ cursor: pageParam as string, ...parsedParams }),
    ...queryOptions,
    initialPageParam: cursor,
    getNextPageParam: (lastPage, _pages) => lastPage?.next_cursor,
  });
};
