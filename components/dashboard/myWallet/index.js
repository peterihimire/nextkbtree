import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/dashboardTab";
import styles from "./styles.module.scss";

const MyWallet = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "NGN",
      id: 1,
    },
    {
      name: "USD",
      id: 2,
    },
  ];

  return (
    <section className={styles.walletInvestment}>
      <div className={styles.wrapper}>
        <div className={styles.walletHeader}>
          <div className={styles.left}>
            <h3>My wallet</h3>
            <div className={styles.walletContent}>
              <CustomTabs
                activeTab={tabIndex}
                clicked={(index) => tabIndexHandler(index)}
                headers={tabHeaders}
              >
                <div className={styles.tabContent}>
                  {tabIndex === 1 && (
                    <div>
                      <p>Wallet Balance</p>
                      <h3>$1.00</h3>
                    </div>
                  )}
                  {tabIndex === 2 && (
                    <div>
                      <p>Wallet Balance</p>
                      <h3>$0.00</h3>
                    </div>
                  )}
                </div>
              </CustomTabs>
            </div>
          </div>
          <div className={styles.right}>
            <h3>Investment Overview</h3>
            {tabIndex === 1 && (
              <div className={styles.grid}>
                <div className={styles.investPortfolio}>
                  <p>Investment Portfolio</p>
                  <div>
                    <h3>$1.00</h3>
                  </div>
                </div>
                <div className={styles.expectReturn}>
                  <p>Expected Return</p>
                  <div>
                    <h3>$1.00</h3>
                  </div>
                </div>
              </div>
            )}

            {tabIndex === 2 && (
              <div className={styles.grid}>
                <div className={styles.investPortfolio}>
                  <p>Investment Portfolio</p>
                  <div>
                    <h3>$0.00</h3>
                  </div>
                </div>
                <div className={styles.expectReturn}>
                  <p>Expected Return</p>
                  <div>
                    <h3>$0.00</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWallet;
