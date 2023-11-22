"use client";

import { useGetTransformedValue } from "@/hooks/use-get-transformed-value";
import type { StatsCardProps } from "./StatsCard.props";
import { styles } from "./stats-card.styles";

export const StatsCard = (props: StatsCardProps) => {
  const { stats = 240, label = "total sales" } = props;

  const { motionValue } = useGetTransformedValue({
    value: stats,
  });

  return (
    <div className={styles.statWrapper}>
      <div>
        <p className={styles.statValue}>{motionValue}</p>
        <span className={styles.statLabel}>{label}</span>
      </div>
    </div>
  );
};
