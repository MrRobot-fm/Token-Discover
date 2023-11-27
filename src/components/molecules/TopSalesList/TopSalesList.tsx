"use client";

import { useMemo } from "react";
import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import { TopNftSoldCardProps } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard.props";

export const TopSalesList = ({ collectionId }: { collectionId: string[] }) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    limit: 1,
    nftDetails: "1",
  });

  const parsedItems: TopNftSoldCardProps[] = useMemo(() => {
    if (!topNftSales) return [];

    return topNftSales.map((item) => {
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
    <>
      {parsedItems.map((item, index) =>
        isLoading ? (
          <CardSkeleton key={index} variant="topSales" barCount={2} />
        ) : (
          <TopNftSoldCard key={`${index}-${item.nftName}`} {...item} />
        )
      )}
    </>
  );
};
