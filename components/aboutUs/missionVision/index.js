import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const MissionVision = () => {
  return (
    <section className={styles.mission}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={0.8}
          delay={400}
          animateOnce={true}
        >
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2>Our Mission</h2>
              <p>
                We believe access to quality Investment services is a human
                right. Our mission is to empower all people with the financial
                access they need to pursue a life of dignity and prosperity.
              </p>
            </div>
            <div className={styles.content}>
              <h2>Our Vision</h2>
              <p>
                We believe access to quality Investment services is a human
                right. Our mission is to empower all people with the financial
                access they need to pursue a life of dignity and prosperity.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MissionVision;
