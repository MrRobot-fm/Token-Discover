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

        const { nft_details } = top_sales[0] || {};

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
          href: `/nft/${chain}/${contract_address}/${token_id}`,
          image: {
            src: image_url,
            alt: name,
          },
          collection: {
            image: {
              src: collection?.image_url,
              alt: collection?.name,
            },
            name: collection?.name,
          },
          avatarStyle: { size: { base: "md", md: "lg" } },
          criptoCurrency: last_sale?.payment_token?.symbol,
          price: last_sale?.unit_price || 0,
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
