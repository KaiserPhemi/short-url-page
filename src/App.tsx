// react libraries
import React from "react";

// components
import {
  Navbar,
  Header,
  Footer,
  Shortener,
  Landing,
  Campaign,
} from "./components";

// styles
import styles from "./App.module.css";

// main component
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <div className={styles.main_body}>
        <Shortener />
        <Landing />
      </div>
      <Campaign />
      <Footer />
    </div>
  );
};

export default App;
