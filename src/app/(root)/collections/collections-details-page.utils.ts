import v from "voca";
import { getTopCollections } from "@/api/collections/get-top-collections";

export const getCollectionDetailsParams = async () => {
  const data = await getTopCollections({
    chains: "ethereum,polygon,solana",
    time_period: "7d",
  });

  const topCollectionsIdArray = data?.collections?.map(
    (collection) => collection?.collection_id
  );
  const topCollectionsNameArray = data?.collections?.map(
    (collection) => v.kebabCase(collection?.collection_details?.name) || null
  );

  const mergedArray = [
    ...(topCollectionsIdArray || []),
    ...(topCollectionsNameArray || []),
  ];

  return mergedArray;
};
