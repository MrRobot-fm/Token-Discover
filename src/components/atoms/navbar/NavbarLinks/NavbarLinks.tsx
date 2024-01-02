import { useSelectedLayoutSegment } from "next/navigation";
import type { IconName } from "@/types/icons";
import { SegmentControl } from "@/components/molecules/SegmentControl/SegmentControl";

export const NavbarLinks = ({
  links,
}: {
  links: {
    text: string;
    route: string;
    icon: IconName;
    targetSegment: string | null;
  }[];
}) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex items-center justify-between gap-[10rem]">
      <SegmentControl
        options={links}
        pathname={segment}
        size="segmentControlMd"
      />
    </div>
  );
};
