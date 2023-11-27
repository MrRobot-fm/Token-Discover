import type { ImageProps } from "next/image";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";

export type TopCollectionCardProps = {
  image?: ImageProps;
  creator?: string;
  collectionName?: string;
  collectionLength?: number;
  data?: GetNftByCollectionsIdResponseModel;
};
