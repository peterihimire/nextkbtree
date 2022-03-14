import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const SettingzSubLayout = ({ children }) => {
  return (
    <section className={styles.settings}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <CustomTabs
              activeTab={tabIndex}
              clicked={(index) => tabIndexHandler(index)}
              headers={tabHeaders}
              // src='../../../public/images/person.svg'
              src={tabHeaders}
              // src="/images/send-icon.svg"
            />
          </div>
          <div className={styles.right}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default SettingzSubLayout;
