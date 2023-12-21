import type { IconName } from "@/types/icons";

export const links = [
  {
    text: "Home",
    route: "/",
    icon: "search" as IconName,
    targetSegment: null,
  },
  {
    text: "Discover",
    route: "/discover/top-collections",
    icon: "store" as IconName,
    targetSegment: "discover",
  },
  {
    text: "Get in touch",
    route: "/contact-me",
    icon: "mailLetter" as IconName,
    targetSegment: "contact-me",
  },
];
