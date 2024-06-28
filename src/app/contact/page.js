import styles from "./contact.module.scss";

import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.avatar}></div>

        <div className={styles["contact-details"]}>
          <div className={styles.email}>
            <p>Email:</p>
            <a href="mailto:jerzy.legierski.dgt@gmail.com">
              jerzy.legierski.dgt@gmail.com
            </a>
          </div>

          <div className={styles.phone}>
            <p>Phone:</p>
            <a href="tel:+48881547997">
                +48 881 547 997
            </a>
          </div>

          <div className={styles.socials}>
            <p>Socials:</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  );
}
