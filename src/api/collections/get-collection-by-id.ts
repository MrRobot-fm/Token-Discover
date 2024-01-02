import { axiosSimpleHashInstance } from "@/api/axios-instance";
import {
  GetCollectionByIdResponseModel,
  GetCollectionByIdSearchParams,
} from "@/types/model/api-collection-by-id";

export const getCollectionById = async (
  searchParams: GetCollectionByIdSearchParams
): Promise<GetCollectionByIdResponseModel> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await axiosSimpleHashInstance.get("/collections/ids", {
    ...(hasParams && { params: searchParams }),
  });

  return response.data;
};
