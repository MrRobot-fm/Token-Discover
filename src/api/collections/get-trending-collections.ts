import type {
  GetTrendingCollectionsResponseModel,
  GetTrendingCollectionsSearchParams,
} from "@/types/model/api-trending-collections";
import { axiosInstance } from "../axios-instance";

export const getTrendingCollections = async (
  searchParams?: GetTrendingCollectionsSearchParams
): Promise<GetTrendingCollectionsResponseModel> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await axiosInstance.get("/collections/trending", {
    ...(hasParams && { params: searchParams }),
  });

  return response.data;
};
