import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.head}>Suscribe Our NewsLetter</div>
        <div className={styles.input}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Enter you email"></input>
          <button className={styles.btn}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
