import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Dropdown from "../dropdown";
import AboutDrop from "./aboutus";
import ServicesDrop from "./services";
import IndustriesDrop from "./industries";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  const [showLang, setShowLang] = useState(false);
  const [about, openAbout] = useState(false);
  const [services, openServices] = useState(false);
  const [industries, openIndustries] = useState(false);

  const router = useRouter();

  useEffect(() => {
    openAbout(false);
    openServices(false);
    openIndustries(false);
  }, [router.pathname]);

  useEffect(() => {
    const hideLang = () => {
      setShowLang(false);
    };

    document.body.addEventListener("click", hideLang);

    return () => {
      document.body.removeEventListener("click", hideLang);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
      openServices(false);
      openIndustries(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={styles.navLinks}>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${about ? styles.boldText : ""} ${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
            onClick={() => {
              openAbout(!about);
              openServices(false);
              openIndustries(false);

              about ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>How it Works</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div className={`${styles.dropdownMenu} ${about ? styles.show : ""}`}>
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.about}`}>
                <AboutDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              services ? styles.boldText : ""
            } ${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
            onClick={() => {
              openServices(!services);
              openAbout(false);
              openIndustries(false);

              services ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>FAQs</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${services ? styles.show : ""}`}
          >
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.services}`}>
                <ServicesDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              industries ? styles.boldText : ""
            } ${
              isDrop ||
              bgChange ||
              router.pathname === "/contact-us" ||
              router.pathname === "/about-us" ||
              router.pathname === "/faq"
                ? styles.darkText
                : ""
            }`}
            onClick={() => {
              openIndustries(!industries);
              openServices(false);
              openAbout(false);

              industries ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>About Us</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              industries ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.industries}`}>
                <IndustriesDrop />
              </div>
            </div>
          </div>
        </li>

        <li>
          <ActiveLink
            name="Contact Us"
            href="/blogs"
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
          <Link href="/">
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
          <Link href="/">
            <a className="btn-primary btn-medium">Create an account</a>
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
