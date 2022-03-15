import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Bank from "../../public/images/bank.svg";
import Bell from "../../public/images/bell.svg";
import CreditCard from "../../public/images/credit-card.svg";
import Lock from "../../public/images/lock.svg";
import Person from "../../public/images/person.svg";
import Shield from "../../public/images/shield.svg";

import styles from "./styles.module.scss";

const SettingzSubLayout = ({ children }) => {
  const router = useRouter();

  return (
    <section className={styles.settings}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <nav className={styles.settingNav}>
              <ul>
                <li>
                  <Link href='/setting/profile-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/profile-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Person /> <span>Profile Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/setting/card-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/card-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <CreditCard /> <span>Card Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/setting/bank-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/bank-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Bank />
                      <span>Bank Settings</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/setting/notifications-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/notifications-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Bell />
                      <span>Notifications</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/setting/change-password-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/change-password-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Lock /> <span>Change Password</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/setting/two-factor-setting'>
                    <a
                      className={`${styles.link} ${
                        router.pathname === "/setting/two-factor-setting"
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Shield /> <span> 2FA Settings</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.right}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SettingzSubLayout;
