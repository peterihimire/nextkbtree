import React from "react";
import styles from "./styles.module.scss";

const Figures = () => {
  return (
    <section className={styles.figures}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.accomplishment}>
          <div className={styles.singleAccomplishment}>
            <div>
              <h4>150k+</h4>
              <p>Active Investors</p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div>
              <h4>$5.1bn+</h4>
              <p>Property Funded </p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div>
              <h4>$100M+</h4>
              <p>Net Dividends Earned by Investors</p>
            </div>
          </div>
        </div>
        <span>Figures as of 23/October/2022.</span>
      </div>
    </section>
  );
};

export default Figures;
