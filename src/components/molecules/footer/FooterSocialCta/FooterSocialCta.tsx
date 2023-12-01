import { footerSocialLinksMap } from "@/utils/constants/footer-links-map";
import { Button } from "@/components/atoms/Button/Button";

export const FooterSocialCta = () => {
  return (
    <div className="flex flex-col gap-[1rem]">
      <p>Join me on:</p>
      <div className="flex gap-[1rem] text-label-grey">
        {footerSocialLinksMap?.map((item, index) => (
          <Button
            key={`${index}-${item?.icon}`}
            icon={item?.icon}
            size={item?.size}
            variant={item?.variant}
            href={item?.url || ""}
            buttonWrapperStyles="gap-0"
          />
        ))}
      </div>
    </div>
  );
};
