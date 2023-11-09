import type { ImageProps } from "next/image";
import type { HTMLProps } from "react";

export type CollectionCardFooterProps = {
  avatarImage?: ImageProps["src"];
  author: string;
  nftName?: string;
  collectionName?: string;
  footerWrapperStyles?: HTMLProps<HTMLElement>["className"];
};
