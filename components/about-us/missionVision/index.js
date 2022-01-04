import React from "react";
import styles from "./styles.module.scss";

const MissionVision = () => {
  return (
    <section className={styles.mission}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              We believe access to quality Investment services is a human right.
              Our mission is to empower all people with the financial access
              they need to pursue a life of dignity and prosperity.
            </p>
          </div>
          <div className={styles.content}>
            <h2>Our Vision</h2>
            <p>
              We believe access to quality Investment services is a human right.
              Our mission is to empower all people with the financial access
              they need to pursue a life of dignity and prosperity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
