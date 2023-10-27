import React from "react";
import styles from "./Hero.module.css";
import sample from "../../assests/sample.png";
import email from "../../assests/email.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.header}>You don’t have to Fight them Alone.</div>
        <div className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </div>
        <form className={styles.formhead}>
          <div className={styles.form}>
            <div className={styles.mail}>
              <img src={email} alt="msg" width={22} height={22} />
            </div>

            <div className={styles.input}>
              <input placeholder="Enter your eamil address"></input>
            </div>

            <div className={styles.btn}>
              <button className={styles.form2}>Let’s Talk</button>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.right}>
        <img src={sample} alt="img" width={443.511} height={509.069} />
      </div>
    </div>
  );
};

export default Hero;
