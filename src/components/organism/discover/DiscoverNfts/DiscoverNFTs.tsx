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
        const { nfts = [] } = nft || {};
        const {
          collection,
          name,
          token_id,
          chain,
          contract_address,
          image_url,
          previews,
        } = nfts[0] || {};

        return {
          variant: "nft",
          collectionName: collection?.name,
          nftName: name || `#${token_id}`,
          href: `/nft/${chain}/${contract_address}/${token_id}`,
          avatarImage: {
            src: collection?.image_url || "",
            alt: collection?.name || "",
          },
          cardImage: {
            src: image_url || previews?.image_medium_url || "",
            alt: name || "nft-img",
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
