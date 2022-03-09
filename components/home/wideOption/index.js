import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
// import Image from "next/image";

const WideOption = () => {
  return (
    <section className={styles.wide}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={`${styles.wrapper} wrapper`}>
          <div className={`${styles.left}`}>
            <img alt='' src='/images/macbook-pro.png' />
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
      </ScrollAnimation>
    </section>
  );
};

export default WideOption;
