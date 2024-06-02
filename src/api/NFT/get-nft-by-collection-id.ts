import { kySimpleHashInstance } from "@/api/ky-instance";
import type {
  GetInfiniteNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdResponseModel,
  GetNftByCollectionsIdSearchParams,
} from "@/types/model/api-nft-by-collection-id";

export const getNftByCollectionId = async ({
  collection_id,
  ...searchParams
}: GetNftByCollectionsIdSearchParams): Promise<
  GetNftByCollectionsIdResponseModel &
    GetInfiniteNftByCollectionsIdResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await kySimpleHashInstance.get(
    `collection/${collection_id}`,
    {
      ...(hasParams && { searchParams }),
    }
  );

  return response.json();
};
