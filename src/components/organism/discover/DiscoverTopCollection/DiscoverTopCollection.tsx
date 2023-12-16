import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { TopCollectionCard } from "@/components/molecules/cards/TopCollectionCard/TopCollectionCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverTopCollection } from "./use-discover-top-collection";

export const DiscoverTopCollection = ({
  collectionId,
  fetchNextPage,
}: {
  collectionId: string[];
  fetchNextPage: () => void;
}) => {
  const { data: nftByCollection, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  const { filteredItems, register } = useDiscoverTopCollection({
    data: nftByCollection,
  });

  return (
    <div className="w-full py-[8rem] base:space-y-[5rem] xl:space-y-[8rem]">
      <SearchBar
        name="collectionSearchValue"
        placeholder="Search your favorite collections"
        register={register}
      />
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={filteredItems?.map((collection, index) => (
          <TopCollectionCard key={index} data={collection} />
        ))}
      />
      {!!filteredItems?.length && <LoadMore loadMore={fetchNextPage} />}
    </div>
  );
};
