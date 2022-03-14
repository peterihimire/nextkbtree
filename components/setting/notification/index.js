import React from "react";
import styles from "./styles.module.scss";

const Notification = () => {
  return (
    <div className={styles.content}>
      <h3>Notifications</h3>
      <div className={styles.notifWrapper}>
        <div className={styles.notifSwitch}>
          <h4>Referal Notification</h4>
          <Switch defaultChecked={true} />
        </div>
        <div className={styles.notifSwitch}>
          <h4>New Investment Notification</h4>
          <Switch defaultChecked={true} />
        </div>
        <div className={styles.notifSwitch}>
          <h4>In-App Notification</h4>
          <Switch defaultChecked={true} />
        </div>
        <div className={styles.notifSwitch}>
          <h4>Investment Maturity Notification</h4>
          <Switch defaultChecked={true} />
        </div>
        <div className={styles.submitBtn}>
          <button
            className='btn-primary btn-block'
            // onClick={stepHandler}
            type='submit'
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
