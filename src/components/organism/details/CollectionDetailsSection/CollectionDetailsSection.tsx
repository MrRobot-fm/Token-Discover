"use client";

import { notFound } from "next/navigation";
import { useSearchTokens } from "@/hooks/use-search-tokens";
import { useGetInfiniteNFTsByCollectionAddress } from "@/api/NFT/hooks/use-get-nfts-by-collection-address";
import { useGetCollectionsByContract } from "@/api/collections/hooks/use-get-collections-contract";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { CollectionDetailsInfo } from "@/components/molecules/details/CollectionDetailsInfo/CollectionDetailsInfo";
import { DetailsPageCover } from "@/components/molecules/details/DetailsPageCover/DetailsPageCover";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { styles } from "./collection-details-section.styles";
import { useCollectionDetails } from "./use-collection-details";

export const CollectionDetailsSection = ({
  contractAddress,
  chain,
}: {
  contractAddress: string;
  chain: string;
}) => {
  const { search, handleSearch, register, handleSubmit } = useSearchTokens();

  const { data: collectionByContract, isLoading } = useGetCollectionsByContract(
    {
      contractAddress,
      chain,
    }
  );

  const {
    data: nftByContract,
    isFetching: isNFTLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteNFTsByCollectionAddress({
    isListing: false,
    contractAddress: contractAddress,
    sortBy: "last_price_high_to_low",
    keyword: search || "",
  });

  const itemsLoaded = nftByContract?.pages?.flatMap((item) => item?.nfts);

  const { filteredItems } = useCollectionDetails({
    data: itemsLoaded,
    collectionImage: collectionByContract?.collections[0]?.image_url || "",
  });

  if (
    (collectionByContract && collectionByContract?.collections?.length === 0) ||
    (nftByContract && nftByContract?.pages?.length <= 0)
  ) {
    return notFound();
  }

  return (
    <div className={styles.collectionDetailsSection}>
      <DetailsPageCover
        bannerProps={{
          src: collectionByContract?.collections[0]?.banner_image_url || "",
          alt: `${collectionByContract?.collections[0]?.collection_id}-img`,
        }}
        avatarProps={{
          src: collectionByContract?.collections[0]?.image_url || "",
          alt: `${collectionByContract?.collections[0]?.name}-img`,
        }}
        isLoading={isLoading}
      />
      <CollectionDetailsInfo data={collectionByContract} />
      {nftByContract && (
        <div className={styles.collectionDetails_list}>
          <SearchBar
            name="searchValue"
            placeholder="Search your favorite NFTs"
            register={register}
            onSubmit={handleSubmit(handleSearch)}
          />
          <DiscoverIndexList
            skeletonVariant="fluid"
            isLoading={isNFTLoading}
            items={(filteredItems || []).map((item, index) => (
              <HighlightedNFTCard key={index} {...item} />
            ))}
          />
          {hasNextPage && <LoadMore loadMore={fetchNextPage} />}
        </div>
      )}
    </div>
  );
};
