import React, { useState } from "react";
// import styles from "./styles.module.scss";
// import Link from "next/link";
import Steps from "./steps";
// import Stepper from '../ui/stepper';

const RegisterIndex = () => {
  const [step, setStep] = useState(0);

  const stepHandler = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  // added by me
  const backHandler = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {
        <Steps
          step={step}
          stepHandler={stepHandler}
          // added by me
          backHandler={backHandler}
        />
      }
    </>
  );
};

export default RegisterIndex;
