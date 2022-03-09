import React from "react";
import styles from "./styles.module.scss";
import Aramex from "../../../public/images/aramex.svg";
import SafeInvestCard from "../../ui/cards/safeInvestCard";
import ScrollAnimation from "react-animate-on-scroll";

const SafeInvesting = () => {
  return (
    <section className={styles.safeInvesting}>
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

          <div className={styles.logos}>
            <Aramex className={styles.logo} />
            <Aramex className={styles.logo} />
            <Aramex className={styles.logo} />
            <Aramex className={styles.logo} />
            <Aramex className={styles.logo} />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={0.8}
          delay={400}
          animateOnce={true}
        >
          <div className={styles.heading}>
            <h2>Investing with KoboTree</h2>
            <p>
              Harness the power of technology and be part of a more rewarding
              financial era
            </p>
          </div>

          <div className={styles.grid}>
            <SafeInvestCard
              src='/images/umbrella-money.svg'
              title='Select your Investment'
              content='   Platform that allows you invest securely, safely with guarantee to
              their investment.'
            />
            <SafeInvestCard
              src='/images/umbrella-money.svg'
              title='Grow your financies'
              content='   Platform that allows you invest securely, safely with guarantee to
              their investment.'
            />
            <SafeInvestCard
              src='/images/umbrella-money.svg'
              title='Earn Internationally'
              content='   Platform that allows you invest securely, safely with guarantee to
              their investment.'
            />
            <SafeInvestCard
              src='/images/umbrella-money.svg'
              title='High yield Returns'
              content='   Platform that allows you invest securely, safely with guarantee to
              their investment.'
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SafeInvesting;
