import { axiosApiInstance } from "@/api/axios-instance";
import { GetCollectionsByNameResponseModel } from "@/types/model/api-collection-by-name";

export const getCollectionByName = async ({
  search,
}: {
  search: string;
}): Promise<GetCollectionsByNameResponseModel> => {
  const response = await axiosApiInstance.get("/collections", {
    params: {
      search,
    },
  });

  return response?.data;
};
