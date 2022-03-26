import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../../utils/axios";

const Form = () => {
  const dispatch = useDispatch();

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
    // onSubmit: (values, { resetForm }) => {
    //   const id = content.id;
    //   console.log(values, id);
    //   dispatch(actions.careerApplication({ ...values, id }));
    //   resetForm({ values: "" });
    // },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      dispatch(actions.register({ ...values, resetForm }));

      // try {
      //   const response = await axios.post(`user/auth/register`, values);
      //   console.log(response.data.message);

      //   toast.success(response.data.message, {
      //     position: "top-right",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      //   resetForm({ values: "" });
      //   setShowModal(false);
      // } catch (err) {
      //   if (err.response && err.response.status === 400) {
      //     toast.error(err.response.data.error[0], {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //   } else {
      //     toast.error(err.response.data.message, {
      //       position: "top-right",
      //       autoClose: 5000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //     });
      //   }
      // } finally {
      // }
    },
  });
  return (
    <div className={styles.loginForm}>
      <h2>Create an Account</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type='text'
            name='firstName'
            id='firstName'
            // required
            placeholder='First Name'
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className={styles.errorStyle}>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type='text'
            name='lastName'
            id='lastName'
            // required
            placeholder='Last Name'
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className={styles.errorStyle}>{formik.errors.lastName}</p>
          ) : null}
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="What’s your Email?"
            type='email'
            name='email'
            id='email'
            // required
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
            // required
            placeholder='Password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorStyle}>{formik.errors.password}</p>
          ) : null}
        </div>

        <div className={styles.submitBtn}>
          <button className='btn-primary btn-block' type='submit'>
            {/* Create Account */}
            {loading && "Loading..."}
            {!loading && <div>Create Account</div>}
          </button>
        </div>

        <div className={styles.register}>
          <span>Already have an account? </span>
          <Link href='/login'>
            <a className={styles.linkStyle}>Log in</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
