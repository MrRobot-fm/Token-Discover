import { GetTopCollectionsResponseModel } from "@/types/model/api-top-collections";
import { Carousel } from "@/components/atoms/Carousel/Carousel";
import { CarouselItem } from "@/components/atoms/Carousel/CarouselItem";
import { TopCollectionCard } from "../cards/TopCollectionCard/TopCollectionCard";

const TopCollectionList = ({
  hasCarousel,
  topCollection,
}: {
  hasCarousel?: boolean;
  topCollection: GetTopCollectionsResponseModel | undefined;
}) => {
  if (hasCarousel) {
    return (
      <Carousel>
        {topCollection?.collections?.map((collection, index) => (
          <CarouselItem key={`${index}-${collection?.collection_id}`}>
            <TopCollectionCard collectionId={collection?.collection_id} />
          </CarouselItem>
        ))}
      </Carousel>
    );
  }

  return topCollection?.collections
    ?.slice(0, 3)
    .map((collection, index) => (
      <TopCollectionCard
        key={`${index}-${collection?.collection_id}`}
        collectionId={collection?.collection_id}
      />
    ));
};

export default TopCollectionList;
