import React from "react";
import { StatsCard } from "@/components/molecules/cards/StatsCard/StatsCard";
import { statsValue } from "@/public/mock/stats-value";

export default function StatsCardPage() {
  return (
    <div className="flex h-screen items-center justify-center gap-[5rem]">
      <div className="flex w-full justify-evenly">
        {statsValue.map((value) => (
          <StatsCard
            key={`${value.id}-${value.label}`}
            stats={value?.stat}
            label={value?.label}
          />
        ))}
      </div>
    </div>
  );
}
