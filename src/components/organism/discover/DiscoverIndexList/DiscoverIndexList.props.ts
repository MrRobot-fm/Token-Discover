import type { ReactNode } from "react";
import type { SkeletonVariants } from "@/components/molecules/Skeleton/skeleton.variants";

export type DiscoverIndexListProps = {
  items: ReactNode[];
  isLoading?: boolean;
  skeletonVariant?: SkeletonVariants["variant"];
};
