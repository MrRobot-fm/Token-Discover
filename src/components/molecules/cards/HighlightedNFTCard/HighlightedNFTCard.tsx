import Link from "next/link";
import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import type { HighlightNFTedCardProps } from "./HighlightedNFTCard.props";
import { highlightedNftCard } from "./highlightedNFTCard.variants";

export const HighlightedNFTCard = (props: HighlightNFTedCardProps) => {
  const {
    cardWrapperStyles,
    imageWrapperStyles,
    cardImage,
    variant,
    href = "/",
    ...rest
  } = props;

  const { linkWrapper, cardWrapper, imageWrapper } = highlightedNftCard();

  return (
    <Link {...{ href }} className={linkWrapper({ variant })}>
      <div className={cardWrapper({ className: cardWrapperStyles, variant })}>
        <div
          className={imageWrapper({ className: imageWrapperStyles, variant })}
        >
          <CustomImage
            src={cardImage?.src || DEFAULT_IMG_URL_FALLBACK}
            alt={cardImage?.alt || "nft-img"}
          />
        </div>
        <NftCardFooter {...rest} />
      </div>
    </Link>
  );
};
