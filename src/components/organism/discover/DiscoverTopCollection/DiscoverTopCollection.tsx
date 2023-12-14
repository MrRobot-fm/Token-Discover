import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { TopCollectionCard } from "@/components/molecules/cards/TopCollectionCard/TopCollectionCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverTopCollection } from "./use-discover-top-collection";

export const DiscoverTopCollection = ({
  collectionId,
}: {
  collectionId: string[];
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
      <div className="mx-auto lg:max-w-[50rem]">
        <Input
          label="search"
          placeholder="Search your favourite collections"
          type="search"
          name="collectionSearchValue"
          register={register}
        />
      </div>
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={filteredItems?.map((collection, index) => (
          <TopCollectionCard key={index} data={collection} />
        ))}
      />
    </div>
  );
};
