import { getFormattedCryptoCurrency } from "@/utils/functions/get-formatted-crypto-currency";
import type { GetNftByTokenIdResponseModel } from "@/types/model/api-nft-by-token-id";
import { Avatar } from "@/components/atoms/Avatar/Avatar";

export const NFTDetailsInfo = ({
  data,
}: {
  data?: GetNftByTokenIdResponseModel;
}) => {
  return (
    <div className="flex flex-col gap-[3rem] px-[4rem] py-[5rem]">
      <div>
        <h3>{data?.name || `#${data?.token_id}`}</h3>
      </div>
      {data?.description && (
        <div>
          <h5 className="text-label-grey">Description</h5>
          <p className="font-normal capitalize">{data?.description}</p>
        </div>
      )}
      <div>
        <h5 className="text-label-grey">Chain</h5>
        <p className="font-normal capitalize">{data?.chain}</p>
      </div>
      <div>
        <h5 className="text-label-grey">Price</h5>
        <p className="font-normal">
          {getFormattedCryptoCurrency({
            value: data?.last_sale?.unit_price || 0,
            currency: data?.last_sale?.payment_token?.symbol || "-",
          })}
        </p>
      </div>
      <div className="flex flex-col">
        <h5 className="text-label-grey">Collection</h5>
        <div className="flex items-center gap-[1rem]">
          <Avatar
            size="sm"
            src={data?.collection?.image_url || ""}
            alt={data?.collection?.name || ""}
          />
          <span className="heading5 font-normal">{data?.collection?.name}</span>
        </div>
      </div>
    </div>
  );
};
