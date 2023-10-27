import React from "react";
import styles from "./Client.module.css";
import ellipse from "../../assests/Ellipse.png";
import up from "../../assests/up.png";
import yellow from "../../assests/yellow.png";
import down from "../../assests/down.png";
import ClientCard from "../ClientCard/ClientCard";

const Client = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.head}>What says our happy Clients</div>
        <div className={styles.icon}>
          <div className={styles.parent1}>
            <img
              className={styles.image1}
              src={ellipse}
              alt="circle"
              width={101}
              height={101}
            />
            <img
              className={styles.image2}
              src={up}
              alt="up"
              width={38.479}
              height={38.479}
            />
          </div>
          <div className={styles.parent2}>
            <img
              className={styles.image3}
              src={yellow}
              alt="yellow"
              width={101}
              height={101}
            />
            <img
              className={styles.image4}
              src={down}
              alt="down"
              width={38.479}
              height={38.479}
            />
          </div>
        </div>
      </div>
      <div className={styles.Clienthead}>
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </div>
  );
};

export default Client;
