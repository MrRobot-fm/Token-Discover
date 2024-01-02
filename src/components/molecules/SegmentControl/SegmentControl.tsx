import { Button } from "@/components/atoms/Button/Button";
import type { SegmentControlProps } from "./SegmentControl.props";

export const SegmentControl = (props: SegmentControlProps) => {
  const { options, isDiscoverSection, pathname, size } = props;

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
          size={size}
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
