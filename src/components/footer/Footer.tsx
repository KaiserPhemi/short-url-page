// react libraries
import React from "react";

// styles
import styles from "./footer.module.css";

// assets
import logo from "../../assets/logo2.svg";

// footer component
const Footer = () => {
  return (
    <div className={styles.main_footer}>
      <section className={styles.logo}>
        <img src={logo} alt="logo" />
      </section>
      <section className={styles.link_wrapper}>
        <section className={styles.link_section}>
          <p>Features</p>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </section>
        <section className={styles.link_section}>
          <p>Resources</p>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </section>
        <section className={styles.link_section}>
          <p>Company</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </section>
      </section>
      <section>Logos</section>
      {/* <div className={styles.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/KaiserPhemi"
          target="_blank"
          rel="noreferrer"
        >
          Oluwafemi Akinwa
        </a>
        .
      </div> */}
    </div>
  );
};

export default Footer;
