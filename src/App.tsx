// react libraries
import React from "react";

// components
import {  Navbar, Header, Footer } from "./components";

// styles
import styles from "./App.module.css";

// main component
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
