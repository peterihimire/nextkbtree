import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Link from "next/link";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
 

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
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            // labelText="Create a Password"
            type='password'
            name='password'
            id='password'
            required
            placeholder='Password'
          />
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
