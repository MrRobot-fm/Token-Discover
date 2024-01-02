import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "@/components/atoms/Button/button.variants";
import { IconVariants } from "@/components/atoms/Icon/Icon.variants";

export type SocialLinksModel = {
  icon: IconName;
  size: ButtonVariants["size"] & IconVariants["size"];
  variant: ButtonVariants["variant"];
  url: string;
};

export type FooterLinksModel = {
  title: string;
  links: { label: string; type: string; route: string }[];
}[];
