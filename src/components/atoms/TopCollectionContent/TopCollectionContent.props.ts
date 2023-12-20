import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import type { TopCollectionContentVariants } from "./top-collection-content.variants";

export interface TopCollectionContentProps
  extends TopCollectionContentVariants {
  image: ImageProps;
  href?: LinkProps["href"];
}
