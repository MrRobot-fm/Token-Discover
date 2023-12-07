import { UseQueryOptions, useQueries, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getNftByCollectionId } from "@/api/NFT/get-nft-by-collection-id";
import type {
  GetNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdSearchParams,
  UseGetNftByCollectionsIdApiParams,
} from "@/types/model/api-nft-by-collection-id";

export const useGetNftCollectionById = (
  apiParams: UseGetNftByCollectionsIdApiParams,
  queryOptions?: UseQueryOptions<GetNftByCollectionsIdResponseModel>
) => {
  const { limit, cursor, collectionId } = apiParams || {};

  const parsedParams: GetNftByCollectionsIdSearchParams = useMemo(() => {
    return {
      collection_id: collectionId,
      ...(limit && { limit }),
      ...(cursor && { cursor }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["getNftCollectionById", parsedParams],
    queryFn: () => getNftByCollectionId(parsedParams),
    ...queryOptions,
  });
};
