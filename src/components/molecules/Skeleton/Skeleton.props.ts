import type { HTMLProps } from "react";
import type { SkeletonVariants } from "./skeleton.variants";

export interface SkeletonProps
  extends SkeletonVariants,
    Pick<HTMLProps<HTMLElement>, "className"> {
  barCount?: number;
}
