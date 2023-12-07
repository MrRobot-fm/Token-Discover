import { useMemo } from "react";
import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { TopNftSoldCardProps } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard.props";
import { DiscoverIndexList } from "@/components/organism/discover/DiscoverIndexList/DiscoverIndexList";

export const DiscoverNFTSold = ({
  collectionId,
}: {
  collectionId: string[];
}) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    nftDetails: "1",
  });

  const parsedItems: TopNftSoldCardProps[] = useMemo(() => {
    if (!topNftSales) return [];

    return topNftSales
      ?.filter(
        (item) =>
          item?.top_sales[0]?.nft_details?.image_url !== null &&
          item?.top_sales[0]?.nft_details?.name !== null
      )
      ?.map((item) => {
        const { top_sales = [] } = item || {};

        const { nft_details, sale_details } = top_sales[0] || [];

        return {
          nftName: nft_details?.name || `#${nft_details?.token_id}`,

          image: {
            src: nft_details?.image_url,
            alt: nft_details?.token_id,
          },
          collection: {
            image: {
              src: nft_details?.collection?.image_url,
              alt: nft_details?.collection?.name,
            },
            name: nft_details?.collection?.name,
          },
          avatarStyle: { size: { base: "md", md: "lg" } },
          criptoCurrency: sale_details?.payment_token?.symbol,
          price: sale_details?.unit_price || 0,
        };
      });
  }, [topNftSales]);

  return (
    <div className="w-full py-[8rem]">
      <DiscoverIndexList
        skeletonVariant="fluid"
        isLoading={isLoading}
        items={(parsedItems || []).map((item, index) => (
          <TopNftSoldCard key={index} {...item} />
        ))}
      />
    </div>
  );
};
