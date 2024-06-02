import React from "react";

export const RankingBadge = ({ ranking }: { ranking: number }) => {
  return (
    <div className="absolute z-50 grid h-[3rem] w-[3rem] place-items-center rounded-full bg-background-black base:left-[-1rem] base:top-[-0.8rem] md:left-[2rem] md:top-[1.8rem]">
      <span className="paragraph text-label-grey">{ranking}</span>
    </div>
  );
};
