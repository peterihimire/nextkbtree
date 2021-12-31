import React from "react";
import styles from "./styles.module.scss";

const CrowdFunding = () => {
  return (
    <section className={styles.crowdFunding}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/images/galaxy-note20-full.svg" alt="" loading="lazy" />
          </div>
          <div className={styles.textContent}>
            <p>INSTANT INVESTMENT</p>
            <h3>A Crowdfunding Investment Platform that works as hard </h3>
            <p>
              Automate your investments by linking a debit card to the KoboTree.
              You can invest spare change and watch your investments grow.
            </p>
          </div>
          <div className={styles.right}>
            <img src="/images/kobotree-artifact.svg" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdFunding;
