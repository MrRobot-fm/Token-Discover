import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "./button.variants";

export interface ButtonProps extends ButtonVariants {
  url?: string;
  label: string;
  icon?: IconName;
}
