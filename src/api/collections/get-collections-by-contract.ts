import { axiosSimpleHashInstance } from "@/api/axios-instance";
import type {
  GetCollectionByContractResponseModel,
  GetCollectionsByContractSearchParams,
} from "@/types/model/api-collections-by-contract";

export const getCollectionByContract = async ({
  chain,
  contract_address,
  ...searchParams
}: GetCollectionsByContractSearchParams): Promise<GetCollectionByContractResponseModel> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await axiosSimpleHashInstance.get(
    `/collections/${chain}/${contract_address}`,
    {
      ...(hasParams && { params: searchParams }),
    }
  );

  return response.data;
};
