"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { Button } from "@/components/atoms/Button/Button";

export const DiscoverTab = ({
  discoverTabsMap,
}: {
  discoverTabsMap: DiscoverTabsModel[];
}) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center border-background-grey py-[1rem] base:flex-col base:items-center base:gap-[2rem] base:border-t-[2px] md:flex-row md:gap-[5rem] md:border-y-[2px] lg:gap-[8rem]">
      {discoverTabsMap.map((tab, index) => (
        <Fragment key={index}>
          <Button
            variant="link"
            label={tab.label}
            href={tab.url}
            className={`${
              pathname === tab.url &&
              "scale-110 text-callToAction transition duration-500 hover:text-purple-500"
            } transition duration-500 hover:text-label-grey`}
          />
          <div className="h-[2px] w-full bg-background-grey base:block md:hidden" />
        </Fragment>
      ))}
    </div>
  );
};
