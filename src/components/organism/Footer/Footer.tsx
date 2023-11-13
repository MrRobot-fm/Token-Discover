import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { FooterLegalInfo } from "@/components/molecules/footer/FooterLegalInfo/FooterLegalInfo";
import { FooterLinks } from "@/components/molecules/footer/FooterLinks/FooterLinks";
import { FooterSocialCta } from "@/components/molecules/footer/FooterSocialCta/FooterSocialCta";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_header}>
          <NavLogo />
          <div className={styles.footer__content_header__description}>
            <p>Token Discover application created by Federico Migliore.</p>
            <FooterSocialCta />
          </div>
        </div>
        <FooterLinks />
      </div>
      <FooterLegalInfo />
    </footer>
  );
};
