import Link from "next/link";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import TrendingCardPlaceholder from "@/assets/placeholders/Primary Photo Placeholder.svg";
import type { TrendingCollectionContentProps } from "./TrendingCollectionContent.props";
import { trendingCollectionContent } from "./trending-collection-content.variants";

export const TrendingCollectionContent = (
  props: TrendingCollectionContentProps
) => {
  const { collectionLength, image, hasText, size, href = "#" } = props;

  if (hasText) {
    return (
      <Link {...{ href }} className="group w-full">
        <div
          className={trendingCollectionContent({ size: "sm", variant: "text" })}
        >
          <span className="heading5">{`${collectionLength}+`}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link {...{ href }} className="group w-full">
      <div className={trendingCollectionContent({ size })}>
        <CustomImage
          src={image || TrendingCardPlaceholder}
          alt="trending-collection"
        />
      </div>
    </Link>
  );
};
