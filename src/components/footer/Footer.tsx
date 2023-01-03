// react libraries
import React from "react";

// styles
import styles from "./footer.module.css";

// footer component
const Footer = () => {
  return (
    <div className={styles.main_footer}>
      <section>Shortly</section>
      <section>Features Link Shortening Branded Links Analytics</section>
      <section>Resources Blog Developers Support</section>
      <section>Company About Our Team Careers Contact</section>
      <section>Logos</section>
      <section>
        <div className={styles.attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/KaiserPhemi">
            Oluwafemi Akinwa
          </a>
          .
        </div>
      </section>
    </div>
  );
};

export default Footer;
