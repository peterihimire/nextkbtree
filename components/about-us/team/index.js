import React from "react";
import styles from "./styles.module.scss";

const Team = () => {
  return (
    <section className={styles.team}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.heading}>
          <h2>Our Team</h2>
          <p>Filter the best deals and proceed to checkout with confidence</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.teamCard}>
            <img src="/images/team-1.png" alt="" loading="lazy" />
            <h4>Sunday Falade</h4>
            <p>Company Partner</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/images/team-2.png" alt="" loading="lazy" />
            <h4>Sunday Falade</h4>
            <p>Company Partner</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/images/team-3.png" alt="" loading="lazy" />
            <h4>Sunday Falade</h4>
            <p>Company Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
