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

      <h2>Select your Employment Status</h2>

      <form>
        <div className={styles.radioToolbar}>
          <input
            type="radio"
            id="radioEmployed"
            name="employmentStatus"
            value="employed"
          />
          <label htmlFor="radioEmployed">
            <div> Employed</div>
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
            <div> Unemployed</div>
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
            <div>Self Employed</div>
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
            <div> Retired</div>
            <span>
              <img src="images/check-circle.svg" />
            </span>
          </label>

          <input
            type="radio"
            id="radioStudent"
            name="employmentStatus"
            value="student"
          />
          <label htmlFor="radioStudent">
            <div> Student</div>
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
