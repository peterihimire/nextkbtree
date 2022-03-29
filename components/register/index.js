import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Form from "./form";
import Link from "next/link";
// import Image from "next/image";
import Modal from "../ui/modal/modalRegister";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  const { error, loading, response } = useSelector((state) => {
    // console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      response: state.auth.response,
    };
  });

  useEffect(() => {}, []);


  
  // const applyHandler = () => {
  //   setShowModal(true);

    // document.documentElement.classList.add("_fixed");
    // document.body.classList.add("_fixed");
  // };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.inner}>
            <Link href='/'>
              <img src='/images/logo-light.svg' alt='' />
            </Link>
            <h2>Safe Investments</h2>
            <p>
              Platform that allows you invest securely, safely with guarantee to
              their investment.
            </p>
            <img src='/images/indicator.svg' alt='' />
          </div>
        </div>

        <div className={styles.right}>
          <Form />
        </div>
      </div>

      {response && (
        <Modal
          // header='This is the modal header'
          bodyClass={styles.modalContent}
          click={() => {
            setShowModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          <div className={styles.registerModal}>
            <h2>{response}</h2>
            <div>
              Proceed to login
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Register;
