import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/settingsTab";
import Select from "../../ui/customSelect";
import Switch from "../../ui/switch";

import Input from "../../ui/customInput";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";
import CopyIcon from "../../../public/images/copy-icon.svg";
import Bank from "../../../public/images/bank.svg";
import Bell from "../../../public/images/bell.svg";
import CreditCard from "../../../public/images/credit-card.svg";
import Lock from "../../../public/images/lock.svg";
import Person from "../../../public/images/person.svg";
import Shield from "../../../public/images/shield.svg";

const ReferralContent = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "Profile Settings",
      icon: "../../../public/images/person.svg",
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
    <section className={styles.referral}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img src='/images/refer-icon.svg' alt='' />
            <h3>Earn $50 by sharing your link!</h3>
            <p>
              Help your friends discover KoboTree, You and your friend will earn
              $50 cash reward each when they sign up with your code
            </p>

            <div className={styles.formGroup}>
              <Input
                children={<CopyIcon />}
                innerLabel='First Name'
                clicked={() => {
                  console.log("Hello inner-label clicked");
                }}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.hud}>
              <h4>Referral Earnings</h4>
              <div className={styles.hudContent}>
                <div className={styles.hudAmt}>
                  <h3>$650</h3>
                  <p>13 Users referred</p>
                </div>
                <button className=' btn-transparent btn-medium'>
                  Withdraw
                </button>
              </div>
            </div>
            <div className={styles.content}>
              <h4>Referral List</h4>
              <div className={styles.listWrapper}>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
                <div className={styles.list}>
                  <img src='/images/user-frame.svg' alt='' />
                  <div className={styles.referralInfo}>
                    <div className={styles.nameDate}>
                      <h4>Sunday Falade</h4>
                      <p>22-Oct-2022</p>
                    </div>
                    <span>$50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralContent;
