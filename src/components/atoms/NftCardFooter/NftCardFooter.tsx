import { Avatar } from "@/components/atoms/Avatar/Avatar";
import { highlightedNftCard } from "@/components/molecules/cards/HighlightedNFTCard/highlightedNFTCard.variants";
import type { NftCardFooterProps } from "./NftCardFooter.props";

export const NftCardFooter = (props: NftCardFooterProps) => {
  const {
    nftName,
    collectionName,
    avatarImage,
    avatarSize = "sm",
    footerWrapperStyles,
    authorWrapperStyles,
    nftPrice,
    nftHighBid,
    criptoCurrency,
    hasDetails = false,
  } = props;

  const { footerWrapper, authorWrapper, detailsWrapper } = highlightedNftCard();
  return (
    <div className={footerWrapper({ className: footerWrapperStyles })}>
      {!!nftName && <h5 className="truncate">{nftName}</h5>}
      <div
        className={authorWrapper({
          className: `${authorWrapperStyles} ${
            avatarSize === "xs" && "gap-[0.7rem]"
          }`,
        })}
      >
        <Avatar
          src={avatarImage?.src || ""}
          alt={avatarImage?.alt || "avatar-img"}
          size={avatarSize}
        />
        <span
          className={`${
            avatarSize === "xs" ? "base:span md:paragraph" : "paragraph"
          } truncate capitalize lg:whitespace-nowrap`}
        >
          {collectionName}
        </span>
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
