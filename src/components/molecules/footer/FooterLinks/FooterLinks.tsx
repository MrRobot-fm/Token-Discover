import { Fragment } from "react";
import type { FooterLinksModel } from "@/types/model/links";
import { Button } from "@/components/atoms/Button/Button";

export const FooterLinks = ({
  footerLinks,
}: {
  footerLinks: FooterLinksModel;
}) => {
  return (
    <div className="flex flex-col gap-[2.5rem]">
      {footerLinks?.map((item, index) => (
        <Fragment key={index}>
          <p key={`${index}-${item?.title} `} className="heading5">
            {item.title}
          </p>
          <div className="flex flex-col gap-[2rem] text-gray-300">
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
