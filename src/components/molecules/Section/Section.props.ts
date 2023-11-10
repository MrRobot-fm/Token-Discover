import type { ReactNode } from "react";
import type { IconName } from "@/types/icons";

export type SectionProps = {
  children?: ReactNode;
  title: string;
  subTitle: string;
  hasCta?: boolean;
  ctaProps?: {
    label: string;
    icon: IconName;
  };
};
