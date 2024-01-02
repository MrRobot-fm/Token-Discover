import { axiosApiInstance } from "@/api/axios-instance";
import type {
  GetInfiniteNFTsByCollectionsAddressResponseModel,
  GetNFTsByCollectionAddressSearchParams,
  GetNFTsByCollectionsAddressResponseModel,
} from "@/types/model/api-nfts-by-collection-address";

export const getNftByCollectionAddress = async (
  searchParams: GetNFTsByCollectionAddressSearchParams
): Promise<
  GetNFTsByCollectionsAddressResponseModel &
    GetInfiniteNFTsByCollectionsAddressResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await axiosApiInstance(`/nfts`, {
    ...(hasParams && { params: searchParams }),
  });

  return response?.data;
};
