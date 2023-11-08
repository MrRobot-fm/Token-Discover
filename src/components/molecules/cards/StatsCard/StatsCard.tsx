"use client";

import { useGetTransformedValue } from "@/hooks/use-get-transformed-value";
import type { StatsCardProps } from "./StatsCard.props";

export const StatsCard = (props: StatsCardProps) => {
  const { stats = 240, label = "total sales" } = props;

  const { motionValue } = useGetTransformedValue({
    value: stats,
  });

  return (
    <div className="flex justify-center base:w-[9rem] lg:w-[15rem]">
      <div>
        <p className="base:heading5 lg:heading4">{motionValue}</p>
        <span className="base:paragraph lg:heading5 capitalize">{label}</span>
      </div>
    </div>
  );
};
