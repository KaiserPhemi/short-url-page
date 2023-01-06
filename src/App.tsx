// react libraries
import React from "react";

// components
import { Navbar, Header, Footer, Shortener } from "./components";

// styles
import styles from "./App.module.css";

// main component
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <div className={styles.body}>
        <Shortener />
      </div>
      <Footer />
    </div>
  );
};

export default App;
