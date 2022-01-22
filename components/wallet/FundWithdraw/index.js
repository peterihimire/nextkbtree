import React, { useState } from "react";

import styles from "./styles.module.scss";

const MyWallet = () => {
  return (
    <section className={styles.fundWithdraw}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p>Available Balance</p>
          <h3>$0.00</h3>
          <div className={styles.fundWithdrawBtn}>
            <button className={`${styles.btn} btn-transparent btn-medium`}>
              Withdraw
            </button>
            <button className={`${styles.btn} btn-transparent btn-medium`}>
              Fund Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWallet;
