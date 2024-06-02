import { kyApiInstance } from "@/api/ky-instance";
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

  const response = await kyApiInstance.get(`nfts`, {
    ...(hasParams && { searchParams }),
  });

  return response?.json();
};
