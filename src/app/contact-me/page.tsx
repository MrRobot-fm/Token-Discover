import type { Metadata } from "next";
import { socialLinksMap } from "@/utils/constants/links-map";
import GetInTouchFormSection from "@/components/organism/get-in-touch/GetInTouchFormSection/GetInTouchFormSection";
import { GetInTouchHeading } from "@/components/organism/get-in-touch/GetInTouchHeading/GetInTouchHeading";
import { styles } from "./contact-me.styles";

export const metadata: Metadata = {
  title: "Get In Touch | Token Discover",
  description: "Get in touch with me",
};

export default function ContactMePage() {
  return (
    <section className={styles.contactMe_section}>
      <div className={styles.contactMe_section_container}>
        <div className={styles.contactMe_section_container_flex1}>
          <GetInTouchHeading
            title="Get in touch"
            subTitle="If you are interested in contacting me for job offers or simply because you want to browse my socials or give me feedback, you can use the contact form which will send a message to my email address, or alternatively click on the icons below to view my projects on github or be directed to my social pages."
            socialLinks={socialLinksMap}
          />
        </div>
        <div className={styles.contactMe_section_container_flex1}>
          <GetInTouchFormSection />
        </div>
      </div>
    </section>
  );
}
