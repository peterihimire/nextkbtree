import React from "react";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";

const HotInvestment = () => {
  return (
    <div className={styles.hotInvestment}>
      <div className={styles.wrapper}>
        <h3>New and Hot Investments</h3>
        <div className={styles.grid}>
          <DashboardCard
            key="1"
            id="1"
            src="/images/recommend-invest-img.png"
            alt="img hot"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
          <DashboardCard
            key="2"
            id="2"
            src="/images/recommend-invest-img.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
          <DashboardCard
            key="3"
            id="3"
            src="/images/recommend-invest-img.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
          <DashboardCard
            key="4"
            id="4"
            src="/images/recommend-invest-img.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
        </div>
      </div>
    </div>
  );
};

export default HotInvestment;
