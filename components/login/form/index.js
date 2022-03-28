import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);

  const { error, loading } = useSelector((state) => {
    // console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
    };
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(4, "Characters must not be less than 4")
        .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
        .required("Required *"),
      lastName: Yup.string()
        .min(4, "Characters must not be less than 4")
        .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
        .required("Required *"),

      email: Yup.string().email("Invalid email address").required("Required *"),

      password: Yup.string().required("Required *"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      dispatch(actions.register({ ...values, resetForm }));
    },
  });

  return (
    <div className={styles.loginForm}>
      <h2>Log in into your Account</h2>

      <form>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type='email'
            name='email'
            id='email'
            required
            placeholder='Email'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorStyle}>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type='password'
            name='password'
            id='password'
            required
            placeholder='Password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorStyle}>{formik.errors.password}</p>
          ) : null}
        </div>
        <div className={styles.forgot}>
          <Link href='/forgot-password'>
            <a className={styles.linkStyle}>Forgot Password?</a>
          </Link>
        </div>

        <div className={styles.submitBtn}>
          <button
            className='btn-primary btn-block'
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            Send
          </button>
        </div>

        <div className={styles.register}>
          <span>Don't have an account? </span>
          <Link href='/register'>
            <a className={styles.linkStyle}>Register</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
