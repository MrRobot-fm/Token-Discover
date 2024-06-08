import { kySimpleHashInstance } from "@/api/ky-instance";
import type {
  GetNftByTokenIdResponseModel,
  GetNftByTokenIdSearchParams,
} from "@/types/model/api-nft-by-token-id";

export const getNftByTokenId = async ({
  chain,
  contract_address,
  token_id,
}: GetNftByTokenIdSearchParams): Promise<GetNftByTokenIdResponseModel> => {
  const response = await kySimpleHashInstance.get(
    `${chain}/${contract_address}/${token_id}`
  );

  return response.json();
};
