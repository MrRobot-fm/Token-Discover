"use client";

import useBreakpoints from "@/hooks/use-breakpoints";
import { Button } from "@/components/atoms/Button/Button";
import type { SectionCtaProps } from "./SectionCta.props";

export const SectionCta = (props: SectionCtaProps) => {
  const { icon = "rocket", label = "get started", variant } = props;

  const { isTablet } = useBreakpoints();

  return (
    <Button
      {...{ label, icon }}
      size={isTablet ? "lg" : "md"}
      variant={variant}
    />
  );
};
