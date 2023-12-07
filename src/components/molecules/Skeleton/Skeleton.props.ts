import type { ReactNode } from "react";
import type { SkeletonVariants } from "./skeleton.variants";

export interface SkeletonProps extends SkeletonVariants {
  barCount?: number;
  children?: ReactNode;
}
