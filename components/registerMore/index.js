import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
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
      {step === 0 && (
        <section className={styles.register}>
          <div className={styles.wrapper}>
            <h4>A STEP TOWARDS GREATNESS</h4>
            <h2>
              Forge ahead by sharpening your skill with the right skillsets to
              build better
            </h2>
            <p>Select which best describe you below</p>
          </div>
          <div className={styles.regWrapper}>
            <a className={styles.WrapperCard} onClick={stepHandler}>
              <div className={styles.regImg}>
                <img src="/images/userIcon.svg" alt="" loading="lazy" />
              </div>

              <div className="">
                <h4>Individual</h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  urna, ac vitae dui, sit semper orci eu tincidunt. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
                  dui, sit semper orci eu tincidunt.
                </p>
              </div>
            </a>

            <div className={styles.WrapperCard}>
              <div className={styles.regImg}>
                <img src="/images/bag-vector.svg" alt="" loading="lazy" />
              </div>

              <div className="">
                <h4>Organisation</h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                  viverra malesuada
                </p>

                <Link href="/contact-sales">
                  <a className={styles.contactLink}>
                    <p>CONTACT SALES</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {step > 0 && (
        <Steps
          step={step}
          stepHandler={stepHandler}
          // added by me
          backHandler={backHandler}
        />
      )}
    </>
  );
};

export default RegisterIndex;
