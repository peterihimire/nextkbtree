import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
// import Image from "next/image";

const HowWorks = () => {
  return (
    <section className={styles.how}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={0.8}
          delay={400}
          animateOnce={true}
        >
          <div className={styles.heading}>
            <h2>You're In Safe Hands.</h2>
            <p>We work with renowned and trusted brands.</p>
          </div>

          <div className={styles.grid}>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
            <article className={styles.card}>
              <img src='/images/one.svg' alt='' />
              <h4>Create an account</h4>
              <p>
                Create, execute, and fund your estate plan specific to your
                needsCreate, execute, and fund your estate plan specific to your
                needs
              </p>
            </article>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowWorks;
