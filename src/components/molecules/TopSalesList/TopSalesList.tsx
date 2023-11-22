import { TopSalesListContent } from "./TopSalesListContent";

export const TopSalesList = ({ collectionId }: { collectionId?: string[] }) => {
  return collectionId?.map((collectionId, index) => (
    <TopSalesListContent key={index} collectionId={collectionId} />
  ));
};
