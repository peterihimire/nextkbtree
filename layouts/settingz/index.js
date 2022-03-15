import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

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
                      Profile Settings
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
                      Card Settings
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
                      Bank Settings
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
                      Notifications
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
                      Change Password
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
                      2FA Settings
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
