import { HTMLProps } from "react";
import type { SocialLinksModel } from "@/types/model/links";
import { Button } from "@/components/atoms/Button/Button";

export const SocialCta = ({
  label,
  socialLinks,
  socialLinksWrapperStyles,
}: {
  label?: string;
  socialLinks: SocialLinksModel[];
  socialLinksWrapperStyles?: HTMLProps<HTMLElement>["className"];
}) => {
  return (
    <div className="flex w-full flex-col gap-[1rem]">
      {!!label && <p>{label}</p>}
      <div
        className={`${socialLinksWrapperStyles} flex gap-[1rem] text-label-grey`}
      >
        {socialLinks?.map((item, index) => (
          <Button
            key={`${index}-${item?.icon}`}
            icon={item?.icon}
            iconSize={item?.size}
            variant={item?.variant}
            href={item?.url || ""}
            buttonWrapperStyles="gap-0"
          />
        ))}
      </div>
    </div>
  );
};
