import type {
  GetInfiniteTopCollectionsResponseModel,
  GetTopCollectionsResponseModel,
  GetTopCollectionsSearchParams,
} from "@/types/model/api-top-collections";
import { axiosInstance } from "../axios-instance";

export const getTopCollections = async (
  searchParams: GetTopCollectionsSearchParams
): Promise<
  GetTopCollectionsResponseModel & GetInfiniteTopCollectionsResponseModel
> => {
  const hasParams = !!Object?.values(searchParams || {})?.length;

  const response = await axiosInstance.get("/collections/top_v2", {
    ...(hasParams && { params: searchParams }),
  });

  return response?.data;
};
