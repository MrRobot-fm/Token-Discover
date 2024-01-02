import { axiosSimpleHashInstance } from "@/api/axios-instance";
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

  const response = await axiosSimpleHashInstance.get(
    `/${chain}/${contract_address}`,
    {
      ...(hasParams && { params: searchParams }),
    }
  );

  return response?.data;
};
