import { useGetNftByCollectionByIdCombined } from "@/api/NFT/hooks/use-get-nft-by-collection-id-combined";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverNfts } from "./use-discover-nfts";

export const DiscoverNFTs = ({ collectionId }: { collectionId: string[] }) => {
  const { data: nftByCollectionId, isLoading } =
    useGetNftByCollectionByIdCombined({
      collectionsIds: collectionId,
    });

  const { filteredItems, handleInputChange, value } = useDiscoverNfts({
    data: nftByCollectionId,
  });

  return (
    <div className="w-full py-[8rem] base:space-y-[5rem] xl:space-y-[8rem]">
      <div className="mx-auto lg:max-w-[50rem]">
        <Input
          label="search"
          placeholder="Search your favorite NFTs"
          type="search"
          value={value}
          onChange={handleInputChange}
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
  );
};
