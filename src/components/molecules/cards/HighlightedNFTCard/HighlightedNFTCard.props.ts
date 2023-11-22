import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import type { HTMLProps } from "react";
import type { NftCardFooterProps } from "@/components/atoms/NftCardFooter/NftCardFooter.props";
import type { highlightedNftCardVariants } from "./highlightedNFTCard.variants";

export interface HighlightNFTedCardProps
  extends NftCardFooterProps,
    highlightedNftCardVariants {
  cardWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  imageWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  cardImage?: ImageProps;
  href?: LinkProps["href"];
}
