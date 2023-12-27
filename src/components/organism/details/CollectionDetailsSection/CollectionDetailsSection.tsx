"use client";

import { notFound } from "next/navigation";
import { useGetInfiniteNftCollectionById } from "@/api/NFT/hooks/use-infinite-nft-by-collection-id";
import { useGetCollectionById } from "@/api/collections/hooks/use-get-collection-by-id";
import { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
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

  const {
    data: nftByCollectionId,
    isFetching: isNFTLoading,
    fetchNextPage,
  } = useGetInfiniteNftCollectionById({
    collectionId: id,
    limit: 20,
  });

  const itemsLoaded = nftByCollectionId?.pages?.flatMap((item) => item?.nfts);

  const { filteredItems, register } = useCollectionDetails({
    data: itemsLoaded as GetNftByCollectionsIdResponseModel["nfts"],
  });

  if (
    !isLoading &&
    !isNFTLoading &&
    (!collectionById?.collections?.length || !nftByCollectionId?.pages?.length)
  ) {
    return notFound();
  }

  return (
    <div className={styles.collectionDetailsSection}>
      <DetailsPageCover
        bannerProps={{
          src: collectionById?.collections[0]?.banner_image_url || "",
          alt: `${collectionById?.collections[0]?.collection_id}-img`,
        }}
        avatarProps={{
          src: collectionById?.collections[0]?.image_url || "",
          alt: `${collectionById?.collections[0]?.name}-img`,
        }}
        isLoading={isLoading}
      />
      <CollectionDetailsInfo data={collectionById} />
      <div className={styles.collectionDetails_list}>
        <SearchBar
          name="nftSearchValue"
          placeholder="Search your favorite NFTs"
          register={register}
        />
        <DiscoverIndexList
          skeletonVariant="fluid"
          isLoading={isNFTLoading}
          items={(filteredItems || []).map((item, index) => (
            <HighlightedNFTCard key={index} {...item} />
          ))}
        />
        {!!filteredItems?.length && <LoadMore loadMore={fetchNextPage} />}
      </div>
    </div>
  );
};
