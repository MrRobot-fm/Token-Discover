import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import type { TopCollectionContentProps } from "./TopCollectionContent.props";
import { topCollectionContent } from "./top-collection-content.variants";

export const TopCollectionContent = (props: TopCollectionContentProps) => {
  const { collectionLength, image, hasText, size } = props;

  if (hasText) {
    return (
      <div className={topCollectionContent({ size: "sm", variant: "text" })}>
        <span className="heading5">{`${collectionLength}+`}</span>
      </div>
    );
  }

  return (
    <div className={topCollectionContent({ size })}>
      <CustomImage
        src={image.src || DEFAULT_IMG_URL_FALLBACK}
        alt={image.alt}
      />
    </div>
  );
};
