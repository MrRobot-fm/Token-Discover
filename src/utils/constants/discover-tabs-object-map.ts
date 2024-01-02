import type { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { PAGES_PATH } from "./pages-path";

export const discoverTabsMaps: DiscoverTabsModel[] = [
  {
    text: "Find Collections",
    route: PAGES_PATH.DISCOVER_COLLECTIONS,
  },
  {
    text: "Top collections",
    route: PAGES_PATH.DISCOVER_TOP_COLLECTIONS,
  },
  {
    text: "Top sold NFTs",
    route: PAGES_PATH.DISCOVER_TOP_SOLD_NFTS,
  },
  {
    text: "Trending NFTs",
    route: PAGES_PATH.DISCOVER_TRENDING_NFTS,
  },
];
