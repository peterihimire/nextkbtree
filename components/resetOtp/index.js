import React from "react";
import styles from "./styles.module.scss";
import Form from "./form";

const ResetPasswordOtp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}></div>

      <div className={styles.right}>
        <Form />
      </div>
    </div>
  );
};

export default ResetPasswordOtp;
