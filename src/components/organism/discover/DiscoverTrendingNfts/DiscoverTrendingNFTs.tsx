import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverTrendingNfts } from "./use-discover-trending-nfts";

export const DiscoverTrendingNFTs = ({
  collectionId,
  fetchNextPage,
  hasNextPage,
}: {
  collectionId: string[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}) => {
  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
      limit: 1,
    });

  const { filteredItems } = useDiscoverTrendingNfts({
    data: nftByCollectionId,
  });

  return (
    <div className="w-full py-[6rem] base:space-y-[4rem] xl:space-y-[6rem]">
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(filteredItems || [])?.map((item, index) => (
          <HighlightedNFTCard key={index} {...item} />
        ))}
      />
      {hasNextPage && <LoadMore loadMore={fetchNextPage} />}
    </div>
  );
};
