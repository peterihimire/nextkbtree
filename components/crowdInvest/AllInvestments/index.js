import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/crowdInvestTab";
import Input from "../../ui/customInputWithIcon";
import styles from "./styles.module.scss";

const AllInvestments = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "Popular",
      id: 1,
    },
    {
      name: "Recently Added",
      id: 2,
    },
    {
      name: "Matured",
      id: 3,
    },
  ];

  return (
    <section className={styles.allInvestment}>
      <div className={styles.wrapper}>
        <div className={styles.investmentContent}>
          <CustomTabs
            activeTab={tabIndex}
            clicked={(index) => tabIndexHandler(index)}
            headers={tabHeaders}
          >
            <div className={styles.tabContent}>
              {tabIndex === 1 && (
                <div>
                  <h3>This is popular Investmnents</h3>
                </div>
              )}
              {tabIndex === 2 && (
                <div>
                  <h3>This is Recently Added Investment</h3>
                </div>
              )}
              {tabIndex === 3 && (
                <div>
                  <h3>This is Matured Investments</h3>
                </div>
              )}
            </div>
          </CustomTabs>
          <div>
            <Input
              type='text'
              id='search'
              // required
              name='search'
              placeholder='Search Investments here'
              src='/images/search.svg'
              alt=''
              loading='lazy'
              iconClass={styles.iconClass}
            />
          </div>
        </div>
        {/* <div className={styles.right}>
          <h3>Investment Overview</h3>
          {tabIndex === 1 && (
            <div className={styles.grid}>
              <div className={styles.investPortfolio}>
                <p>Investment Portfolio</p>
                <div>
                  <h3>This is NGN content</h3>
                </div>
              </div>
              <div className={styles.expectReturn}>
                <p>Expected Return</p>
                <div>
                  <h3>This is NGN content</h3>
                </div>
              </div>
            </div>
          )}

          {tabIndex === 2 && (
            <div className={styles.grid}>
              <div className={styles.investPortfolio}>
                <p>Investment Portfolio</p>
                <div>
                  <h3>This is USD content</h3>
                </div>
              </div>
              <div className={styles.expectReturn}>
                <p>Expected Return</p>
                <div>
                  <h3>This is USD content</h3>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default AllInvestments;
