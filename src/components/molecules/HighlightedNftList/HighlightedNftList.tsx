import v from "voca";
import useBreakpoints from "@/hooks/use-breakpoints";
import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { Carousel } from "@/components/atoms/Carousel/Carousel";
import { CarouselItem } from "@/components/atoms/Carousel/CarouselItem";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HighlightedNftList = ({
  collectionId,
}: {
  collectionId: string[];
}) => {
  const { isBase, isMobile } = useBreakpoints();

  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
      limit: 1,
    });

  if (!isBase && !isMobile) {
    return (
      <Carousel>
        {nftByCollectionId
          ?.filter(
            (item) =>
              item?.nfts[0]?.image_url !== null && item?.nfts[0]?.name !== null
          )
          ?.map((nft, index) => {
            const { nfts = [] } = nft || {};
            const {
              nft_id,
              chain,
              contract_address,
              token_id,
              collection,
              image_url,
              name,
            } = nfts[0] || [];

            return isLoading ? (
              <Skeleton key={index} variant="nfts" />
            ) : (
              <CarouselItem key={`${index}-${nft_id}`}>
                <HighlightedNFTCard
                  href={`/nft/${
                    v.kebabCase(name) || null
                  }/${chain}/${contract_address}/${token_id}/${collection?.collection_id}`}
                  variant="nft"
                  collectionName={collection?.name}
                  nftName={name || ""}
                  avatarImage={{
                    src: collection?.image_url || "",
                    alt: `${collection?.name}-img`,
                  }}
                  cardImage={{
                    src: image_url || "",
                    alt: `${name}-img`,
                  }}
                />
              </CarouselItem>
            );
          })}
      </Carousel>
    );
  }

  return nftByCollectionId?.slice(0, 3)?.map((nft, index) => {
    const { nfts = [] } = nft || {};
    const {
      nft_id,
      chain,
      contract_address,
      token_id,
      collection,
      previews,
      name,
    } = nfts[0] || {};

    return isLoading ? (
      <Skeleton key={index} variant="nfts" />
    ) : (
      <CarouselItem key={`${index}-${nft_id}`}>
        <HighlightedNFTCard
          href={`/nft/${chain}/${contract_address}/${token_id}`}
          variant="nft"
          collectionName={collection?.name}
          nftName={name || ""}
          avatarImage={{
            src: collection?.image_url || "",
            alt: `${collection?.name}-img`,
          }}
          cardImage={{
            src: previews?.image_medium_url || "",
            alt: `${name}-img`,
          }}
        />
      </CarouselItem>
    );
  });
};
