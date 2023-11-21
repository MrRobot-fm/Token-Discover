import { Carousel } from "@/components/atoms/Carousel/Carousel";
import { HighlightedNftListContent } from "./HighlightedNftListContent";

export const HighlightedNftList = ({
  collectionId,
  hasCarousel,
}: {
  collectionId: string[] | undefined;
  hasCarousel?: boolean;
}) => {
  if (hasCarousel) {
    return (
      <Carousel>
        {collectionId?.map((collectionId, index) => (
          <HighlightedNftListContent
            key={`${index}-${collectionId}`}
            {...{ collectionId }}
          />
        ))}
      </Carousel>
    );
  }

  return collectionId
    ?.slice(0, 3)
    ?.map((collectionId, index) => (
      <HighlightedNftListContent
        key={`${index}-${collectionId}`}
        {...{ collectionId }}
      />
    ));
};
