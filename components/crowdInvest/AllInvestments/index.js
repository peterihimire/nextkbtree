import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/crowdInvestTab";
import Input from "../../ui/customInputWithIcon";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal/modalInvestment";

const AllInvestments = () => {
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
          <div className={styles.grid}>
            <div className={styles.left}>
              <div className={styles.leftWrapper}>
                <div className={styles.leftContent}>
                  <img src='/images/investment-details-slide.png' alt='' />
                  <h3>Property Description</h3>
                  <p>
                    This 750+ acre beauty is located in the heart of Lake County
                    with outstanding views, tree lined acres, grape vineyard and
                    gorgeous rolling valley hills. This wine country oasis sits
                    in the Clear Lake AVA and has frontage on State Hwy 53. It
                    comes with a sophisticated labyrinth of gravel roads that
                    allows access to the majority of the property and offers a
                    buyer a tremendous potential to build a premier brand
                    winery, tasting room, wedding venue, events and agricultural
                    retail if desired. The property comes with a proven track
                    record of producing some of the best fruit in Lake County
                    since it has began its operation in 2006. With over 190
                    acres of planted vineyards, this property contains 5
                    separate and distinct varietals of grapes. There are an
                    additional 166 + acres of plantable land for additional
                    vineyard to be added to the existing one if wanted. Then you
                    have over 400 + surplus acres to improve as you wish with
                    buildings, vineyard support, potential winery, on site
                    residence and even a tasting room etc. There is a 30
                    acre-foot reservoir on the property working in conjunction
                    with six (6) wells. Overhead and underground electric is
                    developed to portions of the property and to some of the
                    wells. Private guided tours of the property are available.
                    Limitless possibilities!
                  </p>

                  <h3>Location</h3>
                  <p className={styles.address}>
                    895 Highway 53, Clearlake, California 95422, USA
                  </p>

                  <img src='/images/investment-map.png' alt='' />

                  <h4>Optional</h4>
                  <p>
                    We can buy real estate property in your company name in the
                    U.S Corporate Registration (State of Delaware) - We can help
                    you register a corporation and purchase the Real Estate
                    property in your corporation name. State of Delaware offers
                    anonymity, privacy and tax haven for business, it's home to
                    70% of fortune 500 companies in the world. America is open
                    to everyone, take advantage today!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightWrapper}>
                <div className={styles.rightContent}>
                  <div className={styles.rightHeader}>
                    <div className={styles.headerLeft}>
                      <p>Property Value</p>
                      <h3>$150,000,000</h3>
                    </div>
                    <div className={styles.headerRight}>
                      <span>
                        <img src='/images/favorite-black.svg' alt='' />
                      </span>
                      <span>
                        <img src='/images/forward-black.svg' alt='' />
                      </span>
                    </div>
                  </div>
                  <div className={styles.headerAddress}>
                    <h3>Aklas Real Estate dual Investment</h3>
                    <p>
                      217 West 57th Street, 127/128, Central Park Tower, Midtown
                      ...
                    </p>
                  </div>

                  <ul className={styles.investmentOverview}>
                    <li>
                      <p>Closing cost:</p>
                      <span>$150,000,000</span>
                    </li>
                    <li>
                      <p>Deeds transfer:</p>
                      <span>$1500</span>
                    </li>
                    <li>
                      <p>Mailing of document:</p>
                      <span>$1,000</span>
                    </li>
                    <li>
                      <p>Temporary fencing:</p>
                      <span>$5,000</span>
                    </li>
                  </ul>

                  <div className={styles.check}>
                    <label className={`${styles.labelCheck} `}>
                      <input
                        id='check'
                        type='checkbox'
                        // checked={isChecked}
                        // onChange={handleOnChange}
                      />
                      <span>I want to buy with my company name (optional)</span>
                    </label>

                    <label className={`${styles.labelCheck} `}>
                      <input
                        id='check'
                        type='checkbox'
                        // checked={isChecked2}
                        // onChange={handleOnChange2}
                      />
                      <span>
                        I want to register a new company name (optional)
                      </span>
                    </label>
                  </div>

                  <button className={`btn-medium btn-block ${styles.btnGreen}`}>
                    Buy this property
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modalFooter} >

          </div>
        </Modal>
      )}
    </>
  );
};

export default AllInvestments;
