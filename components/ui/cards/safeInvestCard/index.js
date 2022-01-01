import React from "react";
import styles from "./styles.module.scss";

const SafeInvestCard = ({ src, title, content }) => {
  return (
    <article className={styles.card}>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <p>{content}</p>
    </article>
  );
};

export default SafeInvestCard;
