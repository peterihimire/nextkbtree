import React from "react";
import styles from "./styles.module.scss";
// import Image from "next/image";
import Accomplishment from "../accomplishment";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const HomeHero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className={styles.hero}>
      {/* <div className={`${styles.wrapper} wrapper`}>
        <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
        <p>
          Leveraging on tusted Gateway to Financial Freedom. Fast and flexible
          finance to great, stable returns for investors. . Get started quickly
          and make your way.
        </p>
        <a href='/register' className='btn-primary btn-large'>
          Get Started
        </a>
      </div>
      <div className={` wrapper `}>
        <div className={styles.accomplishment}>
          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/investors.svg' alt='' />
            </div>
            <div>
              <h4>150k+</h4>
              <p>Active Investors</p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/funded.svg' alt='' />
            </div>
            <div>
              <h4>$5.1bn+</h4>
              <p>Property Funded </p>
            </div>
          </div>

          <div className={styles.singleAccomplishment}>
            <div className={styles.icon}>
              <img src='/images/earned.svg' alt='' />
            </div>
            <div>
              <h4>$100M+</h4>
              <p>Earned by Investors</p>
            </div>
          </div>
        </div>
      </div> */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        className={`wrapper video ${styles.wrapper}`}
        loop
        autoHeight={true}
        centeredSlides={true}
        autoplay={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className={styles.slideItem}>
            <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
            <p>
              Leveraging on tusted Gateway to Financial Freedom. Fast and
              flexible finance to great, stable returns for investors. . Get
              started quickly and make your way.
            </p>
            <a href='/register' className='btn-primary btn-large'>
              Get Started
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem}>
            <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
            <p>
              Leveraging on tusted Gateway to Financial Freedom. Fast and
              flexible finance to great, stable returns for investors. . Get
              started quickly and make your way.
            </p>
            <a href='/register' className='btn-primary btn-large'>
              Get Started
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem}>
            <h1>Crowdfunding Real Estate Investment in Diaspora</h1>
            <p>
              Leveraging on tusted Gateway to Financial Freedom. Fast and
              flexible finance to great, stable returns for investors. . Get
              started quickly and make your way.
            </p>
            <a href='/register' className='btn-primary btn-large'>
              Get Started
            </a>
          </div>
        </SwiperSlide>
      </Swiper>{" "}
      <Accomplishment />
      {/* <ScrollAnimation
        animateIn='fadeIn'
        duration={0.8}
        delay={400}
        animateOnce={true}
      >
        <div className={` wrapper `}>
          <div className={styles.accomplishment}>
            <div className={styles.singleAccomplishment}>
              <div className={styles.icon}>
                <img src='/images/investors.svg' alt='' />
              </div>
              <div>
                <h4>150k+</h4>
                <p>Active Investors</p>
              </div>
            </div>

            <div className={styles.singleAccomplishment}>
              <div className={styles.icon}>
                <img src='/images/funded.svg' alt='' />
              </div>
              <div>
                <h4>$5.1bn+</h4>
                <p>Property Funded </p>
              </div>
            </div>

            <div className={styles.singleAccomplishment}>
              <div className={styles.icon}>
                <img src='/images/earned.svg' alt='' />
              </div>
              <div>
                <h4>$100M+</h4>
                <p>Earned by Investors</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation> */}
    </section>
  );
};

export default HomeHero;
