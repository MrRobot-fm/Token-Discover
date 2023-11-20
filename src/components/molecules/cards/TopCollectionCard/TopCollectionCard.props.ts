import type { ImageProps } from "next/image";

export type TopCollectionCardProps = {
  image?: ImageProps["src"];
  creator?: string;
  collectionName?: string;
  collectionLength?: number;
  collectionId?: string;
};
