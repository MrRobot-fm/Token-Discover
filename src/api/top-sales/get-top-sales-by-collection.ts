import { kySimpleHashInstance } from "@/api/ky-instance";
import {
  GetTopSalesByCollectionResponseModel,
  GetTopSalesByCollectionSearchParams,
} from "@/types/model/api-top-sales-by-collection";

export const getTopSalesByCollection = async ({
  collection_id,
  ...searchParams
}: GetTopSalesByCollectionSearchParams & {
  collection_id: string;
}): Promise<GetTopSalesByCollectionResponseModel> => {
  const hasParams = Object.values(searchParams || {}).length;

  const response = await kySimpleHashInstance.get(
    `top_sales/collection/${collection_id}`,
    {
      ...(hasParams && { searchParams }),
    }
  );

  return response?.json();
};
