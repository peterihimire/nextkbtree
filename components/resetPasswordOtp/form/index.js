import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { Debug } from "./Debug";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form className={styles.loginForm}>
          {stepNumber === 0 ? (
            <Link href="/">
              <a>
                <img src="/images/arrow-back.svg" alt="" />
              </a>
            </Link>
          ) : (
            <button onClick={() => previous(formik.values)} type="button">
              <img src="/images/arrow-back.svg" alt="" />
            </button>
          )}
          <h2>Reset Password</h2>
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div

          // style={{ display: "flex" }}
          >
            {/* {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )} */}
            <div className={styles.submitBtn}>
              <button
                disabled={formik.isSubmitting}
                type="submit"
                className=" btn-primary btn-block"
              >
                {isLastStep ? "Send" : "Continue"}
              </button>
            </div>
          </div>
          {/* <Debug /> */}
        </Form>
      )}
    </Formik>
  );
};

const WizardStep = ({ children }) => children;

const FormStep = () => (
  <div>
    {/* <h1>Formik Multistep Wizard</h1> */}
    <Wizard
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
      }}
      onSubmit={async (values) =>
        sleep(300).then(() => console.log("Wizard submit", values))
      }
    >
      <WizardStep
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          firstName: Yup.string().required("required"),
          lastName: Yup.string().required("required"),
        })}
      >
        <div className={styles.formGroup}>
          {/* <label htmlFor="firstName">First Name</label> */}
          <Field
            autoComplete="given-name"
            // component="input"
            component="input"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="firstName" />
        </div>
        <div className={styles.formGroup}>
          {/* <label htmlFor="lastName">Last Name</label> */}
          <Field
            autoComplete="family-name"
            // component="input"
            component="input"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="lastName" />
        </div>

        {/* <div className={styles.formGroup}>
          <Input
            // // labelText="What’s your Email?"
            // type="text"
            // name="firstName"
            // id="firstName"
            // // required
            // placeholder="First Name"

            autoComplete="given-name"
            // component="input"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage className="error" component="div" name="firstName" />
        </div> */}
        {/* <div className={styles.formGroup}>
          <Input
            // // labelText="Create a Password"
            // type="text"
            // name="lastName"
            // id="lastName"
            // // required
            // placeholder="Last Name"
            autoComplete="family-name"
            // component="input"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="lastName" />
        </div> */}
      </WizardStep>
      <WizardStep
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type="email"
            name="email"
            id="email"
            // required
            placeholder="Email"
          />
        </div>
        {/* <div>
          <label htmlFor="email">Email</label>
          <Field
            autoComplete="email"
            component="input"
            id="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="email" />
        </div> */}
      </WizardStep>
    </Wizard>
  </div>
);

export default FormStep;
// import { FormikStepper, FormikStep } from "formik-stepper";

// const Form = () => {
//   return (
//     <div className={styles.loginForm}>
//       <h2>Reset Password</h2>
//       <FormikStepper
//         /// Accept all Formik props
//         // onSubmit={onSubmit} /// onSubmit Function
//         // initialValues={{
//         //   firstName: "",
//         //   lastName: "",
//         //   email: "",
//         //   password: "",
//         //   privacy: false,
//         // }}
//         // validationSchema={validationSchema}
//         // labelsColor="secondary" /// The text label color can be root variables or css => #fff
//         // withStepperLine /// false as default and If it is false, it hides stepper line
//         // nextBtnLabel="step" /// Next as default
//         // prevBtnLabel="return" /// Prev as default
//         // submitBtnLabel="Done" /// Submit as default
//         // nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
//         // prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
//         // submitBtnColor="success" /// as default and The color can be root variables or css => #fff
//       >
//         <FormikStep
//           // label="Profile Info" /// The text label of Step
//           // withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
//           // withNumbers /// If true, it hides the icon and shows the step number
//           // iconColor="white" /// The color can be root variables or css => #fff
//           // circleColor="danger" /// The color can be root variables or css => #fff
//         >
//           {/* <InputField name="firstName" label="First Name"></InputField>
//           <InputField name="lastName" label="Last Name" /> */}

//           <div className={styles.formGroup}>
//             <Input
//               // labelText="What’s your Email?"
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Email"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <Input
//               // labelText="Create a Password"
//               type="password"
//               name="password"
//               id="password"
//               required
//               placeholder="Password"
//             />
//           </div>
//         </FormikStep>

//         <FormikStep
//           // label="Profile Info" /// The text label of Step
//           // withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
//           // withNumbers /// If true, it hides the icon and shows the step number
//           // iconColor="white" /// The color can be root variables or css => #fff
//           // circleColor="danger" /// The color can be root variables or css => #fff
//         >
//           {/* <InputField name="firstName" label="First Name"></InputField>
//           <InputField name="lastName" label="Last Name" /> */}

//           <div className={styles.formGroup}>
//             <Input
//               // labelText="What’s your Email?"
//               type="email"
//               name="email"
//               id="email"
//               required
//               placeholder="Email"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <Input
//               // labelText="Create a Password"
//               type="password"
//               name="password"
//               id="password"
//               required
//               placeholder="Password"
//             />
//           </div>
//         </FormikStep>
//       </FormikStepper>

//       {/* <form>
//         <div className={styles.formGroup}>
//           <Input
//             // labelText="What’s your Email?"
//             type="email"
//             name="email"
//             id="email"
//             required
//             placeholder="Email"
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <Input
//             // labelText="Create a Password"
//             type="password"
//             name="password"
//             id="password"
//             required
//             placeholder="Password"
//           />
//         </div>
//         <div className={styles.forgot}>
//           <Link href="/">
//             <a className={styles.linkStyle}>Forgot Password?</a>
//           </Link>
//         </div>

//         <div className={styles.submitBtn}>
//           <button className="btn-primary btn-block">Send</button>
//         </div>

//         <div className={styles.register}>
//           <span>Don't have an account? </span>
//           <Link href="/">
//             <a className={styles.linkStyle}>Register</a>
//           </Link>
//         </div>
//       </form> */}
//     </div>
//   );
// };

// export default Form;
