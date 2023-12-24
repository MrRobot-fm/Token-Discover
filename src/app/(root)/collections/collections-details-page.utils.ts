import { getTopCollections } from "@/api/collections/get-top-collections";

export const getTopCollectionsId = async () => {
  const data = await getTopCollections({
    chains: "ethereum,polygon,solana",
    time_period: "7d",
  });

  return data?.collections?.map((collection) => collection?.collection_id);
};
