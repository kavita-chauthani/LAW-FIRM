import React from "react";
import styles from "./SectionTwo.module.css";
import Cards from "../Cards/Cards";

const SectionTwo = () => {
  return (
    <div>
      <div className={styles.header}>Why Choose us?</div>
      <div className={styles.head}>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default SectionTwo;
