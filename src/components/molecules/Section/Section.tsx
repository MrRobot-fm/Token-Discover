import { SectionCta } from "@/components/atoms/SectionCta/SectionCta";
import type { SectionProps } from "./Section.props";
import { styles } from "./section.styles";

export const Section = (props: SectionProps) => {
  const {
    title,
    subTitle,
    hasCta = false,
    children,
    ctaProps,
    sectionStyles,
    titleProps,
  } = props;

  return (
    <section className={`${styles.section} ${sectionStyles}`}>
      <div className={styles.section_headingWrapper}>
        <div>
          <h3 className={`${titleProps?.titleStyles} ${styles.section_title}`}>
            {title}
          </h3>
          <h4
            className={`${titleProps?.subtitleStyles} ${styles.section_subTitle}`}
          >
            {subTitle}
          </h4>
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
