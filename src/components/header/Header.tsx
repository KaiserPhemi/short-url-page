// react libraries
import React from "react";

// styles
import styles from "./header.module.css";

// assets
import desk from "../../assets/illustration-working.svg";

// Header component
const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.main_text}>
        <p className={styles.title}>More than just shorter links</p>
        <p className={styles.description}>
          {`Build your brand's recognition and get detailed insights on how your
          links are performing.`}
        </p>
        <section className={styles.cta_btn}>Get Started</section>
      </section>
      <section className={styles.illustration}>
        <img src={desk} alt="illustration" />
      </section>
    </div>
  );
};

export default Header;
