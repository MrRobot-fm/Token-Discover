import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { Carousel } from "@/components/atoms/Carousel/Carousel";
import { CarouselItem } from "@/components/atoms/Carousel/CarouselItem";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import { TopCollectionCard } from "@/components/molecules/cards/TopCollectionCard/TopCollectionCard";

const TopCollectionList = ({
  hasCarousel,
  collectionId,
}: {
  hasCarousel?: boolean;
  collectionId: string[];
}) => {
  const { data: nftByCollection, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  if (hasCarousel) {
    return (
      <Carousel>
        {nftByCollection
          ?.filter((item) => item?.nfts[0]?.image_url !== null)
          ?.map((collection, index) =>
            isLoading ? (
              <Skeleton key={index} variant="topCollection" />
            ) : (
              <CarouselItem key={`${index}`}>
                <TopCollectionCard data={collection} />
              </CarouselItem>
            )
          )}
      </Carousel>
    );
  }

  return nftByCollection
    ?.filter((item) => item?.nfts[0]?.image_url !== null)
    ?.slice(0, 3)
    .map((collection, index) =>
      isLoading ? (
        <Skeleton key={index} variant="topCollection" />
      ) : (
        <TopCollectionCard key={`${index}`} data={collection} />
      )
    );
};

export default TopCollectionList;
