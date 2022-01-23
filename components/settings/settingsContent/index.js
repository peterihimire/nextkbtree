import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/settingsTab";
import Select from "../../ui/customSelect";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";

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
              <div>
                <h3>Profile settings</h3>
              </div>
            )}
            {tabIndex === 2 && (
              <div>
                <h3>Card settings</h3>
              </div>
            )}
            {tabIndex === 3 && (
              <div>
                <h3>Bank Settings</h3>
              </div>
            )}
            {tabIndex === 4 && (
              <div>
                <h3>Notifications</h3>
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
