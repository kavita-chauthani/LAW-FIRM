import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <section className={styles.wrap}>
        <div className={styles.two}>Home</div>
        <div className={styles.two}>Attorney</div>
        <div className={styles.two}>Practise Areas</div>
        <div className={styles.two}>About Us</div>
      </section>
      <Button  children="Contact Now"/>
    </nav>
  );
};

export default Navbar;
