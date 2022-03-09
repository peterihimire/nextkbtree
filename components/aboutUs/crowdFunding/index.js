import React from "react";
import styles from "./styles.module.scss";
import Store from "../../../public/images/google-store-black.svg";
import ScrollAnimation from "react-animate-on-scroll";

const CrowdFunding = () => {
  return (
    <section className={styles.curate}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={`${styles.wrapper} wrapper`}>
          <h3>A Crowdfunding Investment Platform made just for you</h3>
          <p>
            Automate your investments by linking a debit card to the KoboTree.
            You can invest spare change and watch your investments grow.
          </p>

          <div className={styles.logos}>
            <Store className={styles.logo} />
            <Store className={styles.logo} />
            <Store className={styles.logo} />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CrowdFunding;
