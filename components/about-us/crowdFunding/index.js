import React from "react";
import styles from "./styles.module.scss";
import Aramex from "../../../public/images/google-store-black.svg";

const CrowdFunding = () => {
  return (
    <section className={styles.curate}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>A Crowdfunding Investment Platform made just for you</h3>
        <p>
          Automate your investments by linking a debit card to the KoboTree. You
          can invest spare change and watch your investments grow.
        </p>

        <div className={styles.logos}>
          <Aramex className={styles.logo} />
          <Aramex className={styles.logo} />
          <Aramex className={styles.logo} />
        </div>
      </div>
    </section>
  );
};

export default CrowdFunding;
