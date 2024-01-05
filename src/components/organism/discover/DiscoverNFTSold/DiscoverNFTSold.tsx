import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { LoadMore } from "@/components/atoms/LoadMore/LoadMore";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";
import { useDiscoverNftSold } from "./use-discover-nft-sold";

export const DiscoverNFTSold = ({
  collectionId,
  fetchNextPage,
  hasNextPage,
}: {
  collectionId: string[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    nftDetails: "1",
    limit: 1,
  });

  const { filteredItems } = useDiscoverNftSold({
    data: topNftSales,
  });

  return (
    <div className="w-full py-[6rem] base:space-y-[4rem] xl:space-y-[6rem]">
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(filteredItems || []).map((item, index) => (
          <TopNftSoldCard key={index} {...item} />
        ))}
      />
      {hasNextPage && <LoadMore loadMore={fetchNextPage} />}
    </div>
  );
};
