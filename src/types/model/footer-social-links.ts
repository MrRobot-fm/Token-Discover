import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "@/components/atoms/Button/button.variants";

export type FooterSocialLinks = {
  icon: IconName;
  size: ButtonVariants["size"];
  variant: ButtonVariants["variant"];
  url: string;
};
