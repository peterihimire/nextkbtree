import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/portfolioTab1";
import styles from "./styles.module.scss";

const PortfolioHud = () => {
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
    <section className={styles.portfolioHud}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.nairaDollar}>
              {tabIndex === 1 && (
                <div className={styles.nairaDollarWrapper}>
                  <div className={styles.nairaDollarContent}>
                    <p>Investment Portfolio</p>
                    <h3>$2,938,989.00</h3>
                  </div>

                  <div className={styles.nairaDollarContent}>
                    <p>Expected Return Value</p>
                    <h3>$1,900,000.00</h3>
                  </div>
                </div>
              )}
              {tabIndex === 2 && (
                <div className={styles.nairaDollarWrapper}>
                  <div className={styles.nairaDollarContent}>
                    <p>Investment Portfolio</p>
                    <h3>$4,938,989.00</h3>
                  </div>

                  <div className={styles.nairaDollarContent}>
                    <p>Expected Return Value</p>
                    <h3>$9,900,000.00</h3>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.nairaDollarHead}>
              <img src='/images/eyeBlue.svg' alt='' />
              <CustomTabs
                activeTab={tabIndex}
                clicked={(index) => tabIndexHandler(index)}
                headers={tabHeaders}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h4>Portfolio Overview</h4>
            <div className={styles.overview}>
              <span>
                <h5>4</h5>
                <p>Portfolio</p>
              </span>
              <span>
                <h5>2</h5>
                <p>Matured</p>
              </span>
              <span>
                <h5>5</h5>
                <p>Active</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHud;
