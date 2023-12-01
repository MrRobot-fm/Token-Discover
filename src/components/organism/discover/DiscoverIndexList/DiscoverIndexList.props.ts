import type { ReactNode } from "react";
import type { CardSkeletonVariants } from "@/components/molecules/cards/CardSkeleton/card-skeleton.variants";

export type DiscoverIndexListProps = {
  items: ReactNode[];
  isLoading?: boolean;
  skeletonVariant?: CardSkeletonVariants["variant"];
};
