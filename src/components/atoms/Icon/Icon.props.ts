import type { HTMLProps } from "react";
import type { IconName } from "@/types/icons";
import type { IconVariants } from "./Icon.variants";

export interface IconProps
  extends Omit<HTMLProps<HTMLElement>, "size">,
    Omit<IconVariants, "size"> {
  name: IconName;
  size?: IconVariants["size"];
}
