import { ImageProps } from "next/image";
import { HTMLProps } from "react";
import type { NftCardFooterProps } from "@/components/atoms/NftCardFooter/NftCardFooter.props";

export interface HighlightNFTedCardProps extends NftCardFooterProps {
  cardWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  imageWrapperStyles?: HTMLProps<HTMLDivElement>["className"];
  cardImage?: ImageProps["src"];
}
