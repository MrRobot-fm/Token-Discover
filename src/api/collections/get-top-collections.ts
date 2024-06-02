import { kySimpleHashInstance } from "@/api/ky-instance";
import type {
  GetInfiniteTopCollectionsResponseModel,
  GetTopCollectionsResponseModel,
  GetTopCollectionsSearchParams,
} from "@/types/model/api-top-collections";

export const getTopCollections = async (
  searchParams: GetTopCollectionsSearchParams
): Promise<
  GetTopCollectionsResponseModel & GetInfiniteTopCollectionsResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await kySimpleHashInstance.get("collections/top_v2", {
    ...(hasParams && { searchParams }),
  });

  return response.json();
};
