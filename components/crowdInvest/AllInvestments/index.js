import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/crowdInvestTab";
import Input from "../../ui/customInputWithIcon";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal/modalInvestment";
import Link from "next/link";
import { useRouter } from "next/router";

const AllInvestments = () => {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const applyHandler = () => {
    setShowModal(true);

    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

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
    <>
      <section className={styles.allInvestment}>
        <div className={styles.wrapper}>
          <div className={styles.investmentContent}>
            <CustomTabs
              activeTab={tabIndex}
              clicked={(index) => tabIndexHandler(index)}
              headers={tabHeaders}
            />

            <Input
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
            />
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
                  openModal={applyHandler}
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
            {tabIndex === 3 && (
              <div className={styles.grid}>
                <DashboardCard
                  key='10'
                  id='10'
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
                  key='23'
                  id='23'
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
                <DashboardCard
                  key='9'
                  id='9'
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
                  key='15'
                  id='15'
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
                  key='29'
                  id='29'
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
                  key='38'
                  id='38'
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
                  key='48'
                  id='48'
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
      {showModal && (
        <Modal
          // header='This is the modal header'
          bodyClass={styles.modalContent}
          click={() => {
            setShowModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          <div className={styles.gridWrapper}>
            <h3>Investment Overview</h3>
            <div className={styles.grid}>
              <div className={styles.left}>
                <div className={styles.leftWrapper}>
                  <div className={styles.leftContent}>
                    <img src='/images/investment-details-slide.png' alt='' />
                    <div className={styles.returns}>
                      <img src='/images/favorite-black-square.svg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.rightWrapper}>
                  <div className={styles.rightContent}>
                    <div className={styles.upDiv}>
                      <div className={styles.portValue}>
                        <div className={styles.portValueLeft}>
                          <p>Portfolio Value</p>
                          <h3>$9,000,000</h3>
                        </div>
                        <div className={styles.portValueRight}>
                          <p>Raised</p>
                          <h3>$2,000,000</h3>
                        </div>
                      </div>
                      <p>Portfolio</p>
                      <h3>Aklas Real Estate dual Investment</h3>
                      <p>California USA</p>
                    </div>
                    <div className={styles.downDiv}>
                      <p>Investment ID</p>
                      <h3>AgrpInvest/KoboTree/1kt980invp</h3>
                      <div className={styles.unitValue}>
                        <div>
                          <p>Unit Value</p>
                          <h3>$1000</h3>
                        </div>
                        <div>
                          <p>Expected returns</p>
                          <h3>30% in 9 Months</h3>
                        </div>
                      </div>
                      <p>Payout Type</p>
                      <h3>Capital + Profit at maturity date</h3>

                      <div className={styles.unitValue}>
                        <div>
                          <p>Start Date</p>
                          <h3>25-Feb-2022</h3>
                        </div>
                        <div>
                          <p>Maturity Date</p>
                          <h3>25-Nov-2022</h3>
                        </div>
                      </div>
                      <p>Investment Duration</p>
                      <h3>6 - 9 Months</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <Link
              href='/crowd-invest/order-confirmation'
            >
              <a className={`${styles.invesNowtBtn} btn-primary btn-large`}>
                Invest Now
              </a>
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AllInvestments;
