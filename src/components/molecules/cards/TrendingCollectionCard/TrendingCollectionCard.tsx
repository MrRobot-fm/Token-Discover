import { trendingCollectionMap } from "@/utils/functions/trending-collection-content-map";
import { CollectionCardFooter } from "@/components/atoms/CollectionCardFooter/CollectionCardFooter";
import { TrendingCollectionContent } from "@/components/atoms/TrendingCollectionContent/TrendingCollectionContent";
import type { TrendingCollectionCardProps } from "./TrendingCollectionCard.props";

export const TrendingCollectionCard = (props: TrendingCollectionCardProps) => {
  const { author, collectionName, collectionLength, image } = props;

  return (
    <div className="flex flex-col base:w-full base:gap-[1.5rem] md:min-w-[27rem] md:gap-[2rem] lg:gap-[1.5rem]">
      <TrendingCollectionContent image={image} size="md" />
      <div className="flex w-full justify-between base:gap-[1.5rem] md:gap-[2.5rem] lg:gap-[1.5rem] ">
        {trendingCollectionMap.map((item, index) => (
          <TrendingCollectionContent
            key={index}
            collectionLength={collectionLength}
            image={image}
            hasText={item.hasText}
            size="sm"
          />
        ))}
      </div>
      <CollectionCardFooter
        {...{ author, collectionName }}
        footerWrapperStyles="p-0"
      />
    </div>
  );
};
