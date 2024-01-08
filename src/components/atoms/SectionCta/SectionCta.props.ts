import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "../Button/Button.variants";

export interface SectionCtaProps extends ButtonVariants {
  label?: string;
  icon?: IconName;
  href?: string;
}
