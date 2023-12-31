import type { ImageProps } from "next/image";
import type { HTMLProps } from "react";
import { AvatarVariants } from "../Avatar/Avatar.variants";

export type NftCardFooterProps = {
  avatarImage?: ImageProps;
  avatarSize?: AvatarVariants["size"];
  nftName?: string;
  collectionName?: string;
  footerWrapperStyles?: HTMLProps<HTMLElement>["className"];
  authorWrapperStyles?: HTMLProps<HTMLElement>["className"];
  nftPrice?: number;
  nftHighBid?: number;
  criptoCurrency?: string;
  hasDetails?: boolean;
};
