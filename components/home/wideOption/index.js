import React from "react";
import styles from "./styles.module.scss";

const WideOption = () => {
  return (
    <section className={styles.wide}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.left}`}>
          <img alt="" src="/images/macbook-pro.png" />
        </div>
        <div className={`${styles.right}`}>
          <h3>Wide Option of Real Estate Investments</h3>
          <p>
            The borrower makes their repayments according to the agreed
            repayment schedule while the investors can track all repayments on
            their personal portfolio page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WideOption;
