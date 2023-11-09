"use client";

import useBreakpoints from "@/hooks/use-breakpoints";
import type { IconName } from "@/types/icons";
import { Button } from "@/components/atoms/Button/Button";

export const HeroCta = ({
  label = "get started",
  icon = "rocket",
}: {
  label?: string;
  icon?: IconName;
}) => {
  const { isTablet } = useBreakpoints();
  return <Button {...{ label, icon }} size={isTablet ? "lg" : "md"} />;
};
