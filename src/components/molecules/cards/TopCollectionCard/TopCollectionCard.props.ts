import type { ImageProps } from "next/image";

export type TopCollectionCardProps = {
  image?: ImageProps;
  creator?: string;
  collectionName?: string;
  collectionLength?: number;
  collectionId?: string;
};
