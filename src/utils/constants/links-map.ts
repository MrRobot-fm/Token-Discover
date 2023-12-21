import type { FooterLinksModel, SocialLinksModel } from "@/types/model/links";

export const footerLinksMap: FooterLinksModel = [
  {
    title: "Explore",
    links: [
      {
        label: "Discover",
        type: "link",
        route: "/discover/top-collections",
      },
      {
        label: "Get in touch",
        type: "link",
        route: "/contact-me",
      },
    ],
  },
];

export const socialLinksMap: SocialLinksModel[] = [
  {
    icon: "github",
    size: "xl",
    variant: "link",
    url: "https://github.com/MrRobot-fm",
  },
  {
    icon: "linkedin",
    size: "xl",
    variant: "link",
    url: "https://www.linkedin.com/in/federicomigliore/",
  },
  {
    icon: "instagram",
    size: "xl",
    variant: "link",
    url: "https://www.instagram.com/federix_aegon/",
  },
  {
    icon: "whatsapp",
    size: "xl",
    variant: "link",
    url: "https://wa.me/+393792302349",
  },
  {
    icon: "mailLetter",
    size: "xl",
    variant: "link",
    url: "mailto:federicomiglioredev@gmail.com",
  },
];
