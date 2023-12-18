import { FooterSocialLinks } from "@/types/model/footer-social-links";
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

export const footerSocialLinksMap: FooterSocialLinks[] = [
  {
    icon: "github",
    size: "xl" as ButtonVariants["size"],
    variant: "link",
    url: "https://github.com/MrRobot-fm",
  },
  {
    icon: "linkedin",
    size: "xl" as ButtonVariants["size"],
    variant: "link",
    url: "https://www.linkedin.com/in/federicomigliore/",
  },
  {
    icon: "instagram",
    size: "xl" as ButtonVariants["size"],
    variant: "link",
    url: "https://www.instagram.com/federix_aegon/",
  },
  {
    icon: "whatsapp",
    size: "xl" as ButtonVariants["size"],
    variant: "link",
    url: "https://wa.me/+393792302349",
  },
  {
    icon: "mailLetter",
    size: "xl" as ButtonVariants["size"],
    variant: "link",
    url: "mailto:federicomiglioredev@gmail.com",
  },
];
