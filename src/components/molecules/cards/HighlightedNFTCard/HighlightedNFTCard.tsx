import { CustomImage } from "@/components/atoms/Image/CustomImage";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";
import type { HighlightNFTedCardProps } from "./HighlightedNFTCard.props";
import { highlightedNftCard } from "./highlightedNFTCard.variants";

export const HighlightedNFTCard = (props: HighlightNFTedCardProps) => {
  const { cardWrapperStyles, imageWrapperStyles, cardImage, ...rest } = props;

  const { cardWrapper, imageWrapper } = highlightedNftCard();

  return (
    <div className={cardWrapper({ className: cardWrapperStyles })}>
      <div className={imageWrapper({ className: imageWrapperStyles })}>
        <CustomImage
          src={cardImage || NftCardPlaceholder.src}
          alt="highlighted-card"
        />
      </div>
      <NftCardFooter {...rest} />
    </div>
  );
};
