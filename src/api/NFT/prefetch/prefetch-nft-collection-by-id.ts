import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import {
  GetNftByCollectionsIdSearchParams,
  UseGetNftByCollectionsIdApiParams,
} from "@/types/model/api-nft-by-collection-id";
import { getNftByCollectionId } from "../get-nft-by-collection-id";

export const prefetchNFTCollectionById = async (
  apiParams: UseGetNftByCollectionsIdApiParams
): Promise<{
  dehydrateState: DehydratedState;
}> => {
  const queryClient = new QueryClient();

  const { limit, cursor, collectionId } = apiParams || {};

  const parsedParams: GetNftByCollectionsIdSearchParams = {
    collection_id: collectionId,
    ...(limit && { limit }),
    ...(cursor && { cursor }),
  };

  await queryClient.prefetchQuery({
    queryKey: ["getNftCollectionById", parsedParams],
    queryFn: () => getNftByCollectionId(parsedParams),
  });

  const dehydrateState = dehydrate(queryClient);

  return { dehydrateState };
};
