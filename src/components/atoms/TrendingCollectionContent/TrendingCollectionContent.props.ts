import type { ImageProps } from "next/image";
import type { TrendingCollectionContentVariants } from "./trending-collection-content.variants";

export interface TrendingCollectionContentProps
  extends TrendingCollectionContentVariants {
  image?: ImageProps["src"];
  collectionLength?: number;
  hasText?: boolean;
}
