import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverNfts } from "./use-discover-nfts";

export const DiscoverNFTs = ({
  collectionId,
  fetchNextPage,
}: {
  collectionId: string[];
  fetchNextPage: () => void;
}) => {
  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  const { filteredItems, register } = useDiscoverNfts({
    data: nftByCollectionId,
  });

  return (
    <div className="w-full py-[8rem] base:space-y-[5rem] xl:space-y-[8rem]">
      <SearchBar
        name="nftSearchValue"
        placeholder="Search your favorite NFTs"
        register={register}
      />
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(filteredItems || [])?.map((item, index) => (
          <HighlightedNFTCard key={index} {...item} />
        ))}
      />
      {!!filteredItems?.length && <LoadMore loadMore={fetchNextPage} />}
    </div>
  );
};
