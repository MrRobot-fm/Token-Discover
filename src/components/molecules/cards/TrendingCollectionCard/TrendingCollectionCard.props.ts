import type { ImageProps } from "next/image";

export type TrendingCollectionCardProps = {
  image?: ImageProps["src"];
  creator: string;
  collectionName: string;
  collectionLength: number;
};
