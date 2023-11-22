import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import type { SectionProps } from "./Section.props";
import { styles } from "./section.styles";

export const Section = (props: SectionProps) => {
  const { title, subTitle, hasCta = false, children, ctaProps } = props;

  return (
    <section className={styles.section}>
      <div className={styles.section_headingWrapper}>
        <div>
          <h3>{title}</h3>
          <h5>{subTitle}</h5>
        </div>
        {hasCta && (
          <div className={styles.section_desktopCtaWrapper}>
            <SectionCta variant="outline" {...ctaProps} />
          </div>
        )}
      </div>
      <div className={styles.section_childrenWrapper}>{children}</div>
      {hasCta && (
        <div className={styles.section_mobileCtaWrapper}>
          <SectionCta variant="outline" {...ctaProps} />
        </div>
      )}
    </section>
  );
};
