import { useGetTopSalesByCollection } from "@/api/top-sales/hooks/use-get-top-sales-by-collection";
import { CardSkeleton } from "@/components/molecules/cards/CardSkeleton/CardSkeleton";
import { TopNftSoldCard } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard";

export const TopSalesListContent = ({
  collectionId,
}: {
  collectionId: string;
}) => {
  collectionId;
  const { data: topNftSales, isLoading } = useGetTopSalesByCollection({
    collectionId,
    limit: 1,
    nftDetails: "1",
  });

  return isLoading ? (
    <CardSkeleton variant="topSales" barCount={2} />
  ) : (
    topNftSales?.top_sales?.map((item, index) => (
      <TopNftSoldCard
        key={index}
        nftName={item?.nft_details?.name || `#${item?.nft_details?.token_id}`}
        image={{
          src: item?.nft_details?.image_url,
          alt: item?.nft_details?.token_id,
        }}
        avatarStyle={{ size: { base: "md", md: "lg" } }}
        criptoCurrency={item?.sale_details?.payment_token?.symbol}
        price={item?.sale_details?.unit_price}
      />
    ))
  );
};
