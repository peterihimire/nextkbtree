import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Figures = () => {
  return (
    <section className={styles.figures}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.accomplishment}>
            <div className={styles.singleAccomplishment}>
              <div>
                <h4>150k+</h4>
                <p>Active Investors</p>
              </div>
            </div>

            <div className={styles.singleAccomplishment}>
              <div>
                <h4>$5.1bn+</h4>
                <p>Property Funded </p>
              </div>
            </div>

            <div className={styles.singleAccomplishment}>
              <div>
                <h4>$100M+</h4>
                <p>Net Dividends Earned by Investors</p>
              </div>
            </div>
          </div>
          <span>Figures as of 23/October/2022.</span>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Figures;
