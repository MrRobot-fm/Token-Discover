"use client";

import { useGetTransformedValue } from "@/hooks/use-get-transformed-value";
import type { StatsCardProps } from "./StatsCard.props";

export const StatsCard = (props: StatsCardProps) => {
  const { stats = 240, label = "total sales" } = props;

  const { motionValue } = useGetTransformedValue({
    value: stats,
  });

  return (
    <div className="flex base:w-[9rem] base:justify-center md:w-[15rem] lg:justify-start">
      <div>
        <p className="base:heading5 md:heading4">{motionValue}</p>
        <span className="base:paragraph md:heading5 capitalize">{label}</span>
      </div>
    </div>
  );
};
