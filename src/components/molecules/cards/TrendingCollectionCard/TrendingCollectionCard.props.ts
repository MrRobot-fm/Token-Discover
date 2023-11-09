import type { ImageProps } from "next/image";

export type TrendingCollectionCardProps = {
  image?: ImageProps["src"];
  author: string;
  collectionName: string;
  collectionLength: number;
};
