import React from "react";
import styles from "./styles.module.scss";
import Input from "../../../ui/customInput";
import Link from "next/link";

const Form = () => {
  return (
    <div className={styles.loginForm}>
      <h2>Create an Account</h2>

      <form>
      <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type="text"
            name="fullName"
            id="fullName"
            required
            placeholder="Full Name"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />
        </div>
       

        <div className={styles.submitBtn}>
          <button className="btn-primary btn-block">Create Account</button>
        </div>

        <div className={styles.register}>
          <span>Already have an account? </span>
          <Link href="/login">
            <a className={styles.linkStyle}>Log in</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
