// react libraries
import React from "react";

// styles
import styles from "./navbar.module.css";

// nvaigation bar
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.navbar_links_wrapper}>
        <section className={styles.logo}>Shortly</section>
        <section className={styles.navbar_links}>
          <section className={styles.navbar_links_btn}>Features</section>
          <section className={styles.navbar_links_btn}>Pricing</section>
          <section className={styles.navbar_links_btn}>Resources</section>
        </section>
      </section>
      <section>
        <section>Login</section>
        <section>Sign Up</section>
      </section>
    </div>
  );
};

export default Navbar;
