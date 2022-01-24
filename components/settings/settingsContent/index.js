import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/settingsTab";
import Select from "../../ui/customSelect";
import Switch from "../../ui/switch";

import Input from "../../ui/profileInput";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";
import BlueEye from "../../../public/images/eyeblue.svg";

const SettingsContent = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "Profile Settings",
      id: 1,
    },
    {
      name: "Card Settings",
      id: 2,
    },
    {
      name: "Bank Settings",
      id: 3,
    },
    {
      name: "Notifications",
      id: 4,
    },
    {
      name: "Change Password",
      id: 5,
    },
    {
      name: "2FA Settings",
      id: 6,
    },
  ];

  return (
    <section className={styles.settings}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <CustomTabs
              activeTab={tabIndex}
              clicked={(index) => tabIndexHandler(index)}
              headers={tabHeaders}
            />
          </div>
          <div className={styles.right}>
            {tabIndex === 1 && (
              <div className={styles.content}>
                <h3>Profile settings</h3>

                <form>
                  {/* <div className={styles.formGroup}>
                    <Input
                      children={<BlueEye />}
                      innerLabel='First Name'
                      clicked={() => {
                        console.log("Hello inner-label clicked");
                      }}
                    />
                  </div> */}
                  <div className={styles.formGroup}>
                    <Input
                      labelText='Full Name'
                      placeholder='Full Name'
                      // value='Peter Ihimire'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText='Email'
                      placeholder='Email'
                      // value='Peter Ihimire'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText='Phone Number'
                      placeholder='Phone Number'
                      // value='Peter Ihimire'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <Input
                      labelText='Confirm New Password'
                      placeholder='Confirm New Password'
                      // value='Peter Ihimire'
                    />
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
                </form>
              </div>
            )}
            {tabIndex === 2 && (
              <div className={styles.content}>
                <h3>Card settings</h3>
                <div className={styles.cardWrapper}>
                  <div className={styles.atmCard1}>
                    <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
                    <span> 9877 </span>
                    <h4>Obinna Ani</h4>
                    <div className={styles.expiryDelete}>
                      <div className={styles.date}>
                        <small>MONTH/YEAR</small>
                        <p>02 / 24</p>
                      </div>
                      <img src='/images/trash.svg' alt='' />
                    </div>
                  </div>

                  <div className={styles.atmCard2}>
                    <span> 9877 </span> <span> 9877 </span> <span> 9877 </span>
                    <span> 9877 </span>
                    <h4>Obinna Ani</h4>
                    <div className={styles.expiryDelete}>
                      <div className={styles.date}>
                        <small>MONTH/YEAR</small>
                        <p>02 / 24</p>
                      </div>
                      <img src='/images/trash.svg' alt='' />
                    </div>
                  </div>

                  <div className={styles.submitBtn}>
                    <button
                      className='btn-transparent-dark btn-block'
                      // onClick={stepHandler}
                      type='submit'
                    >
                      Add New Card
                    </button>
                  </div>
                </div>
              </div>
            )}
            {tabIndex === 3 && (
              <div>
                <h3>Bank Settings</h3>
              </div>
            )}
            {tabIndex === 4 && (
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
            )}
            {tabIndex === 5 && (
              <div>
                <h3>Change Password</h3>
              </div>
            )}
            {tabIndex === 6 && (
              <div>
                <h3>2FA Settings</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsContent;
