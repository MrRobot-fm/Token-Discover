import { Fragment } from "react";
import { footerLinksMap } from "@/utils/constants/footer-links-map";
import { Button } from "@/components/atoms/Button/Button";

export const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-[2.5rem]">
      {footerLinksMap?.map((item) => (
        <Fragment key={item.id}>
          <p key={`${item?.id}-${item?.title} `} className="heading5">
            {item.title}
          </p>
          <div className="flex flex-col gap-[2rem] text-gray-300">
            {item.links.map((link, index) => (
              <Button
                key={`${index}-${link?.label}`}
                url={link?.route || ""}
                label={link?.label}
                variant="link"
              />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
