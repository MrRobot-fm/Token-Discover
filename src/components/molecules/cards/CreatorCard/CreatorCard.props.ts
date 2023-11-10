import type { LinkProps } from "next/link";
import type { AvatarVariants } from "@/components/atoms/Avatar/avatar.variants";

export type CreatorCardProps = {
  avatarStyle?: AvatarVariants;
  creatorName: string;
  totalSales: number;
  criptoCurrency: string;
  href?: LinkProps["href"];
};
