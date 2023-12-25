import { useMemo } from "react";
import type { SocialLinksModel } from "@/types/model/links";
import { SocialCta } from "@/components/molecules/footer/SocialCta/SocialCta";
import type { GetInTouchHeadingProps } from "./GetInTouchHeading.props";

export const GetInTouchHeading = ({
  title,
  subTitle,
  socialLinks,
}: GetInTouchHeadingProps) => {
  const parsedSocialLinks: SocialLinksModel[] = useMemo(() => {
    return socialLinks.map((item) => {
      return {
        icon: item.icon,
        size: "xxl",
        variant: item.variant,
        url: item.url,
      };
    });
  }, [socialLinks]);

  return (
    <div className="space-y-[0.5rem]">
      <h3 className="heading2">{title}</h3>
      <h4 className="text-[2rem] font-normal lowercase first-letter:uppercase">
        {subTitle}
      </h4>
      <SocialCta
        socialLinks={parsedSocialLinks}
        socialLinksWrapperStyles="base:justify-between base:gap-0 md:justify-start md:gap-[3.5rem]"
      />
    </div>
  );
};
