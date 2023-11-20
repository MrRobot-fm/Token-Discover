import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import { SectionProps } from "./Section.props";

export const Section = (props: SectionProps) => {
  const { title, subTitle, hasCta = false, children, ctaProps } = props;

  return (
    <section className="flex w-full max-w-[144rem] flex-col justify-between  border-t border-t-background-grey py-[8rem] base:gap-[4rem] lg:items-center lg:gap-[6rem]">
      <div className="flex w-full items-end justify-between">
        <div>
          <h3>{title}</h3>
          <h5>{subTitle}</h5>
        </div>
        {hasCta && (
          <div className="base:hidden lg:flex">
            <SectionCta variant="outline" {...ctaProps} />
          </div>
        )}
      </div>
      <div className="flex w-full">{children}</div>
      {hasCta && (
        <div className="flex w-full flex-col lg:hidden">
          <SectionCta variant="outline" {...ctaProps} />
        </div>
      )}
    </section>
  );
};
