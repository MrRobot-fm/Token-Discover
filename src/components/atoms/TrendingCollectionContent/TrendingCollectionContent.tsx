import { CustomImage } from "@/components/atoms/Image/CustomImage";
import NftCardPlaceholder from "@/assets/placeholders/Nft-card-placeholder.svg";
import type { TrendingCollectionContentProps } from "./TrendingCollectionContent.props";
import { trendingCollectionContent } from "./trending-collection-content.variants";

export const TrendingCollectionContent = (
  props: TrendingCollectionContentProps
) => {
  const { collectionLength, image, hasText, size } = props;

  if (hasText) {
    return (
      <div
        className={trendingCollectionContent({ size: "sm", variant: "text" })}
      >
        <span className="heading5">{`${collectionLength}+`}</span>
      </div>
    );
  }

  return (
    <div className={trendingCollectionContent({ size })}>
      <CustomImage
        src={image || NftCardPlaceholder}
        alt="trending-collection"
      />
    </div>
  );
};
