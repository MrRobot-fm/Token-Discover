import { useMemo } from "react";
import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";

export const DiscoverNFTs = ({ collectionId }: { collectionId: string[] }) => {
  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  const parsedItems: HighlightNFTedCardProps[] = useMemo(() => {
    if (!nftByCollectionId) return [];

    return nftByCollectionId
      ?.filter((item) => item?.nfts[0].image_url !== null)
      ?.map((nft) => {
        return {
          variant: "nft",
          collectionName: nft?.nfts[0]?.collection?.name,
          nftName: nft?.nfts[0]?.name || `#${nft?.nfts[0].token_id}`,
          avatarImage: {
            src: nft?.nfts[0]?.collection?.image_url || "",
            alt: nft?.nfts[0]?.collection?.name || "",
          },
          cardImage: {
            src:
              nft?.nfts[0]?.image_url ||
              nft?.nfts[0]?.previews?.image_medium_url ||
              "",
            alt: nft?.nfts[0]?.name || "nft-img",
          },
        };
      });
  }, [nftByCollectionId]);

  return (
    <div className="w-full py-[8rem]">
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(parsedItems || [])?.map((item, index) => (
          <HighlightedNFTCard key={index} {...item} />
        ))}
      />
    </div>
  );
};
