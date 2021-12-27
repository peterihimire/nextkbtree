import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../../public/images/logo-light.svg";
import ActiveLink from "../../../hoc/activeLink";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.first}>
        <div className={styles.logo}>
            <Logo />
          </div>

        </div>
        <div className={styles.second}>

        </div>
        <div className={styles.last}>
          
          </div>
      </div>
    </footer>
  );
};

export default Footer;
