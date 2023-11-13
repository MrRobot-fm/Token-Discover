import Link from "next/link";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";
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
            src={cardImage || NftCardPlaceholder.src}
            alt="highlighted-card"
          />
        </div>
        <NftCardFooter {...rest} />
      </div>
    </Link>
  );
};
