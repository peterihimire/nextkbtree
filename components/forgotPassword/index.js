import React from "react";
import styles from "./styles.module.scss";
import Form from "./form";

const ResetPasswordOne = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      <div className={styles.inner}>
          <img src="/images/logo-light.svg" alt="" />
          <h2>Safe Investments</h2>
          <p>
            Platform that allows you invest securely, safely with guarantee to
            their investment.
          </p>
          <img src="/images/indicator.svg" alt="" />
        </div>
      </div>
      
      <div className={styles.right}>
        <Form />
      </div>
    </div>
  );
};

export default ResetPasswordOne;
