import React from "react";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <div className={styles.head}>
      <div className={styles.left}>Lets Introduce Ourself</div>

      <div className={styles.right}>
        <h1 className={styles.right1}>Criminal Lawyer</h1>
        <p className={styles.right2}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
