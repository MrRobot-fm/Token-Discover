import { getNftByCollectionId } from "@/api/NFT/get-nft-by-collection-id";
import { getTopSalesByCollection } from "@/api/top-sales/get-top-sales-by-collection";

export const getNftDetailsParams = async ({
  collectionId,
}: {
  collectionId: string;
}) => {
  const topSalesByCollection = await getTopSalesByCollection({
    collection_id: collectionId,
    include_nft_details: "1",
    limit: 1,
  });

  const nftByCollection = await getNftByCollectionId({
    collection_id: collectionId,
    limit: 1,
  });

  const topSalesByCollectionArray = topSalesByCollection?.top_sales?.map(
    (nft) => {
      const { chain, contract_address, token_id, collection_id } = nft || {};

      return [chain, contract_address, token_id, collection_id];
    }
  );

  const nftByCollectionArray = nftByCollection?.nfts?.map((nft) => {
    const {
      chain,
      contract_address,
      token_id,
      collection: { collection_id },
    } = nft || {};

    return [chain, contract_address, token_id, collection_id];
  });

  const [topSalesByCollectionParams, nftParams] = [
    ...(topSalesByCollectionArray || []),
    ...(nftByCollectionArray || []),
  ];

  const mergedArray = [
    ...(topSalesByCollectionParams || []),
    ...(nftParams || []),
  ];

  return mergedArray;
};
