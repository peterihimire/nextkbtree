import React, { useState } from "react";
import styles from "./styles.module.scss";
// import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
  return (
    <div className={styles.radioForm}>
      <div className={styles.backSkipBtn}>
        <button onClick={backHandler} className={styles.backStep}>
          <img src="/images/arrow-back.svg" alt="" />
        </button>

        <button onClick={stepHandler} className={styles.backStep}>
          Skip
        </button>
      </div>

      <h2>Select your Experience Level </h2>

      <form>
        <div className={styles.radioToolbar}>
          <input
            type="radio"
            id="radioEmployed"
            name="employmentStatus"
            value="employed"
          />
          <label htmlFor="radioEmployed">
            <div className={styles.radioText}>
              <h5>Novice</h5>
              <p>I know nothing about investments, Just here to try out</p>
            </div>
            <span>
              <img src="images/check-circle.svg" />
            </span>
          </label>

          <input
            type="radio"
            id="radioUnemployed"
            name="employmentStatus"
            value="unemployed"
          />
          <label htmlFor="radioUnemployed">
            <div className={styles.radioText}>
              <h5>Intermediate</h5>
              <p>
                I’m Just getting good at the training, here to become better
              </p>
            </div>
            <span>
              <img src="images/check-circle.svg" />
            </span>
          </label>

          <input
            type="radio"
            id="radioSelfemployed"
            name="employmentStatus"
            value="selfemployed"
          />
          <label htmlFor="radioSelfemployed">
            <div className={styles.radioText}>
              <h5>Advanced</h5>
              <p>I Know what I’m doing, I am here to Invest</p>
            </div>
            <span>
              <img src="images/check-circle.svg" />
            </span>
          </label>

          <input
            type="radio"
            id="radioRetired"
            name="employmentStatus"
            value="retired"
          />
          <label htmlFor="radioRetired">
            <div className={styles.radioText}>
              <h5>Expert</h5>
              <p>
                I’m really good at investment and I’m here to do what I do best
              </p>
            </div>
            <span>
              <img src="images/check-circle.svg" />
            </span>
          </label>
        </div>

        <div className={styles.submitBtn}>
          <button
            className="btn-primary btn-block"
            onClick={stepHandler}
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
