import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
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
      limit: 4,
    });

  const { filteredItems } = useDiscoverTopCollection({
    data: nftByCollection,
  });

  return (
    <div className="w-full py-[6rem] base:space-y-[4rem] xl:space-y-[6rem]">
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
