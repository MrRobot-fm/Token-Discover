import { UseQueryOptions, useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GetTopSalesByCollectionResponseModel,
  UseGetTopSalesByCollectionsApiParams,
} from "@/types/model/api-top-sales-by-collection";
import { getTopSalesByCollection } from "../get-top-sales-by-collection";

export const useGetTopSalesByCollection = (
  apiParams: UseGetTopSalesByCollectionsApiParams,
  queryOptions?: UseQueryOptions<GetTopSalesByCollectionResponseModel>
) => {
  const { nftDetails, cursor, limit, collectionId } = apiParams;

  const parsedParams = useMemo(() => {
    return {
      ...(nftDetails && { include_nft_details: nftDetails }),
      ...(cursor && { cursor }),
      ...(limit && { limit }),
    };
  }, [apiParams]);

  return useQueries({
    queries: collectionId.map((collection_id) => ({
      queryKey: ["top-sales-by-collection", { collection_id, ...parsedParams }],
      queryFn: () =>
        getTopSalesByCollection({ collection_id, ...parsedParams }),
      staleTime: Infinity,
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
