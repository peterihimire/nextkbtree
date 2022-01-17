import React from "react";
import styles from "./styles.module.scss";
import Store from "../../../public/images/google-store-black.svg";

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
          <Store className={styles.logo} />
          <Store className={styles.logo} />
          <Store className={styles.logo} />
        </div>
      </div>
    </section>
  );
};

export default CrowdFunding;
