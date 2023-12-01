import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { PAGES_PATH } from "./pages-path";

export const discoverTabsMaps: DiscoverTabsModel[] = [
  {
    label: "Top collections",
    url: PAGES_PATH.DISCOVER_TOP_COLLECTIONS,
  },
  {
    label: "Top sold NFTs",
    url: PAGES_PATH.DISCOVER_TOP_SOLD_NFTS,
  },
  {
    label: "Trending NFTs",
    url: PAGES_PATH.DISCOVER_TRENDING_NFTS,
  },
];
