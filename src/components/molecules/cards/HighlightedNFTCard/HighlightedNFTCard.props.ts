import { ImageProps } from "next/image";
import { HTMLProps } from "react";

export type HighlightNFTedCardProps = {
  cardWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  imageWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  cardImage?: ImageProps["src"];
  avatarImage?: ImageProps["src"];
  author: string;
  nftName: string;
};
