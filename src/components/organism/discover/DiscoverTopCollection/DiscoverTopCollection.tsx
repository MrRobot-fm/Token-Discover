import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { TopCollectionCard } from "@/components/molecules/cards/TopCollectionCard/TopCollectionCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";

export const DiscoverTopCollection = ({
  collectionId,
}: {
  collectionId: string[];
}) => {
  const { data: nftByCollection, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  return (
    <div className="w-full py-[8rem]">
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(nftByCollection || [])
          ?.filter((item) => item?.nfts[0]?.image_url !== null)
          ?.map((collection, index) => (
            <TopCollectionCard key={index} data={collection} />
          ))}
      />
    </div>
  );
};
