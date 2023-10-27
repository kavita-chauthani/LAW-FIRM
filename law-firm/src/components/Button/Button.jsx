import React from "react";
import styles from "./Button.module.css";

const Button = ({children}) => {
  return <div className={styles.button1}>{children}</div>;
};

export default Button;
