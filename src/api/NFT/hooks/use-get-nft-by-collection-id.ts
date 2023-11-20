import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getNftByCollectionId } from "@/api/NFT/get-nft-by-collection-id";
import type {
  GetNftByCollectionsIdResponseModel,
  UseGetNftByCollectionsIdApiParams,
} from "@/types/model/api-nft-by-collection-id";

export const useGetNftCollectionById = (
  apiParams: UseGetNftByCollectionsIdApiParams,
  queryOptions?: UseQueryOptions<GetNftByCollectionsIdResponseModel>
) => {
  const { collectionId, limit } = apiParams || {};

  const parsedParams = useMemo(() => {
    return {
      collection_id: collectionId,
      ...(limit && { limit }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["getNftCollectionById", parsedParams],
    queryFn: () => getNftByCollectionId(parsedParams),
    ...queryOptions,
  });
};
