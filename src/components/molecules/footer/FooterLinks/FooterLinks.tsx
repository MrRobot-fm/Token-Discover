import { Fragment } from "react";
import type { FooterLinksModel } from "@/types/model/links";
import { Button } from "@/components/atoms/Button/Button";

export const FooterLinks = ({
  footerLinks,
}: {
  footerLinks: FooterLinksModel;
}) => {
  return (
    <div className="flex flex-col gap-[1rem]">
      {footerLinks?.map((item, index) => (
        <Fragment key={index}>
          <p key={`${index}-${item?.title} `} className="heading5">
            {item.title}
          </p>
          <div className="grid gap-[2rem] gap-x-[4rem] text-gray-300 base:grid-cols-1 md:grid-cols-2">
            {item.links.map((link, index) => (
              <Button
                key={`${index}-${link.label}`}
                href={link.route || ""}
                label={link.label}
                variant="link"
              />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
