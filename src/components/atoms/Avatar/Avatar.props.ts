import type { ImageProps } from "next/image";
import type { HTMLProps } from "react";
import type { AvatarVariants } from "./avatar.variants";

export interface AvatarProps
  extends ImageProps,
    AvatarVariants,
    Pick<HTMLProps<HTMLDivElement>, "className"> {
  isLoading?: boolean;
}
