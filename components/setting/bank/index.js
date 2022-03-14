import React from "react";
import styles from "./styles.module.scss";

const Bank = () => {
  return (
    <div className={styles.content}>
    <h3>Bank settings</h3>
    <div className={styles.cardWrapper}>
      <div className={styles.bankCard}>
        <img src='/images/AccessBank.svg' alt='' />

        <div className={styles.bankDetailDelete}>
          <div className={styles.bankDetail}>
            <h4>Obinna Ani</h4>
            <h5>Access Bank</h5>
            <p>0237835648</p>
          </div>
          <div className={styles.expiryDelete}>
            <img src='/images/trash-black.svg' alt='' />
          </div>
        </div>
      </div>

      <div className={styles.bankCard}>
        <img src='/images/GTBank.svg' alt='' />

        <div className={styles.bankDetailDelete}>
          <div className={styles.bankDetail}>
            <h4>Obinna Ani</h4>
            <h5>Access Bank</h5>
            <p>0237835648</p>
          </div>
          <div>
            <img src='/images/trash-black.svg' alt='' />
          </div>
        </div>
      </div>

      <div className={styles.submitBtn}>
        <button
          className='btn-transparent-dark btn-block'
          // onClick={stepHandler}
          type='submit'
        >
          Add New Bank Account
        </button>
      </div>
    </div>
  </div>
  );
};

export default Bank;
