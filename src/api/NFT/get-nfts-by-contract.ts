import { kySimpleHashInstance } from "@/api/ky-instance";
import type {
  GetInfiniteNftByContractResponseModel,
  GetNftByContractResponseModel,
  GetNftsByContractSearchParams,
} from "@/types/model/api-nfts-by-contract";

export const getNftByContract = async ({
  chain,
  contract_address,
  ...searchParams
}: GetNftsByContractSearchParams): Promise<
  GetNftByContractResponseModel & GetInfiniteNftByContractResponseModel
> => {
  const hasParams = !!Object.values(searchParams || {}).length;

  const response = await kySimpleHashInstance.get(
    `${chain}/${contract_address}`,
    {
      ...(hasParams && { searchParams }),
    }
  );

  return response.json();
};
