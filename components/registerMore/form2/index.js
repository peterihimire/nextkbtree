import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import InputIcon from "../../ui/customInputWithIcon";
import Select from "../../ui/customSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Image from "next/image";


// import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.loginForm}>
      <button onClick={backHandler} className={styles.backStep}>
        <img src="/images/arrow-back.svg" alt="" />
      </button>

      <h2>Set Up your Account Verification</h2>

      <form>
        <div className={styles.formGroup}>
          <Select
            name="gender"
            // labelText="Country of Residence"
            // required
            id="gender"
            defaultValue=""
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="nig">Male</option>
            <option value="gh">Female</option>
          </Select>
        </div>

        <div className={styles.formGroup}>
          {/* <Input
            // labelText="Create a Password"
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            // required
            placeholder="Date of Birth"
          /> */}

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // isClearable
            showYearDropdown
            showMonthDropdown
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            // required
            placeholder="Enter Bank Verification Number"
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
      </form>
    </div>
  );
};

export default Form;
