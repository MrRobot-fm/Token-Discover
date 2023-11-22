import { UseQueryOptions, useQuery } from "@tanstack/react-query";
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
  const { collectionId, nftDetails, cursor, limit } = apiParams;

  const parsedParams = useMemo(() => {
    return {
      collection_id: collectionId,
      ...(nftDetails && { include_nft_details: nftDetails }),
      ...(cursor && { cursor }),
      ...(limit && { limit }),
    };
  }, [apiParams]);

  return useQuery({
    queryKey: ["top-sales-by-collection", parsedParams],
    queryFn: () => getTopSalesByCollection(parsedParams),
    ...queryOptions,
  });
};
