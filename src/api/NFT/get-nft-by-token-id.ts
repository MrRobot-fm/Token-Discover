import { axiosInstance } from "@/api/axios-instance";
import type {
  GetNftByTokenIdResponseModel,
  GetNftByTokenIdSearchParams,
} from "@/types/model/api-nft-by-token-id";

export const getNftByTokenId = async ({
  chain,
  contract_address,
  token_id,
}: GetNftByTokenIdSearchParams): Promise<GetNftByTokenIdResponseModel> => {
  const response = await axiosInstance.get(
    `${chain}/${contract_address}/${token_id}`
  );

  return response.data;
};
