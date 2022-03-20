import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";
import AboutDrop from "./aboutUs";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);
  const [about, openAbout] = useState(false);

  const router = useRouter();

  useEffect(() => {
    openAbout(false);
  }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id='navbar'>
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink
            name='How It Works'
            href='/'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        <li>
          <ActiveLink
            name='FAQs'
            href='/faq'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>

        {/* <li>
          <ActiveLink
            name="About Us"
            href="/about-us"
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li> */}

        {/* <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${about ? styles.boldText : ""} ${
              isDrop ? styles.darkText : ""
            }`}
            // onClick={() => {
            //   openAbout(!about);
            //   about ? clicked(false) : clicked(true);
            //   document.querySelector("nav").classList.toggle(styles.hidden);
            // }}
            onMouseEnter={() => {
              openAbout(!about);

              about ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
            
          >
            <span>About Us</span>
            <i className='far fa-chevron-down'></i>
          </button>
          <div className={`${styles.dropdownMenu} ${about ? styles.show : ""}`}>
            <div
              className={styles.dropdownContainer}
              onMouseLeave={() => {
                openAbout(!about);

                about ? clicked(false) : clicked(true);
                document.querySelector("nav").classList.toggle(styles.hidden);
              }}
            >
              <div className={`${styles.dropdownWrapper} ${styles.about}`}>
                <AboutDrop />
              </div>
            </div>
          </div>
        </li> */}

        <li className={styles.hasDrop}>
          <button
            className={styles.hasDropBtn}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <span>About Us</span>
            <i className='far fa-chevron-down'></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${styles.dropResources} ${
              about ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <ul className={styles.dropdownWrapper}>
                <li>
                  <Link href='/about-us/our-mission'>
                    <a>
                      <div className={styles.dropIcon}></div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>Our Mission</span>
                        <span className={styles.dropDesc}>
                          Quickly and simply map your company's cloud talent.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href='/about-us/our-vision'>
                    <div className={styles.dropIcon}></div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Our Vision</span>
                      <span className={styles.dropDesc}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href='/about-us/case-studies'>
                    <a>
                      <div className={styles.dropIcon}></div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>
                          Case Studies
                        </span>
                        <span className={styles.dropDesc}>
                          Simulators of real-world cloud difficulties are easily
                          accessible.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href='/about-us/blog'>
                    <div className={styles.dropIcon}></div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Blog</span>
                      <span className={styles.dropDesc}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href='/about-us/who-we-are'>
                    <a>
                      <div className={styles.dropIcon}></div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>Who We Are</span>
                        <span className={styles.dropDesc}>
                          Who KoboTree are as a Real Estate Agent
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href='/about-us/ebooks'>
                    <div className={styles.dropIcon}></div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Ebooks</span>
                      <span className={styles.dropDesc}>
                        Try our risk-free cloud sandboxes for AWS, GCP and Azure
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <ActiveLink
            name='Contact Us'
            href='/contact-us'
            linkClass={`${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.login}>
          <Link href='/login'>
            <a
              className={`${
                isOpen ||
                bgChange ||
                router.pathname === "/contact-us" ||
                router.pathname === "/about-us" ||
                router.pathname === "/faq"
                  ? "btn-transparent-dark btn-login"
                  : "btn-transparent btn-login"
              }`}
            >
              Log In
            </a>
          </Link>
        </div>
        <div className={styles.create}>
          <Link href='/register'>
            <a className='btn-primary btn-medium'>Create an account</a>
          </Link>
        </div>
        {/* <div className={styles.searchBtn}>
          <button className={`${isDrop ? styles.darkText : ""}`}>
            <i className="far fa-search"></i>
          </button>
        </div> */}
        {/* <Dropdown
          btnText="EN"
          isDrop={isDrop}
          show={showLang}
          clicked={(e) => {
            e.stopPropagation();

            setShowLang(!showLang);
          }}
        ></Dropdown> */}
      </div>
    </nav>
  );
};

export default Nav;
