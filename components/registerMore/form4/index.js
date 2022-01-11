import React, { useState } from "react";
import styles from "./styles.module.scss";
// import DropXone from "../../ui/customDropzone";
import Input from "../../ui/customInput";
import { useDropzone } from "react-dropzone";
// import Link from "next/link";

const Form = ({ stepHandler, backHandler }) => {
  const Dropzone = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    return (
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <img src="images/camIcon.svg" alt="" />
          <p>Upload image here</p>
          <p>Drag and drop</p>
        </div>
        <div className={styles.uploadedFile}>
          {/* <h4>Files</h4> */}
          <ul>{files}</ul>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.radioForm}>
      <button onClick={backHandler} className={styles.backStep}>
        <img src="/images/arrow-back.svg" alt="" />
      </button>

      <h2>Verify your Identity</h2>

      <form>
        <div className={styles.formGroup}>
          <input
            className={styles.radioInput}
            // labelText="Create a Password"
            type="radio"
            name="employmentStatus"
            id="employed"
            // checked
            // required
            // placeholder="Enter Bank Verification Number"
          />
          <label htmlFor="radioEmployed" className={styles.radioLabel}>
            Employed
          </label>
        </div>

        <div className={styles.formGroup}>
          <input
            className={styles.radioInput}
            // labelText="Create a Password"
            type="radio"
            name="employmentStatus"
            id="unemployed"
            // required
            // placeholder="Enter Bank Verification Number"
          />
          <label htmlFor="radioUnemployed" className={styles.radioLabel}>
            Unemployed
          </label>
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
