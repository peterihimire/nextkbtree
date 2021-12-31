import React from "react";
import styles from "./styles.module.scss";

const SafeInvestCard = ({ src, title, content }) => {
  return (
    <article className={styles.card}>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <p>{content}</p>
    </article>
    // <Link
    //   href={{
    //     pathname: `/careers/${id}`,
    //     query: { id },
    //   }}
    // >
    //   <a className={styles.vacancyLink}>
    //     <div className={styles.card}>
    //       <div className={styles.cardHeader}>
    //         <span className={styles.tag}>{tag}</span>
    //       </div>
    //       <div className={styles.cardBody}>
    //         <h3>{title}</h3>
    //         <p>
    //           <i className="fal fa-map-marker-alt"></i>{" "}
    //           <span>
    //             {state}. {country}. {type}
    //           </span>
    //         </p>
    //       </div>
    //       <div className={styles.cardFooter}>
    //         <span></span>
    //         <p>{category}</p>
    //       </div>
    //     </div>
    //   </a>
    // </Link>
  );
};

export default SafeInvestCard;
