import { HTMLProps } from "react";
import type { IconName } from "@/types/icons";
import { IconVariants } from "./Icon.variables";

export interface IconProps
  extends Omit<HTMLProps<HTMLElement>, "size">,
    IconVariants {
  name: IconName;
}
