import React from "react";
import styles from "./styles.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
        <p>
          Leveraging on tusted Gateway to Financial Freedom. Fast and flexible
          finance to great, stable returns for investors. . Get started quickly
          and make your way.
        </p>
        <a href="/" className="btn-primary btn-large">
          Get Started
        </a>
      </div>
      <div className={` wrapper `}>
        <div className={styles.accomplishment}>
          <div className={styles.singleAccomplishment}>
            <h4>150k+</h4>
            <p>Active Investors</p>
          </div>

          <div className={styles.singleAccomplishment}>
            <h4>150k+</h4>
            <p>Active Investors</p>
          </div>

          <div className={styles.singleAccomplishment}>
            <h4>150k+</h4>
            <p>Active Investors</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.buttonGroup}>
        <button>01</button>
        <button>02</button>
        <button>03</button>
      </div> */}
    </section>
  );
};

export default HomeHero;
