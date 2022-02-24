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

const OrderConfirmation = () => {
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
            <div className={styles.investInfo}>
              <img src='/images/recommend-invest-img.png' alt='' />
              <div className={styles.investText}>
                <div className={styles.info}>
                  <h3>Aklas Real Estate...</h3>
                  <p>California, USA</p>
                  <p>AgrpInvest/KoboTree/1kt980invp</p>
                </div>
                <div className={styles.value}>
                  <p>Portfolio Value</p>
                  <h3>$56,000.00</h3>
                </div>
              </div>
            </div>

            <div className={styles.inputAmt}>
              <div className={styles.defaultInputAmt}>
                <div className={styles.radioToolbar}>
                  <input
                    type='radio'
                    id='radioEmployed'
                    name='employmentStatus'
                    value='1000'
                  />
                  <label
                    htmlFor='radioEmployed'

                    // onClick={employedHandler}
                  >
                    <div> $1,000</div>
                  </label>

                  <input
                    type='radio'
                    id='radioUnemployed'
                    name='employmentStatus'
                    value='2000'
                  />
                  <label
                    htmlFor='radioUnemployed'

                    // onClick={otherHandler}
                  >
                    <div> $2,000</div>
                  </label>

                  <input
                    type='radio'
                    id='radioSelfemployed'
                    name='employmentStatus'
                    value='3000'
                  />
                  <label
                    htmlFor='radioSelfemployed'

                    // onClick={otherHandler}
                  >
                    <div>$3,000</div>
                  </label>

                  <input
                    type='radio'
                    id='radioStudent'
                    name='employmentStatus'
                    value='4000'
                  />
                  <label
                    htmlFor='radioStudent'

                    // onClick={otherHandler}
                  >
                    <div> $4,000</div>
                  </label>
                </div>
              </div>
              <div className={styles.formGroup}>
                <Input
                  // labelText="Create a Password"
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  // required
                  placeholder='Enter Preffered Amount'
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.investList}>
              <ul>
                <li>
                  <p>Purcahse Value</p> <span>$0</span>
                </li>
                <li>
                  <p>Unit Value</p> <span>0 Unit</span>
                </li>

                <li>
                  <p>Processing Fee</p> <span>$0</span>
                </li>

                <li>
                  <p>Total</p> <span>$0</span>
                </li>
                <li>
                  <p>Total in Naira</p> <span>N0</span>
                </li>
              </ul>
            </div>
            <button className={`${styles.orderBtn} btn-primary btn-large`}>
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
