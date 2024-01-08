import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import type { ButtonVariants } from "@/components/atoms/Button/button.variants";

export type SegmentControlProps = {
  options: DiscoverTabsModel[];
  pathname: string | null;
  isDiscoverSection?: boolean;
  size?: ButtonVariants["size"];
};
