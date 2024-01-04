import Link from "next/link";
import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { getFormattedCryptoCurrency } from "@/utils/functions/get-formatted-crypto-currency";
import { getTransformedValue } from "@/utils/functions/get-transformed-value";
import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import type { TopNftSoldCardProps } from "./TopNftSoldCard.props";
import { styles } from "./top-sold-card.styles";

export const TopNftSoldCard = (props: TopNftSoldCardProps) => {
  const {
    avatarStyle,
    nftName,
    price,
    totalSupply,
    criptoCurrency,
    decimals,
    href = "/",
    image,
    collection,
    hasFooter = true,
    hasPrice = true,
    hasSupply = false,
  } = props;
  return (
    <Link {...{ href }} className={styles.link}>
      <div className={styles.cardWrapper}>
        <div>
          <Avatar
            src={image?.src || DEFAULT_IMG_URL_FALLBACK}
            alt={image?.alt || "nft-img"}
            {...(avatarStyle && { size: avatarStyle?.size })}
          />
        </div>
        <div className={styles.bodyWrapper}>
          <h5 className={styles.bodyWrapper_nftName}>{nftName}</h5>
          {hasSupply && (
            <p className={styles.bodyWrapper_price}>
              Total Supply:
              <span className={styles.bodyWrapper_price__value}>
                {` ${getTransformedValue({ value: totalSupply || 0 })}`}
              </span>
            </p>
          )}
          {hasPrice && (
            <p className={styles.bodyWrapper_price}>
              Price:
              <span className={styles.bodyWrapper_price__value}>
                {getFormattedCryptoCurrency({
                  value: price || 0,
                  currency: criptoCurrency || "-",
                  decimals: decimals || 0,
                })}
              </span>
            </p>
          )}
          {hasFooter && (
            <NftCardFooter
              avatarImage={{
                src: collection?.image.src || "",
                alt: collection?.image.alt || "",
              }}
              avatarSize="xs"
              collectionName={collection?.name}
              footerWrapperStyles="base:pt-[0.5rem] p-0 overflow-hidden"
              authorWrapperStyles="md:justify-center"
            />
          )}
        </div>
      </div>
    </Link>
  );
};
