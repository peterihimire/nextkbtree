import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

// import Image from "next/image";

const Team = () => {
  return (
    <section className={styles.team}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.heading}>
            <h2>Our Team</h2>
            <p>Filter the best deals and proceed to checkout with confidence</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.teamCard}>
              <img src='/images/team-1.png' alt='' loading='lazy' />
              <h4>Sunday Falade</h4>
              <p>Company Partner</p>
            </div>
            <div className={styles.teamCard}>
              <img src='/images/team-2.png' alt='' loading='lazy' />
              <h4>Sunday Falade</h4>
              <p>Company Partner</p>
            </div>
            <div className={styles.teamCard}>
              <img src='/images/team-3.png' alt='' loading='lazy' />
              <h4>Sunday Falade</h4>
              <p>Company Partner</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Team;
