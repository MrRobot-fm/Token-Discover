import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { getNftByContract } from "@/api/NFT/get-nfts-by-contract";
import type {
  GetNftsByContractSearchParams,
  UseGetNftsByContractApiParams,
} from "@/types/model/api-nfts-by-contract";

export const prefetchNFTByContract = async (
  apiParams: UseGetNftsByContractApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = new QueryClient();

  const { chain, contractAddress, count, cursor, limit } = apiParams || {};

  const parsedParams: GetNftsByContractSearchParams = {
    chain,
    contract_address: contractAddress,
    ...(count && { count }),
    ...(limit && { limit }),
    ...(cursor && { cursor }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["get-nft-by-contract", parsedParams],
    queryFn: () => getNftByContract(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
