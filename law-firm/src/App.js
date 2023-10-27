import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Client from "./components/Client/Client";
import Team from "./components/Team/Team";
import Faq from "./components/Faq/Faq";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Client />
      <Team />
      <Faq />
      <Subscribe />
    </div>
  );
}

export default App;
