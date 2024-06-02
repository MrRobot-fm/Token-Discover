import { kySimpleHashInstance } from "@/api/ky-instance";
import {
  GetCollectionByIdResponseModel,
  GetCollectionByIdSearchParams,
} from "@/types/model/api-collection-by-id";

export const getCollectionById = async (
  searchParams: GetCollectionByIdSearchParams
): Promise<GetCollectionByIdResponseModel> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await kySimpleHashInstance.get("collections/ids", {
    ...(hasParams && { searchParams }),
  });

  return response.json();
};
