import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useMemo } from "react";
import {
  GetInfiniteNFTsByCollectionsAddressResponseModel,
  GetNFTsByCollectionAddressSearchParams,
  GetNFTsByCollectionsAddressResponseModel,
  UseGetNFTsByCollectionAddressApiParams,
} from "@/types/model/api-nfts-by-collection-address";
import { getNftByCollectionAddress } from "../get-nft-by-collection-address";

export const useGetInfiniteNFTsByCollectionAddress = (
  apiParams: UseGetNFTsByCollectionAddressApiParams,
  queryOptions?: UseInfiniteQueryOptions<
    GetNFTsByCollectionsAddressResponseModel &
      GetInfiniteNFTsByCollectionsAddressResponseModel
  >
) => {
  const { contractAddress, cursor, keyword, limit, sortBy, isListing } =
    apiParams || {};

  const parsedParams: GetNFTsByCollectionAddressSearchParams = useMemo(() => {
    return {
      contractAddress,
      ...(isListing && { is_listing: isListing }),
      ...(cursor && { cursor }),
      ...(keyword && { key_word: keyword }),
      ...(limit && { limit }),
      ...(sortBy && { sort_by: sortBy }),
    };
  }, [apiParams]);

  return useInfiniteQuery({
    queryKey: ["nfts-by-collection-address", parsedParams],
    queryFn: ({ pageParam }) =>
      getNftByCollectionAddress({
        cursor: pageParam as string,
        ...parsedParams,
      }),
    ...queryOptions,
    initialPageParam: cursor,
    getNextPageParam: (lastPage, _pages) => lastPage?.next_cursor,
  });
};
