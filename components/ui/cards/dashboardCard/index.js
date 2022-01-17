import React from "react";
import styles from "./styles.module.scss";
// import ProgressBar from "@ramonak/react-progress-bar";

const DashboardCard = ({
  src,
  alt,
  title,
  duration,
  percentage,
  investors,
  targetAmt,
  raisedAmt,
  openModal,
}) => {
  return (
    <div onClick={openModal}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt={alt} loading="lazy" src={src} />
          <div className={styles.returns}>
            <h4>{percentage}</h4>
            <p> Return</p>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.durationDiv}>
            <div className={styles.duration}>
              <img src="/images/clock.svg" alt="" /> <span>{duration}</span>
            </div>
          </div>
          <h3>{title}</h3>
          <p className={styles.investors}>{investors} Investors</p>
          <div className={styles.amount}>
            <div className={styles.targetAmt}>
              <img src="/images/red-spiral.svg" alt="" />
              {targetAmt}
            </div>
            <span>Raised: {raisedAmt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
