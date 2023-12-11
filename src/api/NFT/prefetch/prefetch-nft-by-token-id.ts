import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import type {
  GetNftByTokenIdSearchParams,
  UseGetNftByTokenIdApiParams,
} from "@/types/model/api-nft-by-token-id";
import { getNftByTokenId } from "../get-nft-by-token-id";

export const prefetchNFTByTokenId = async (
  apiParams: UseGetNftByTokenIdApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = new QueryClient();

  const { chain, contractAddress, tokenId } = apiParams;

  const parsedParams: GetNftByTokenIdSearchParams = {
    chain,
    contract_address: contractAddress,
    token_id: tokenId,
  };

  await queryClient.prefetchQuery({
    queryKey: ["nft-by-token-id", parsedParams],
    queryFn: () => getNftByTokenId(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
