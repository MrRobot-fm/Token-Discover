import { DEFAULT_IMG_URL_FALLBACK } from "@/utils/constants/global";
import { CustomImage } from "@/components/atoms/Image/CustomImage";
import type { TopCollectionContentProps } from "./TopCollectionContent.props";
import { topCollectionContent } from "./top-collection-content.variants";

export const TopCollectionContent = (props: TopCollectionContentProps) => {
  const { image, size } = props;

  return (
    <div className={topCollectionContent({ size })}>
      <CustomImage
        src={image?.src || DEFAULT_IMG_URL_FALLBACK}
        alt={image?.alt}
        priority={image?.priority}
      />
    </div>
  );
};
