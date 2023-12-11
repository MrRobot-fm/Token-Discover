"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { Button } from "@/components/atoms/Button/Button";
import { styles } from "./discover-tab.styles";

export const DiscoverTab = ({
  discoverTabsMap,
}: {
  discoverTabsMap: DiscoverTabsModel[];
}) => {
  const pathname = usePathname();

  return (
    <div className={styles.discoverTabWrapper}>
      {discoverTabsMap.map((tab, index) => (
        <Fragment key={`${index}-${tab.label}`}>
          <Button
            variant="link"
            label={tab.label}
            href={tab.url}
            className={`${
              pathname === tab.url &&
              "scale-110 text-callToAction transition duration-500 hover:text-purple-500"
            } transition duration-500 hover:text-label-grey`}
          />
          <div className={styles.discoverTab_mobileBorder} />
        </Fragment>
      ))}
    </div>
  );
};
