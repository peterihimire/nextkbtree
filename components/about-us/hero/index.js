import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Who we are</h2>
        <p>Money grow on Trees</p>
      </div>
    </section>
  );
};

export default Hero;
