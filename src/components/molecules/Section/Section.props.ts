import type { HTMLProps, ReactNode } from "react";
import type { IconName } from "@/types/icons";

export type SectionProps = {
  children?: ReactNode;
  title: string;
  subTitle: string;
  hasCta?: boolean;
  ctaProps?: {
    label?: string;
    icon?: IconName;
    href?: string;
  };
  sectionStyles?: HTMLProps<HTMLElement>["className"];
  titleProps?: {
    titleStyles?: HTMLProps<HTMLHeadElement>["className"];
    subtitleStyles?: HTMLProps<HTMLHeadElement>["className"];
  };
};
