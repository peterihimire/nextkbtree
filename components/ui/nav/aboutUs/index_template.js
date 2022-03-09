import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";
import isEmpty from "is-empty";

const AboutDropTemplate = ({ content }) => {
  return (
    <>
      <div className={styles.aboutLeft}>
        {content.map((sub_category, idx) => (
          // sub_category.status === "PUBLISHED" &&
          <div key={idx} className={styles.who}>
            <h3>{sub_category.name}</h3>
            <ul>
              {!isEmpty(sub_category.page) &&
                sub_category.page.map((page, idx) => (
                  <li key={idx}>
                    <ActiveLink name={page.title} href={`/${page.slug}`} />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.aboutRight}>
        <div className={styles.review}>
          <i className="fas fa-quote-left"></i>
          <p>
            We at Cloudfift understand the importance of accurate decision
            making in the intricate world of software design. Together, we help
            you make informed decisions — the ones that help you achieve your
            goals!
          </p>
        </div>

        <div className={styles.reviewDetails}>
          <div className={styles.reviewImg}>
            <img alt="" src="/images/about-drop.png" />
          </div>
          <div className={styles.reviewInfo}>
            <span>Lucky Onoriode,</span>
            <span>CEO, Cloudfift</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDropTemplate;
