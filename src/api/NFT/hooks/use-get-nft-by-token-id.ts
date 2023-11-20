import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getNftByTokenId } from "@/api/NFT/get-nft-by-token-id";
import type {
  GetNftByTokenIdResponseModel,
  UseGetNftByTokenIdApiParams,
} from "@/types/model/api-nft-by-token-id";

export const useGetNftByTokenId = (
  apiParams: UseGetNftByTokenIdApiParams,
  queryOptions?: UseQueryOptions<GetNftByTokenIdResponseModel>
) => {
  const { chain, contractAddress, tokenId } = apiParams;

  const parsedParams = useMemo(() => {
    return {
      chain,
      contract_address: contractAddress,
      token_id: tokenId,
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["nft-by-token-id", parsedParams],
    queryFn: () => getNftByTokenId(parsedParams),
    ...queryOptions,
  });
};
