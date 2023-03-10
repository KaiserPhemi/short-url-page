// react libraries
import React from "react";

// styles
import styles from "./footer.module.css";

// assets
import logo from "../../assets/logo2.svg";

// custom icons
import { FaceBook, Twitter, Pinterest, Instagram } from "../../icons";

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
      <section className={styles.socials}>
        <section className={styles.social_icons}>
          <FaceBook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </section>
        <section className={styles.attribution}>
          <p>
            {"Challenge by "}
            <a
              href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor.
            </a>
          </p>
          <p>
            {"Coded by "}
            <a
              href="https://www.frontendmentor.io/profile/KaiserPhemi"
              target="_blank"
              rel="noreferrer"
            >
              Oluwafemi Akinwa.
            </a>
          </p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
