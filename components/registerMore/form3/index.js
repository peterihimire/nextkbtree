import React, { useState } from "react";
import styles from "./styles.module.scss";
import DropXone from "../../ui/customDropzone";
import Select from "../../ui/customSelect";
// import Dropzone from "react-dropzone";

// import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
  return (
    <div className={styles.loginForm}>
      <button onClick={backHandler} className={styles.backStep}>
        <img src="/images/arrow-back.svg" alt="" />
      </button>

      <h2>Verify your Identity</h2>

      <form>
        <div className={styles.formGroup}>
          <Select
            name="id"
            // labelText="Country of Residence"
            // required
            id="id"
            defaultValue=""
          >
            <option value="" disabled>
              Select Preferred ID
            </option>
            <option value="nig">National ID</option>
            <option value="gh">Driving License</option>
          </Select>
        </div>

        <div className={styles.formGroup}>
          {/* <Input
            // labelText="Create a Password"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            // required
            placeholder="Enter Bank Verification Number"
          /> */}

          {/* <Dropzone>Upload image here</Dropzone> */}

          {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Upload image here</p>
                </div>
              </section>
            )}
          </Dropzone> */}

          <DropXone />
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
