import React from "react";
import styles from "./styles.module.scss";
import Aramex from "../../../public/images/aramex.svg";

const SafeInvesting = () => {
  return (
    <section className={styles.safeInvesting}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>You're In Safe Hands.</h2>
        <p>We work with renowned and trusted brands.</p>
        <div className={styles.logos}>
          <Aramex />
          <Aramex />
          <Aramex />
          <Aramex />
          <Aramex />
        </div>
        <h2>Investing with KoboTree</h2>
        <p>
          Harness the power of technology and be part of a more rewarding
          financial era
        </p>
        <div className={styles.grid}>
          <div className={styles.single}>
            <img src="/images/umbrella-money.svg" alt="" />
            <h4>Select your Investment</h4>
            <p>
              Platform that allows you invest securely, safely with guarantee to
              their investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeInvesting;
