import { kySimpleHashInstance } from "@/api/ky-instance";
import type {
  GetInfiniteTrendingCollectionsResponseModel,
  GetTrendingCollectionsResponseModel,
  GetTrendingCollectionsSearchParams,
} from "@/types/model/api-trending-collections";

export const getTrendingCollections = async (
  searchParams?: GetTrendingCollectionsSearchParams
): Promise<
  GetTrendingCollectionsResponseModel &
    GetInfiniteTrendingCollectionsResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {})?.length;

  const response = await kySimpleHashInstance.get("collections/trending", {
    ...(hasParams && { searchParams }),
  });

  return response.json();
};
