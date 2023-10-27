import React from "react";
import styles from "./Faq.module.css";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  return (
    <div>
      <div className={styles.head}>
        <div className={styles.heading}>FAQ</div>
        <div className={styles.parent}>
          <div>
            <p className={styles.para}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className={styles.second}>
            <h3 className={styles.heading2}>
              Do I need a personal injury report?
            </h3>
            <p className={styles.para2}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
