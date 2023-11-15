import type { LinkProps } from "next/link";

export type OnBoardingFooterProps = {
  label: string;
  href: LinkProps["href"];
  cta: string;
};
