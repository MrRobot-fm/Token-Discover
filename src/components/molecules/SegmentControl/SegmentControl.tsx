import { DiscoverTabsModel } from "@/types/model/discover-tabs-model";
import { Button } from "@/components/atoms/Button/Button";

export const SegmentControl = ({
  options,
  pathname,
}: {
  options: DiscoverTabsModel[];
  pathname: string;
}) => {
  return (
    <div className="flex w-fit gap-[1.5rem] rounded-[3rem] bg-background-grey py-[1rem] base:px-[1rem] md:px-[2rem]">
      {options.map((tab, index) => (
        <Button
          key={index}
          href={tab.url}
          label={tab.label}
          variant="segmentControl"
          size="fluid"
          {...(tab.url === pathname && { "data-selected": true })}
        />
      ))}
    </div>
  );
};
