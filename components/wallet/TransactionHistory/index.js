import React, { useState } from "react";

import styles from "./styles.module.scss";

const TransactionHistory = () => {
  return (
    <section className={styles.transactionHistory}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Table history here</h3>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
