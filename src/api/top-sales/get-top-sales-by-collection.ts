import { GetTopCollectionsSearchParams } from "@/types/model/api-top-collections";
import {
  GetTopSalesByCollectionResponseModel,
  GetTopSalesByCollectionSearchParams,
} from "@/types/model/api-top-sales-by-collection";
import { axiosInstance } from "../axios-instance";

export const getTopSalesByCollection = async ({
  collection_id,
  ...searchParams
}: GetTopSalesByCollectionSearchParams & {
  collection_id: string;
}): Promise<GetTopSalesByCollectionResponseModel> => {
  const hasParams = Object.values(searchParams || {}).length;

  const response = await axiosInstance(
    `top_sales/collection/${collection_id}`,
    {
      ...(hasParams && { params: searchParams }),
    }
  );

  return response.data;
};
