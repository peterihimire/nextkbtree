import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";
import "node_modules/formik-stepper/dist/inputFields/styles.min.css";

const Form = () => {
  return (
    <div className={styles.loginForm}>
      <h2>Reset Password</h2>
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit} /// onSubmit Function
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          privacy: false,
        }}
        validationSchema={validationSchema}
        labelsColor="secondary" /// The text label color can be root variables or css => #fff
        withStepperLine /// false as default and If it is false, it hides stepper line
        nextBtnLabel="step" /// Next as default
        prevBtnLabel="return" /// Prev as default
        submitBtnLabel="Done" /// Submit as default
        nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
        prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
        submitBtnColor="success" /// as default and The color can be root variables or css => #fff
      >
        <FormikStep
          label="Profile Info" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger" /// The color can be root variables or css => #fff
        >
          <InputField name="firstName" label="First Name"></InputField>
          <InputField name="lastName" label="Last Name" />

          {/* <div className={styles.formGroup}>
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
          </div> */}
        </FormikStep>

        <FormikStep
          label="Profile Info" /// The text label of Step
          withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
          withNumbers /// If true, it hides the icon and shows the step number
          iconColor="white" /// The color can be root variables or css => #fff
          circleColor="danger" /// The color can be root variables or css => #fff
        >
          <InputField name="firstName" label="First Name"></InputField>
          <InputField name="lastName" label="Last Name" />

          {/* <div className={styles.formGroup}>
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
          </div> */}
        </FormikStep>
      </FormikStepper>

      {/* <form>
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
        <div className={styles.forgot}>
          <Link href="/">
            <a className={styles.linkStyle}>Forgot Password?</a>
          </Link>
        </div>

        <div className={styles.submitBtn}>
          <button className="btn-primary btn-block">Send</button>
        </div>

        <div className={styles.register}>
          <span>Don't have an account? </span>
          <Link href="/">
            <a className={styles.linkStyle}>Register</a>
          </Link>
        </div>
      </form> */}
    </div>
  );
};

export default Form;
