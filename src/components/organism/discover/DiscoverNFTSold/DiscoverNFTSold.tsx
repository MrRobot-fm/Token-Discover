import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { SearchBar } from "@/components/atoms/Forms/SearchBar/SearchBar";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverNftSold } from "./use-discover-nft-sold";

export const DiscoverNFTSold = ({
  collectionId,
  fetchNextPage,
}: {
  collectionId: string[];
  fetchNextPage: () => void;
}) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    nftDetails: "1",
    limit: 1,
  });

  const { filteredItems, register } = useDiscoverNftSold({
    data: topNftSales,
  });

  return (
    <div className="w-full py-[6rem] base:space-y-[4rem] xl:space-y-[6rem]">
      <SearchBar
        name="nftSearchValue"
        placeholder="Search your favorite NFTs"
        register={register}
      />
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(filteredItems || []).map((item, index) => (
          <TopNftSoldCard key={index} {...item} />
        ))}
      />
      {!!filteredItems?.length && <LoadMore loadMore={fetchNextPage} />}
    </div>
  );
};
