import type {
  GetInfiniteNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdSearchParams,
} from "@/types/model/api-nft-by-collection-id";
import { axiosSimpleHashInstance } from "../axios-instance";

export const getNftByCollectionId = async ({
  collection_id,
  ...searchParams
}: GetNftByCollectionsIdSearchParams): Promise<
  GetNftByCollectionsIdResponseModel &
    GetInfiniteNftByCollectionsIdResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await axiosSimpleHashInstance.get(
    `/collection/${collection_id}`,
    {
      ...(hasParams && { params: searchParams }),
    }
  );

  return response.data;
};
