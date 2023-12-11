"use client";

import { useMemo } from "react";
import { useGetNftCollectionById } from "@/api/NFT/hooks/use-get-nft-by-collection-id";
import { useGetCollectionById } from "@/api/collections/hooks/use-get-collection-by-id";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import type { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";
import { CollectionDetailsInfo } from "@/components/molecules/details/CollectionDetailsInfo/CollectionDetailsInfo";
import { DetailsPageCover } from "@/components/molecules/details/DetailsPageCover/DetailsPageCover";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { styles } from "./collection-details-section.styles";

export const CollectionDetailsSection = ({ id }: { id: string }) => {
  const { data: collectionById, isLoading } = useGetCollectionById({
    collectionId: id,
  });
  const { data: nftByCollectionId } = useGetNftCollectionById({
    collectionId: id,
  });

  const parsedItems: HighlightNFTedCardProps[] = useMemo(() => {
    if (!nftByCollectionId) return [];

    return nftByCollectionId?.nfts
      ?.filter((item) => item?.image_url !== null)
      ?.map((nft) => {
        const {
          collection,
          image_url,
          previews,
          name,
          token_id,
          chain,
          contract_address,
        } = nft || {};

        return {
          variant: "nft",
          collectionName: collection?.name,
          nftName: name || `#${token_id}`,
          href: `/nft/${chain}/${contract_address}/${token_id}`,
          avatarImage: {
            src: collection?.image_url,
            alt: collection?.name,
          },
          cardImage: {
            src: image_url || previews?.image_medium_url,
            alt: name || "nft-img",
          },
        };
      });
  }, [nftByCollectionId]);

  return (
    <div className={styles.collectionDetailsSection}>
      <DetailsPageCover
        bannerProps={{
          src: collectionById?.collections[0]?.banner_image_url || "",
          alt: collectionById?.collections[0]?.name || "",
        }}
        avatarProps={{
          src: collectionById?.collections[0]?.image_url || "",
          alt: collectionById?.collections[0]?.name || "",
        }}
        isLoading={isLoading}
      />
      <CollectionDetailsInfo data={collectionById} />
      <div className={styles.collectionDetails_list}>
        <DiscoverIndexList
          skeletonVariant="fluid"
          isLoading={isLoading}
          items={(parsedItems || [])?.map((item, index) => (
            <HighlightedNFTCard key={index} {...item} />
          ))}
        />
      </div>
    </div>
  );
};
