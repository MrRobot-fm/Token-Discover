import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { Carousel } from "@/components/atoms/Carousel/Carousel";
import { CarouselItem } from "@/components/atoms/Carousel/CarouselItem";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HighlightedNftList = ({
  collectionId,
  hasCarousel,
}: {
  collectionId: string[];
  hasCarousel?: boolean;
}) => {
  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
      limit: 1,
    });

  if (hasCarousel) {
    return (
      <Carousel>
        {nftByCollectionId
          ?.filter(
            (item) =>
              item?.nfts[0]?.image_url !== null && item?.nfts[0]?.name !== null
          )
          ?.map((nft, index) =>
            isLoading ? (
              <CardSkeleton key={index} variant="nfts" />
            ) : (
              <CarouselItem key={`${index}-${nft?.nfts[0]?.nft_id}`}>
                <HighlightedNFTCard
                  variant="nft"
                  collectionName={nft?.nfts[0]?.collection?.name}
                  nftName={nft?.nfts[0]?.name || ""}
                  avatarImage={{
                    src: nft?.nfts[0]?.collection?.image_url || "",
                    alt: nft?.nfts[0]?.collection?.name || "",
                  }}
                  cardImage={{
                    src: nft?.nfts[0]?.image_url || "",
                    alt: nft?.nfts[0]?.name || "nft-img",
                  }}
                />
              </CarouselItem>
            )
          )}
      </Carousel>
    );
  }

  return nftByCollectionId?.slice(0, 3)?.map((nft, index) => (
    <CarouselItem key={`${index}-${nft?.nfts[0]?.nft_id}`}>
      <HighlightedNFTCard
        variant="nft"
        collectionName={nft?.nfts[0]?.collection?.name}
        nftName={nft?.nfts[0]?.name || ""}
        avatarImage={{
          src: nft?.nfts[0]?.collection?.image_url || "",
          alt: nft?.nfts[0]?.collection?.name || "",
        }}
        cardImage={{
          src: nft?.nfts[0]?.image_url || "",
          alt: nft?.nfts[0]?.name || "nft-img",
        }}
      />
    </CarouselItem>
  ));
};
