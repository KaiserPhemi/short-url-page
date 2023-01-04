// react libraries
import React from "react";

// styles
import styles from "./navbar.module.css";

// assets
import logo from '../../assets/logo.svg';

// nvaigation bar
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.navbar_links_wrapper}>
        <section className={styles.logo}>
          <img src={logo} alt="logo" />
        </section>
        <section className={styles.navbar_links}>
          <section className={styles.navbar_links_btn}>Features</section>
          <section className={styles.navbar_links_btn}>Pricing</section>
          <section className={styles.navbar_links_btn}>Resources</section>
        </section>
      </section>
      <section className={styles.btn_wrapper}>
        <section className={styles.cta_btn}>Login</section>
        <section className={`${styles.cta_btn} ${styles.cta_btn_signup}`}>
          Sign Up
        </section>
      </section>
    </div>
  );
};

export default Navbar;
