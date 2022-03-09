import React from "react";
import styles from "./styles.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

// import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className={styles.download}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={0.8}
          delay={400}
          animateOnce={true}
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <h3>
                Download App to enjoy <span> Real Estate Investment</span> in
                Diaspora
              </h3>
              <p>Download Now</p>
              <div className={styles.appDownload}>
                <div className={styles.storeIcon}>
                  <img
                    alt=''
                    loading='lazy'
                    src='/images/apple-store-color.svg'
                  />
                </div>
                <div className={styles.storeIcon}>
                  <img
                    alt=''
                    loading='lazy'
                    src='/images/google-store-color.svg'
                  />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src='/images/galaxy-note20-half.svg' alt='' loading='lazy' />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DownloadApp;
