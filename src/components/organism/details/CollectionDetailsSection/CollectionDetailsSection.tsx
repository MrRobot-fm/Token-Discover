"use client";

import { useGetNftCollectionById } from "@/api/NFT/hooks/use-get-nft-by-collection-id";
import { useGetCollectionById } from "@/api/collections/hooks/use-get-collection-by-id";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { CollectionDetailsInfo } from "@/components/molecules/details/CollectionDetailsInfo/CollectionDetailsInfo";
import { DetailsPageCover } from "@/components/molecules/details/DetailsPageCover/DetailsPageCover";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { styles } from "./collection-details-section.styles";
import { useCollectionDetails } from "./use-collection-details";

export const CollectionDetailsSection = ({ id }: { id: string }) => {
  const { data: collectionById, isLoading } = useGetCollectionById({
    collectionId: id,
  });
  const { data: nftByCollectionId } = useGetNftCollectionById({
    collectionId: id,
  });

  const { filteredItems, register } = useCollectionDetails({
    data: nftByCollectionId,
  });

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
        <div className="mx-auto lg:max-w-[50rem]">
          <Input
            placeholder="Search your favorite NFTs"
            type="search"
            name="nftSearchValue"
            register={register}
          />
        </div>

        <DiscoverIndexList
          skeletonVariant="fluid"
          isLoading={isLoading}
          items={(filteredItems || [])?.map((item, index) => (
            <HighlightedNFTCard key={index} {...item} />
          ))}
        />
      </div>
    </div>
  );
};
