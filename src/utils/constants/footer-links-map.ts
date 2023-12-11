import type { IconName } from "@/types/icons";
import type { ButtonVariants } from "@/components/atoms/Button/button.variants";

export const footerLinksMap = [
  {
    id: 1,
    title: "Explore",
    links: [
      {
        id: 2,
        label: "Discover",
        type: "link",
        route: "/discover/top-collections",
      },
    ],
  },
];

export const footerSocialLinksMap = [
  {
    icon: "github" as IconName,
    size: "xl" as ButtonVariants["size"],
    variant: "link" as ButtonVariants["variant"],
    url: "https://github.com/MrRobot-fm",
  },
  {
    icon: "linkedin" as IconName,
    size: "xl" as ButtonVariants["size"],
    variant: "link" as ButtonVariants["variant"],
    url: "https://www.linkedin.com/in/federicomigliore/",
  },
  {
    icon: "instagram" as IconName,
    size: "xl" as ButtonVariants["size"],
    variant: "link" as ButtonVariants["variant"],
    url: "https://www.instagram.com/federix_aegon/",
  },
  {
    icon: "whatsapp" as IconName,
    size: "xl" as ButtonVariants["size"],
    variant: "link" as ButtonVariants["variant"],
    url: "https://wa.me/+393792302349",
  },
  {
    icon: "mailLetter" as IconName,
    size: "xl" as ButtonVariants["size"],
    variant: "link" as ButtonVariants["variant"],
    url: "mailto:federicomiglioredev@gmail.com",
  },
];
