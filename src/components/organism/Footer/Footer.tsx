import dayjs from "dayjs";
import { footerLinksMap, socialLinksMap } from "@/utils/constants/links-map";
import { NavLogo } from "@/components/atoms/navbar/NavbarLogo/NavbarLogo";
import { FooterLegalInfo } from "@/components/molecules/footer/FooterLegalInfo/FooterLegalInfo";
import { FooterLinks } from "@/components/molecules/footer/FooterLinks/FooterLinks";
import { SocialCta } from "@/components/molecules/footer/SocialCta/SocialCta";
import { styles } from "./footer.styles";

export const Footer = () => {
  const currentYear = dayjs(new Date()).format("YYYY");

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_header}>
          <NavLogo text="Token Discover" />
          <div className={styles.footer__content_header__description}>
            <p>Token Discover application created by Federico Migliore.</p>
            <SocialCta label="Join me on:" socialLinks={socialLinksMap} />
          </div>
        </div>
        <FooterLinks footerLinks={footerLinksMap} />
      </div>
      <FooterLegalInfo
        year={currentYear}
        label="Federico Migliore. All right reserved."
      />
    </footer>
  );
};
