import type { ImageProps } from "next/image";
import type { HTMLProps } from "react";

export type NftCardFooterProps = {
  avatarImage?: ImageProps["src"];
  creator: string;
  nftName?: string;
  collectionName?: string;
  footerWrapperStyles?: HTMLProps<HTMLElement>["className"];
  nftPrice?: number;
  nftHighBid?: number;
  criptoCurrency?: string;
  hasDetails?: boolean;
};
