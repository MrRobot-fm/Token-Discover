import { useGetNftCollectionById } from "@/api/NFT/hooks/use-get-nft-by-collection-id";
import { CarouselItem } from "@/components/atoms/Carousel/CarouselItem";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HighlightedNftListContent = ({
  collectionId,
}: {
  collectionId: string;
}) => {
  const { data: nftByCollectionId, isLoading } = useGetNftCollectionById({
    collectionId,
    limit: 1,
  });

  return (
    <>
      {isLoading ? (
        <CardSkeleton variant="nfts" />
      ) : (
        nftByCollectionId?.nfts?.map((nft, index) => (
          <CarouselItem key={`${index}-${nft?.name}`}>
            <HighlightedNFTCard
              variant="nft"
              collectionName={nft?.collection?.name}
              nftName={nft?.name || ""}
              avatarImage={{
                src: nft?.collection?.image_url,
                alt: nft?.collection?.name,
              }}
              cardImage={{ src: nft?.image_url, alt: nft?.name || "nft-img" }}
            />
          </CarouselItem>
        ))
      )}
    </>
  );
};
