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
        return {
          nftName:
            item?.top_sales[0]?.nft_details?.name ||
            `#${item?.top_sales[0]?.nft_details?.token_id}`,

          image: {
            src: item?.top_sales[0]?.nft_details?.image_url || "",
            alt: item?.top_sales[0]?.nft_details?.token_id || "",
          },
          collection: {
            image: {
              src: item?.top_sales[0]?.nft_details?.collection?.image_url || "",
              alt: item?.top_sales[0]?.nft_details?.collection?.name || "",
            },
            name: item?.top_sales[0]?.nft_details?.collection?.name || "",
          },
          avatarStyle: { size: { base: "md", md: "lg" } },
          criptoCurrency:
            item?.top_sales[0]?.sale_details?.payment_token?.symbol || "",
          price: item?.top_sales[0]?.sale_details?.unit_price || 0,
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
