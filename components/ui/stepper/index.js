import React from "react";
import styles from "./styles.module.scss";
import { UserOutlined } from "@ant-design/icons";

const stepper = ({ children, step }) => {
  return (
    <div className={styles.stepper}>
      {/* <ul className={styles.stepperHead}>
        <li
          className={`${styles.stepperHeadItem} ${
            step >= 1 ? styles.active : ""
          }`}
        >
          <div>
            {step > 1 ? <i className="far fa-check"></i> : <UserOutlined />}
          </div>
          <span className={styles.stepperTitle}>Account Details</span>
        </li>

        <li
          className={`${styles.stepperHeadItem} ${
            step >= 2 ? styles.active : ""
          }`}
        >
          <div>
            {step > 2 ? (
              <i className="far fa-check"></i>
            ) : (
              <i className="far fa-credit-card"></i>
            )}
          </div>
          <span className={styles.stepperTitle}>Payment Details</span>
        </li>

        <li
          className={`${styles.stepperHeadItem} ${
            step === 3 ? styles.active : ""
          }`}
        >
          <div>
            <i className="far fa-graduation-cap"></i>
          </div>
          <span className={styles.stepperTitle}>Review & Confirm</span>
        </li>
      </ul> */}

      {children}
    </div>
  );
};

export default stepper;
