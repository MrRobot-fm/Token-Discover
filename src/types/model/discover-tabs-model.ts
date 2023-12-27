import { IconName } from "../icons";

export type DiscoverTabsModel = {
  text?: string;
  route?: string;
  icon?: IconName;
  targetSegment?: string | null;
};
