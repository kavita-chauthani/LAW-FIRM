import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import insta from "../../assests/insta.png";
import facebook from "../../assests/facebook.png";
import twitter from "../../assests/twitter.png";
import pininterest from "../../assests/pininterest.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <Logo />
        <section className={styles.wrap}>
          <div className={styles.two}>Home</div>
          <div className={styles.two}>Attorney</div>
          <div className={styles.two}>Practise Areas</div>
          <div className={styles.two}>About Us</div>
        </section>
        <section>
          <img src={insta} alt="insta" width={30} height={30} />
          <img
            className={styles.facebook}
            src={facebook}
            alt="insta"
            width={30}
            height={30}
          />
          <img
            className={styles.facebook}
            src={twitter}
            alt="insta"
            width={30}
            height={30}
          />
          <img
            className={styles.facebook}
            src={pininterest}
            alt="insta"
            width={30}
            height={30}
          />
        </section>
      </div>
      <div className={styles.foot}>
        <div className={styles.one}>© 2020 Acme. All right reserved.</div>
        <div className={styles.one}>Privacy Policy</div>
        <div className={styles.one}>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
