import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div>
      <div className={styles.head}>Suscribe Our NewsLetter</div>
      <div>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Name"></input>
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Subscribe;
