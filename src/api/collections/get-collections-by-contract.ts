import { kySimpleHashInstance } from "@/api/ky-instance";
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

  const response = await kySimpleHashInstance.get(
    `collections/${chain}/${contract_address}`,
    {
      ...(hasParams && { searchParams }),
    }
  );

  return response.json();
};
