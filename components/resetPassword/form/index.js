import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";

const Form = () => {
  return (
    <div className={styles.loginForm}>
      <h2>Reset Password</h2>

      <form>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="password"
            name="password"
            id="password"
            required
            placeholder="New Password"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Confirm New Password"
          />
        </div>

        <div className={styles.submitBtn}>
          <button className="btn-primary btn-block">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
