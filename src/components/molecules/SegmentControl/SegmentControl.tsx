import { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { Button } from "@/components/atoms/Button/Button";

export const SegmentControl = ({
  options,
  pathname,
  isDiscoverSection = false,
}: {
  options: DiscoverTabsModel[];
  pathname: string | null;
  isDiscoverSection?: boolean;
}) => {
  return (
    <div
      className={`${
        isDiscoverSection && "bg-background-grey"
      } flex w-fit gap-[1.5rem] rounded-[3rem] py-[1rem] base:px-[1rem] md:px-[2rem]`}
    >
      {options.map((tab, index) => (
        <Button
          key={index}
          href={tab.route}
          label={tab.text}
          variant="segmentControl"
          size="fluid"
          buttonWrapperStyles={
            isDiscoverSection ? "data-[selected=true]:bg-purpleRed" : ""
          }
          {...((tab.route === pathname || tab.targetSegment === pathname) && {
            "data-selected": true,
          })}
        />
      ))}
    </div>
  );
};
