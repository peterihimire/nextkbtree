import React from "react";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.content}>
      <h3>Card settings</h3>
      <div className={styles.cardWrapper}>
        <div className={styles.atmCard1}>
          <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
          <span> 9877 </span>
          <h4>Obinna Ani</h4>
          <div className={styles.expiryDelete}>
            <div className={styles.date}>
              <small>MONTH/YEAR</small>
              <p>02 / 24</p>
            </div>
            <img src='/images/trash.svg' alt='' />
          </div>
        </div>

        <div className={styles.atmCard2}>
          <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
          <span> 9877 </span>
          <h4>Obinna Ani</h4>
          <div className={styles.expiryDelete}>
            <div className={styles.date}>
              <small>MONTH/YEAR</small>
              <p>02 / 24</p>
            </div>
            <img src='/images/trash.svg' alt='' />
          </div>
        </div>

        <div className={styles.submitBtn}>
          <button
            className='btn-transparent-dark btn-block'
            // onClick={stepHandler}
            type='submit'
          >
            Add New Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
