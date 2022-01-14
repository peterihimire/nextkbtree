import React from "react";
import Nav from "./nav";

import styles from "./styles.module.scss";

const DashboardNav = ({ isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles._show : ""} `}>
      <Nav />
    </div>
  );
};

export default DashboardNav;
