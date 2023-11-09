import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";
import type { HighlightNFTedCardProps } from "./HighlightedNFTCard.props";
import { highlightedNftCard } from "./highlightedNFTCard.variants";

export const HighlightedNFTCard = (props: HighlightNFTedCardProps) => {
  const {
    cardWrapperStyles,
    imageWrapperStyles,
    avatarImage,
    cardImage,
    author,
    nftName,
  } = props;

  const { cardWrapper, imageWrapper, footerWrapper, authorWrapper } =
    highlightedNftCard();

  return (
    <div className={cardWrapper({ className: cardWrapperStyles })}>
      <div className={imageWrapper({ className: imageWrapperStyles })}>
        <CustomImage
          src={cardImage || NftCardPlaceholder.src}
          alt="highlighted-card"
        />
      </div>
      <div className={footerWrapper()}>
        <h5>{nftName}</h5>
        <div className={authorWrapper()}>
          <Avatar src={avatarImage || ""} alt="author-avatar" size="sm" />
          <span className="paragraph">{author}</span>
        </div>
      </div>
    </div>
  );
};
