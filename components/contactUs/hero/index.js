import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h2>Contact Us</h2>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
    </section>
  );
};

export default Hero;
