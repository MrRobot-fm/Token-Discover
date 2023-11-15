import Link from "next/link";
import type { OnBoardingFooterProps } from "./OnBoardingFooter.props";
import { styles } from "./onboarding-footer.styles";

export const OnBoardingFooter = (props: OnBoardingFooterProps) => {
  const { cta, href, label } = props;

  return (
    <div className={styles.onboarding_footer}>
      <span className={styles.onboarding_footer__label}>{label}</span>
      <Link {...{ href }} className={styles.onboarding_footer__cta}>
        {cta}
      </Link>
    </div>
  );
};
