import React from "react";
import styles from "./styles.module.scss";
import Stepper from "../../ui/stepper";
import Form from "../form";
import Form2 from "../form2";
import Form3 from "../form3";
import Form4 from "../form4";
import Form5 from "../form5";
// import Image from "next/image";


const Register = ({ step, stepHandler, backHandler }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.inner}>
          <img src="/images/logo-light.svg" alt="" />
          <h2>Safe Investments</h2>
          <p>
            Platform that allows you invest securely, safely with guarantee to
            their investment.
          </p>
          <img src="/images/indicator.svg" alt="" />
        </div>
      </div>

      <div className={styles.right}>
        {/* <Form /> */}
        <Stepper step={step}>
          <div className={styles.stepContent}>
            {step === 0 && (
              <Form stepHandler={stepHandler} backHandler={backHandler} />
            )}

            {step === 1 && (
              <Form2 stepHandler={stepHandler} backHandler={backHandler} />
            )}

            {step === 2 && (
              <Form3 stepHandler={stepHandler} backHandler={backHandler} />
            )}

            {step === 3 && (
              <Form4 stepHandler={stepHandler} backHandler={backHandler} />
            )}

            {step === 4 && (
              <Form5 stepHandler={stepHandler} backHandler={backHandler} />
            )}
          </div>
        </Stepper>
      </div>
    </div>
  );
};

export default Register;
