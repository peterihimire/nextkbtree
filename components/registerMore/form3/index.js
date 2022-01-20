import React, { useState } from "react";
import styles from "./styles.module.scss";
// import DropXone from "../../ui/customDropzone";
import Select from "../../ui/customSelect";
import { useDropzone } from "react-dropzone";
// import Link from "next/link";
// import Image from "next/image";


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
          <Dropzone />
          {/* <DropXone /> */}
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
