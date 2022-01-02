import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>FAQ</h2>
        <p>Frequently Asked Questions, answered.</p>
      </div>
    </section>
  );
};

export default Hero;
