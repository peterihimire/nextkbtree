import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const TrustedBy = () => {
  return (
    <section className={styles.trustedBy}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.heading}>
          <h2>Trusted by Thousands of Happy Customer Worldwide</h2>
          <p>From startups to established brands, you'll be in good company.</p>
        </div>

        <div className={styles.carousel}>
          <Swiper
            // spaceBetween={30}
            // slidesPerView={4}
            breakpoints={{
              200: { slidesPerView: 1 },
              500: { slidesPerView: 1 },
              700: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              2500: { slidesPerView: 4 },
            }}
            spaceBetween={0}
            centeredSlides={true}
            loop
            pagination={{
              el: ".custom-pag1",
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '">' + "</span>";
              },
            }}
            className={`swiper-wrapper ${styles.slideWrapper}`}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* <Icon1 /> */}
                  <h3>Join Our Team</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    id consequat pellentesque volutpat dolor lorem maecenas
                    nullam lectus. Quis a eu, amet, adipiscing et at erat
                    aliquet.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/">
                    <span>SEARCH CLOUFIFT JOBS</span>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* <Icon1 /> */}
                  <h3>Join Our Team</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    id consequat pellentesque volutpat dolor lorem maecenas
                    nullam lectus. Quis a eu, amet, adipiscing et at erat
                    aliquet.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/">
                    <span>SEARCH CLOUFIFT JOBS</span>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* <Icon1 /> */}
                  <h3>Join Our Team</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    id consequat pellentesque volutpat dolor lorem maecenas
                    nullam lectus. Quis a eu, amet, adipiscing et at erat
                    aliquet.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/">
                    <span>SEARCH CLOUFIFT JOBS</span>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* <Icon1 /> */}
                  <h3>Join Our Team</h3>
                </div>
                <div className={styles.cardBody}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    id consequat pellentesque volutpat dolor lorem maecenas
                    nullam lectus. Quis a eu, amet, adipiscing et at erat
                    aliquet.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <a href="/">
                    <span>SEARCH CLOUFIFT JOBS</span>
                    <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="custom-pag1" style={{ marginTop: "40px" }}></div> */}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
