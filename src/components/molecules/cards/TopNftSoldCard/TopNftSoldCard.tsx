import Link from "next/link";
import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { getFormattedCryptoCurrency } from "@/utils/functions/get-formatted-crypto-currency";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import type { TopNftSoldCardProps } from "./TopNftSoldCard.props";
import { styles } from "./top-sold-card.styles";

export const TopNftSoldCard = (props: TopNftSoldCardProps) => {
  const {
    avatarStyle,
    nftName,
    price,
    criptoCurrency,
    href = "/",
    image,
  } = props;
  return (
    <Link {...{ href }} className={styles.link}>
      <div className={styles.cardWrapper}>
        <div>
          <Avatar
            src={image.src || DEFAULT_IMG_URL_FALLBACK}
            alt={image.alt || "nft-img"}
            {...(avatarStyle && { size: avatarStyle?.size })}
          />
        </div>
        <div className={styles.bodyWrapper}>
          <h5 className={styles.bodyWrapper_nftName}>{nftName}</h5>
          <p className={styles.bodyWrapper_price}>
            Price:
            <span className={styles.bodyWrapper_price__value}>
              {getFormattedCryptoCurrency({
                value: price,
                currency: criptoCurrency,
              })}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
