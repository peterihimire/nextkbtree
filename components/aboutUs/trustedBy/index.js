import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import StarUnfill from "../../../public/images/star-unfill.svg";
// import Image from "next/image";

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
            // centeredSlides={true}
            // slidesPerView={4}
            spaceBetween={50}
            breakpoints={{
              200: { slidesPerView: 1 },
              500: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              900: { slidesPerView: 2.5 },
              1200: { slidesPerView: 3.5 },
              2500: { slidesPerView: 4 },
            }}
            // loop
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
                  <p>4.5</p>
                  <img src="/images/star-fill.svg" alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p>
                    I had an awesome experience with carbon, very reliable n
                    trustworthy, infact d instalmental repayment is d tip of d
                    iceberg. I hereby recommend this LOAN APP among
                    apps...CARBON to all prospective borrower, u will never be
                    disappointed.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <img src="/images/image-round.svg" alt="" loading="lazy" />
                  <div className={styles.nameLocation}>
                    <h5>Lucky Onoriode</h5>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <p>4.5</p>
                  <img src="/images/star-fill.svg" alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p>
                    I had an awesome experience with carbon, very reliable n
                    trustworthy, infact d instalmental repayment is d tip of d
                    iceberg. I hereby recommend this LOAN APP among
                    apps...CARBON to all prospective borrower, u will never be
                    disappointed.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <img src="/images/image-round.svg" alt="" loading="lazy" />
                  <div className={styles.nameLocation}>
                    <h5>Pricilla Chan</h5>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <p>4.5</p>
                  <img src="/images/star-fill.svg" alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p>
                    I had an awesome experience with carbon, very reliable n
                    trustworthy, infact d instalmental repayment is d tip of d
                    iceberg. I hereby recommend this LOAN APP among
                    apps...CARBON to all prospective borrower, u will never be
                    disappointed.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <img src="/images/image-round.svg" alt="" loading="lazy" />
                  <div className={styles.nameLocation}>
                    <h5>Peter Pan</h5>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <p>4.5</p>
                  <img src="/images/star-fill.svg" alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p>
                    I had an awesome experience with carbon, very reliable n
                    trustworthy, infact d instalmental repayment is d tip of d
                    iceberg. I hereby recommend this LOAN APP among
                    apps...CARBON to all prospective borrower, u will never be
                    disappointed.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <img src="/images/image-round.svg" alt="" loading="lazy" />
                  <div className={styles.nameLocation}>
                    <h5>Obinna Anayo</h5>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <p>4.5</p>
                  <img src="/images/star-fill.svg" alt="" loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <p>
                    I had an awesome experience with carbon, very reliable n
                    trustworthy, infact d instalmental repayment is d tip of d
                    iceberg. I hereby recommend this LOAN APP among
                    apps...CARBON to all prospective borrower, u will never be
                    disappointed.
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <img src="/images/image-round.svg" alt="" loading="lazy" />
                  <div className={styles.nameLocation}>
                    <h5>Sunday Falade</h5>
                    <p>Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="custom-pag1" style={{ marginTop: "40px" }}></div> */}
        </div>

        <div className={styles.footing}>
          <div className={styles.starFooting}>
            <StarUnfill />
            <StarUnfill />
            <StarUnfill />
            <StarUnfill />
            <StarUnfill />
            <h5>+4.4</h5>
          </div>
          <p>
            Score based on over 78,000 reviews on Google Play Store and App
            Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
