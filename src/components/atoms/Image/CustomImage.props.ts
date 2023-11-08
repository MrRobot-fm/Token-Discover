import type { ImageProps as NextImageProps } from "next/image";
import { HTMLProps } from "react";
import type { CustomImageVariants } from "./customImage.variants";

export type CustomImageProps = NextImageProps &
  CustomImageVariants &
  Pick<HTMLProps<HTMLDivElement>, "className">;
