import React from "react";
import styles from "./styles.module.scss";
// import ProgressBar from "@ramonak/react-progress-bar";

const DashboardCard = ({
  src,
  alt,
  title,
  openModal,
}) => {
  return (
    <div onClick={openModal}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt={alt} loading='lazy' src={src} />
          <div className={styles.returns}>
            <img src='/images/favorite-red.svg' alt='' />
          </div>
        </div>
        <div className={styles.cardBody}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
