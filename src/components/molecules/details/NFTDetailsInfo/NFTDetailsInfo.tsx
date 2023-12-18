import { getFormattedCryptoCurrency } from "@/utils/functions/get-formatted-crypto-currency";
import type { GetNftByTokenIdResponseModel } from "@/types/model/api-nft-by-token-id";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { styles } from "./nft-details-info.styles";

export const NFTDetailsInfo = ({
  data,
}: {
  data?: GetNftByTokenIdResponseModel;
}) => {
  return (
    <div className={styles.nftDetailsInfo}>
      <div>
        <h3>{data?.name || `#${data?.token_id}`}</h3>
      </div>
      {data?.description && (
        <div>
          <h5 className={styles.nftDetailsInfo_label}>Description</h5>
          <p className={styles.nftDetailsInfo_text}>{data?.description}</p>
        </div>
      )}
      <div>
        <h5 className={styles.nftDetailsInfo_label}>Chain</h5>
        <p className={styles.nftDetailsInfo_text}>{data?.chain}</p>
      </div>
      <div>
        <h5 className={styles.nftDetailsInfo_label}>Price</h5>
        <p className={styles.nftDetailsInfo_text}>
          {getFormattedCryptoCurrency({
            value: data?.last_sale?.unit_price || 0,
            currency: data?.last_sale?.payment_token?.symbol || "-",
            decimals: data?.last_sale?.payment_token?.decimals || 0,
          })}
        </p>
      </div>
      <div>
        <h5 className={styles.nftDetailsInfo_label}>Collection</h5>
        <div className={styles.nftDetailsInfo_collection}>
          <Avatar
            size="sm"
            src={data?.collection?.image_url || ""}
            alt={data?.collection?.name || ""}
          />
          <span className={styles.nftDetailsInfo_collection_label}>
            {data?.collection?.name}
          </span>
        </div>
      </div>
    </div>
  );
};
