import { UseQueryOptions, useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetNftByCollectionsIdResponseModel,
  UseGetNftByCollectionsIdApiParams,
} from "@/types/model/api-nft-by-collection-id";
import { getNftByCollectionId } from "../get-nft-by-collection-id";

export const useGetNftByCollectionByIdCombined = (
  apiParams: UseGetNftByCollectionsIdApiParams,
  queryOptions?: UseQueryOptions<GetNftByCollectionsIdResponseModel>
) => {
  const { limit, cursor, collectionsIds } = apiParams || {};

  const parsedParams = useMemo(() => {
    return {
      ...(limit && { limit }),
      ...(cursor && { cursor }),
    };
  }, [apiParams]);

  return useQueries({
    queries: (collectionsIds || []).map((collection_id) => ({
      queryKey: ["getNftCollectionById", { collection_id, ...parsedParams }],
      queryFn: () => getNftByCollectionId({ collection_id, ...parsedParams }),
      ...queryOptions,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isLoading: results.some((result) => result.isLoading),
      };
    },
  });
};
