import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "./button.variants";

export interface ButtonProps extends ButtonVariants {
  url?: string;
  isExternal?: boolean;
  label: string;
  icon?: IconName | string;
}
