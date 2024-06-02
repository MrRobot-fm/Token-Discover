import { kyApiInstance } from "@/api/ky-instance";
import { GetCollectionsByNameResponseModel } from "@/types/model/api-collection-by-name";

export const getCollectionByName = async ({
  search,
}: {
  search: string;
}): Promise<GetCollectionsByNameResponseModel> => {
  const response = await kyApiInstance.get("collections", {
    searchParams: {
      search,
    },
  });

  return response.json();
};
