import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { highlightedNftCard } from "@/components/molecules/cards/HighlightedNFTCard/highlightedNFTCard.variants";
import type { NftCardFooterProps } from "./NftCardFooter.props";

export const NftCardFooter = (props: NftCardFooterProps) => {
  const {
    nftName,
    collectionName,
    avatarImage,
    footerWrapperStyles,
    nftPrice,
    nftHighBid,
    criptoCurrency,
    hasDetails = false,
  } = props;

  const { footerWrapper, authorWrapper, detailsWrapper } = highlightedNftCard();
  return (
    <div className={footerWrapper({ className: footerWrapperStyles })}>
      {!!nftName && <h5>{nftName}</h5>}
      <div className={authorWrapper()}>
        <Avatar src={avatarImage || ""} alt="author-avatar" size="sm" />
        <span className="paragraph capitalize">{collectionName}</span>
      </div>
      {hasDetails && (
        <div className={detailsWrapper()}>
          {!!nftPrice && (
            <div>
              <p className="text-label-grey">Price</p>
              <span className="paragraph">
                {`${nftPrice} ${criptoCurrency}`}{" "}
              </span>
            </div>
          )}
          {!!nftHighBid && (
            <div>
              <p className="text-label-grey">Highest Bid</p>
              <span className="paragraph">
                {`0.${nftHighBid} ${criptoCurrency}`}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
