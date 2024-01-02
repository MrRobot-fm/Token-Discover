"use client";

import { usePathname } from "next/navigation";
import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { SegmentControl } from "@/components/molecules/SegmentControl/SegmentControl";

export const DiscoverTab = ({
  discoverTabsMap,
}: {
  discoverTabsMap: DiscoverTabsModel[];
}) => {
  const pathname = usePathname();

  return (
    <div className="discoverTab mt-[3.5rem] grid w-full place-items-center overflow-x-auto pr-[-5rem]">
      <SegmentControl
        options={discoverTabsMap}
        pathname={pathname}
        size="segmentControlSm"
        isDiscoverSection
      />
    </div>
  );
};
