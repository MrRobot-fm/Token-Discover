import type { ImageProps as NextImageProps } from "next/image";
import { HTMLProps } from "react";
import type { CustomImageVariants } from "./customImage.variants";

export interface CustomImageProps
  extends NextImageProps,
    CustomImageVariants,
    Pick<HTMLProps<HTMLDivElement>, "className"> {
  isLoading?: boolean;
}
