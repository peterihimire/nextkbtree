import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
  return (
    <div className={styles.loginForm}>
      <Link href="/">
        <a>
          <img src="/images/arrow-back.svg" alt="" />
        </a>
      </Link>

      <h2>Select your Resident Country</h2>

      <form>
        <div className={styles.formGroup}>
          <Select
            name="country"
            // labelText="Country of Residence"
            required
            id="country"
            defaultValue=""
          >
            <option value="" disabled>
              Select your country
            </option>
            <option value="nig">Nigeria</option>
            <option value="gh">Ghana</option>
            <option value="sa">South Africa</option>
          </Select>
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            required
            placeholder="Enter your phone number"
          />
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
        {/* <div className={styles.formBtn}>
          <button
            className="btn-primary btn-small"
            onClick={backHandler}
            type="submit"
          >
            BACK
          </button>
        </div> */}

        {/* <div className={styles.register}>
          <span>Already have an account? </span>
          <Link href="/login">
            <a className={styles.linkStyle}>Log in</a>
          </Link>
        </div> */}
      </form>
    </div>
  );
};

export default Form;
