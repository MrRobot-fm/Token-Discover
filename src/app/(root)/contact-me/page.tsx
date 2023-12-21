"use client";

import { socialLinksMap } from "@/utils/constants/links-map";
import { GetInTouch } from "@/components/organism/get-in-touch/GetInTouch/GetInTouch";
import { GetInTouchForm } from "@/components/organism/get-in-touch/GetInTouchForm/GetInTouchForm";
import { useGetInTouchForm } from "@/components/organism/get-in-touch/GetInTouchForm/use-get-in-touch-form";
import { styles } from "./contact-me.styles";

export default function ContactMePage() {
  const { register, handleSubmit, errors, form, sendEmail } =
    useGetInTouchForm();

  return (
    <section className={styles.contactMe_section}>
      <div className={styles.contactMe_section_container}>
        <div className={styles.contactMe_section_container_flex1}>
          <GetInTouch
            title="Get in touch"
            subTitle="If you are interested in contacting me for job offers or simply because you want to browse my socials or give me feedback, you can use the contact form which will send a message to my email address, or alternatively click on the icons below to view my projects on github or be directed to my social pages."
            socialLinks={socialLinksMap}
          />
        </div>
        <div className={styles.contactMe_section_container_flex1}>
          <GetInTouchForm
            {...{
              register,
              handleSubmit,
              errors,
              form,
              sendEmail,
            }}
          />
        </div>
      </div>
    </section>
  );
}
