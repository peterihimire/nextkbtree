import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";

const Form = () => {
  return (
    <div className={styles.loginForm}>
      <h2>Forgot Password</h2>
      <p>Enter your phone number to receive a reset code </p>
      <form>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required
            placeholder="Phone Number"
          />
        </div>

        <div className={styles.submitBtn}>
          <button className="btn-primary btn-block">Send OTP</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
