import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { Input } from "@/components/atoms/Forms/Input/Input";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverNftSold } from "./use-discover-nft-sold";

export const DiscoverNFTSold = ({
  collectionId,
}: {
  collectionId: string[];
}) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    nftDetails: "1",
  });

  const { filteredItems, handleInputChange, value } = useDiscoverNftSold({
    data: topNftSales,
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
        items={(filteredItems || []).map((item, index) => (
          <TopNftSoldCard key={index} {...item} />
        ))}
      />
    </div>
  );
};
