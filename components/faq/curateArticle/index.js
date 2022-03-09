import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import ScrollAnimation from "react-animate-on-scroll";

const CurateArticle = () => {
  return (
    <section className={styles.curate}>
      <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={`${styles.wrapper} wrapper`}>
          <h3>
            we curate articles that helps you make better investment decisions
          </h3>
          <p>
            Share your email to stay updated on helpful articles about Real
            estate investments.
          </p>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='Your email'
              />
            </div>

            <button type='submit' className='btn-curate btn-primary'>
              Send
            </button>
          </form>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CurateArticle;
