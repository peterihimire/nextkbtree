import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";

const CurateArticle = () => {
  return (
    <section className={styles.curate}>
      <div className={`${styles.wrapper} wrapper`}>
        <h3>
          we curate articles that helps you make better investment decisions
        </h3>
        <p>
          Share your email to stay updated on helpful articles about Real estate
          investments.
        </p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>

          <button type="submit" className="btn-curate btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default CurateArticle;
