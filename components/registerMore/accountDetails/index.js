import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import Link from "next/link";

const AccountDetails = ({ stepHandler, backHandler }) => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submitted!");
      }}
    >
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <Input
            type="text"
            required
            labelText="First Name"
            id="firstName"
            name="first_name"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            type="text"
            required
            labelText="Last Name"
            id="lastName"
            name="last_name"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            type="email"
            required
            labelText="Email Address"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            type="email"
            required
            labelText="Confirm Email Address"
            id="confirmEmail"
            name="confirm_email"
          />
        </div>
        <div className={styles.formGroup}>
          <Select
            name="country"
            labelText="Country of Residence"
            required
            id="country"
            defaultValue=""
          >
            <option disabled value="">
              Select one
            </option>
            <option value="nig">Nigeria</option>
            <option value="gh">Ghana</option>
            <option value="sa">South Africa</option>
          </Select>
        </div>
        <div className={styles.formGroup}>
          <Input type="text" labelText="Company Name" id="company" />
        </div>
      </div>

      <div className={styles.formTerms}>
        <p>
          By clicking Continue, you agree to the Cloudtician{" "}
          <Link href="/terms-of-service">
            <a>Term of Use</a>
          </Link>
        </p>
      </div>

      <div className={styles.formBtn}>
        <button
          className="btn-primary btn-small"
          onClick={stepHandler}
          type="submit"
        >
          CONTINUE
        </button>
      </div>

      {/* added by me */}
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
  );
};

export default AccountDetails;
