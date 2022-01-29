import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/longHoldTab";
import Select from "../../ui/customSelect";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";

const LongHold = () => {
  return (
    <section className={styles.allInvestment}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img src='/images/investment-details-slide.png' alt='' />
            <h3>Property Description</h3>
            <p>
              This 750+ acre beauty is located in the heart of Lake County with
              outstanding views, tree lined acres, grape vineyard and gorgeous
              rolling valley hills. This wine country oasis sits in the Clear
              Lake AVA and has frontage on State Hwy 53. It comes with a
              sophisticated labyrinth of gravel roads that allows access to the
              majority of the property and offers a buyer a tremendous potential
              to build a premier brand winery, tasting room, wedding venue,
              events and agricultural retail if desired. The property comes with
              a proven track record of producing some of the best fruit in Lake
              County since it has began its operation in 2006. With over 190
              acres of planted vineyards, this property contains 5 separate and
              distinct varietals of grapes. There are an additional 166 + acres
              of plantable land for additional vineyard to be added to the
              existing one if wanted. Then you have over 400 + surplus acres to
              improve as you wish with buildings, vineyard support, potential
              winery, on site residence and even a tasting room etc. There is a
              30 acre-foot reservoir on the property working in conjunction with
              six (6) wells. Overhead and underground electric is developed to
              portions of the property and to some of the wells. Private guided
              tours of the property are available. Limitless possibilities!
            </p>

            <h3>Location</h3>
            <p>895 Highway 53, Clearlake, California 95422, USA</p>

            <img src='/images/investment-map.png' alt='' />

          </div>
          <div className={styles.right}>
            <h1>This is the right side</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongHold;
