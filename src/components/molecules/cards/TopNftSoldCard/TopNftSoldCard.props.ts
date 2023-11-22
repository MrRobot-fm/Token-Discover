import type { ImageProps } from "next/image";
import type { LinkProps } from "next/link";
import type { AvatarVariants } from "@/components/atoms/Avatar/avatar.variants";

export type TopNftSoldCardProps = {
  avatarStyle?: AvatarVariants;
  nftName: string;
  price: number;
  image: ImageProps;
  criptoCurrency: string;
  href?: LinkProps["href"];
};
