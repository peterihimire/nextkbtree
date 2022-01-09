import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
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
          <button
            className="btn-primary btn-block"
            onClick={stepHandler}
            type="submit"
          >
            Send OTP
          </button>
        </div>
        <div className={styles.formBtn}>
          <button
            className="btn-primary btn-small"
            onClick={backHandler}
            type="submit"
          >
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
