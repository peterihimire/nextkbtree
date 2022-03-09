import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Accomplishment = () => {
  return (
    <div className={` wrapper `}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={styles.accomplishment}>
          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/investors.svg' alt='' />
            </div>
            <div>
              <h4>150k+</h4>
              <p>Active Investors</p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/funded.svg' alt='' />
            </div>
            <div>
              <h4>$5.1bn+</h4>
              <p>Property Funded </p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/earned.svg' alt='' />
            </div>
            <div>
              <h4>$100M+</h4>
              <p>Earned by Investors</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Accomplishment;
