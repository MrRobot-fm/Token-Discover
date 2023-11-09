import { HTMLProps } from "react";
import type { IconName } from "@/types/icons";
import { IconVariants } from "./Icon.variants";

export interface IconProps
  extends Omit<HTMLProps<HTMLElement>, "size">,
    IconVariants {
  name: IconName;
}
