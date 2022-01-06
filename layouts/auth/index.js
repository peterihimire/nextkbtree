import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const AuthLayout = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, []);

  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default AuthLayout;
