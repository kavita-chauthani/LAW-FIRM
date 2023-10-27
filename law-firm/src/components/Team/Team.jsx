import React from "react";
import styles from "./Team.module.css";
import teamone from "../../assests/teamone.png";

const Team = () => {
  return (
    <div>
      <div className={styles.head}> Our Team</div>
      <div className={styles.parent1}>
        <div className={styles.child1}>
          <div>
            <img src={teamone} alt="teamone" width={68} height={68} />
          </div>
          <div>
            <div className={styles.name}>Danial Def</div>
            <div className={styles.case}>350 Cases</div>
          </div>
        </div>
        <div className={styles.child2}>
          <div>
            <img src={teamone} alt="teamone" width={68} height={68} />
          </div>
          <div>
            <div div className={styles.name}>
              Sanfole
            </div>
            <div className={styles.case}>850 Cases</div>
          </div>
        </div>
        <div className={styles.child1}>
          <div>
            <img src={teamone} alt="teamone" width={68} height={68} />
          </div>
          <div>
            <div className={styles.name}>Cesforila</div>
            <div className={styles.case}>470 Cases</div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.parent2}>
          <div className={styles.child1}>
            <div>
              <img src={teamone} alt="teamone" width={68} height={68} />
            </div>
            <div>
              <div className={styles.name}>Colleen</div>
              <div className={styles.case}>180 Cases</div>
            </div>
          </div>
          <div className={styles.child1}>
            <div>
              <img src={teamone} alt="teamone" width={68} height={68} />
            </div>
            <div>
              <div div className={styles.name}>
                Haldone
              </div>
              <div className={styles.case}>212 Cases</div>
            </div>
          </div>
          <div className={styles.child1}>
            <div>
              <img src={teamone} alt="teamone" width={68} height={68} />
            </div>
            <div>
              <div className={styles.name}>Nik Jeo</div>
              <div className={styles.case}>350 Cases</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
