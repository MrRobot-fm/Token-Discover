import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { highlightedNftCard } from "@/components/molecules/cards/HighlightedNFTCard/highlightedNFTCard.variants";
import type { CollectionCardFooterProps } from "./CollectionCardFooter.props";

export const CollectionCardFooter = (props: CollectionCardFooterProps) => {
  const { nftName, collectionName, avatarImage, author, footerWrapperStyles } =
    props;

  const { footerWrapper, authorWrapper } = highlightedNftCard();
  return (
    <div className={footerWrapper({ className: footerWrapperStyles })}>
      {(!!nftName || !!collectionName) && <h5>{nftName || collectionName}</h5>}
      <div className={authorWrapper()}>
        <Avatar src={avatarImage || ""} alt="author-avatar" size="sm" />
        <span className="paragraph">{author}</span>
      </div>
    </div>
  );
};
