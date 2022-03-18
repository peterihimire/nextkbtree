import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/portfolioTab2";
import Input from "../../ui/customInputWithIcon";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";

const Investments = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "All Investment",
      id: 1,
    },
    {
      name: "Crowd Source",
      id: 2,
    },
    {
      name: "Long Hold Investment",
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
          />

          {/* <Input
            type='text'
            id='search'
            // required
            name='search'
            placeholder='Search Investments here'
            src='/images/search.svg'
            alt=''
            loading='lazy'
            className={styles.searchInput}
            iconClass={styles.iconClass}
            inputHolder={styles.inputHolder}
          /> */}
        </div>

        <div className={styles.tabContent}>
          {tabIndex === 1 && (
            <div className={styles.grid}>
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='3'
                id='3'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='4'
                id='4'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='5'
                id='5'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='6'
                id='6'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='7'
                id='7'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='8'
                id='8'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='9'
                id='9'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='10'
                id='10'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='11'
                id='11'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='12'
                id='12'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
            </div>
          )}
          {tabIndex === 2 && (
            <div className={styles.grid}>
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='3'
                id='3'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='4'
                id='4'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='3'
                id='3'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='4'
                id='4'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
            </div>
          )}
          {tabIndex === 3 && (
            <div className={styles.grid}>
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='3'
                id='3'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='4'
                id='4'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='1'
                id='1'
                src='/images/recommend-invest-img.png'
                alt='img hot'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
                // openModal={applyHandler}
              />
              <DashboardCard
                key='2'
                id='2'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='3'
                id='3'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
              <DashboardCard
                key='4'
                id='4'
                src='/images/recommend-invest-img.png'
                alt='img'
                title='Aklas real estate dual home'
                duration='11d: 24h: 32m: 44s'
                percentage='30%'
                investors='208'
                targetAmt='9,000,000'
                raisedAmt='2,000,000'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Investments;
