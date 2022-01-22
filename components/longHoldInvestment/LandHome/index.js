import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/longHoldTab";
import Select from "../../ui/customSelect";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";

const LandHome = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabIndexHandler = (index) => {
    setTabIndex(index);
  };

  const tabHeaders = [
    {
      name: "Land",
      id: 1,
    },
    {
      name: "Home",
      id: 2,
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

          {/* <Select
            type='text'
            id='search'
            // required
            name='search'
            placeholder='Search Investments here'
            src='/images/search.svg'
            alt=''
            loading='lazy'
            className={styles.searchInput}
            // iconClass={styles.iconClass}
            // inputHolder={styles.inputHolder}
          /> */}

          <Select
            // labelText="Country"
            id='country'
            name='country'
            required
            wrapClass={styles.selectWrap}
            className={styles.filterInput}
          >
            <option>Filter by State</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </Select>
          <Select
            // labelText="Country"
            id='country'
            name='country'
            required
            wrapClass={styles.selectWrap}
            className={styles.filterInput}
          >
            <option>Price: high to low</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </Select>
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
        </div>
      </div>
    </section>
  );
};

export default LandHome;
