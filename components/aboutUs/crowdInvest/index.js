import React from "react";
import styles from "./styles.module.scss";
import BrokenRing1 from "../../../public/images/broken-ring-1.svg";
import BrokenRing2 from "../../../public/images/broken-ring-2.svg";
import BrokenRing3 from "../../../public/images/broken-ring-3.svg";
import BrokenRing4 from "../../../public/images/broken-ring-4.svg";
import ScrollAnimation from "react-animate-on-scroll";
// import Image from "next/image";

const CrowdInvest = () => {
  return (
    <section className={styles.crowdinvest}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.heading}>
          <h3>A Crowdfunding Investment Platform that works as hard </h3>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h4>Crowdfunding Investment Platform that works as hard</h4>
            <p>
              Invest and manage your portfolio through our easy-to-use website
              and mobile app. Track your performance and watch as properties
              across the country are acquired, improved, and operated via
              dynamic asset updates.
            </p>
          </div>

          <div className={styles.right}>
            <img src='/images/galaxy-note20-full.svg' alt='' loading='lazy' />
          </div>
        </div>

        <div className={styles.rightSkills}>
          <BrokenRing1 className={styles.ringOne} />
          <BrokenRing2 className={styles.ringTwo} />
          <BrokenRing3 className={styles.ringThree} />
          <BrokenRing4 className={styles.ringFour} />

          <ScrollAnimation
            animateIn='fadeIn'
            duration={0.8}
            delay={400}
            animateOnce={true}
          >
            <div className={styles.head}>
              <h3>
                The right skills wielded by the right people to make anything
                possible.
              </h3>
              <p>
                Filter the best deals and proceed to checkout with confidence
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    
    </section>
  );
};

export default CrowdInvest;
