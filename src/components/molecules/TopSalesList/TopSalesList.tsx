"use client";

import { useMemo } from "react";
import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";
import type { TopNftSoldCardProps } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard.props";

export const TopSalesList = ({ collectionId }: { collectionId: string[] }) => {
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    limit: 1,
    nftDetails: "1",
  });

  const parsedItems: TopNftSoldCardProps[] = useMemo(() => {
    if (!topNftSales) return [];

    return topNftSales.map((item) => {
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
    <>
      {parsedItems.map((item, index) =>
        isLoading ? (
          <Skeleton key={index} variant="topSales" barCount={2} />
        ) : (
          <TopNftSoldCard key={`${index}-${item.nftName}`} {...item} />
        )
      )}
    </>
  );
};
