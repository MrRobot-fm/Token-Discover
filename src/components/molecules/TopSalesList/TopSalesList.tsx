"use client";

import { useMemo } from "react";
import v from "voca";
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

    return topNftSales?.map((item) => {
      const { top_sales = [] } = item || {};

      const { nft_details, collection_id } = top_sales[0] || [];

      const {
        name,
        token_id,
        chain,
        contract_address,
        image_url,
        collection,
        last_sale,
      } = nft_details || {};

      return {
        nftName: name || `#${token_id}`,
        href: `/nft/${
          v.kebabCase(name) || null
        }/${chain}/${contract_address}/${token_id}/${collection_id}`,
        image: {
          src: image_url || "",
          alt: `#${token_id}-img`,
        },
        collection: {
          image: {
            src: collection?.image_url || "",
            alt: `${collection?.name}-img`,
          },
          name: collection?.name,
        },
        avatarStyle: { size: { base: "md", md: "lg" } },
        criptoCurrency:
          last_sale?.payment_token?.symbol || chain?.slice(0, 3)?.toUpperCase(),
        price: last_sale?.unit_price || 0,
        decimals: last_sale?.payment_token?.decimals || 0,
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
