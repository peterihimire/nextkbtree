import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../../hoc/activeLink2";
import Logo from "../../../../public/images/logo-light.svg";
import LogoDark from "../../../../public/images/logo-dark.svg";
import Dashboard from "../../../../public/images/dashboardd.svg";

import CrowdInvest from "../../../../public/images/crowd-invest.svg";
import LongHold from "../../../../public/images/long-hold.svg";
import Wallet from "../../../../public/images/wallet.svg";
import Portfolio from "../../../../public/images/portfolio.svg";
import Favourite from "../../../../public/images/favourite.svg";
import Referral from "../../../../public/images/referral.svg";
import Settings from "../../../../public/images/settings.svg";
import Attention from "../../../../public/images/attention.svg";
import Logout from "../../../../public/images/logoutt.svg";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   openAbout(false);
  //   openServices(false);
  //   openIndustries(false);
  // }, [router.pathname]);

  // useEffect(() => {
  //   const hideLang = () => {
  //     setShowLang(false);
  //   };

  //   document.body.addEventListener("click", hideLang);

  //   return () => {
  //     document.body.removeEventListener("click", hideLang);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isOpen) {
  //     openAbout(false);
  //     openServices(false);
  //     openIndustries(false);
  //   }
  // }, [isOpen]);

  return (
    // <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
    <nav className={`${styles.nav}`} id="navbar">
      <div className={styles.logo}>
        <Link href="/">
          <a
          // className={`${isDropOpen ? styles.lightLogo : ""}`}
          >
            {bgChange ||
            isOpen ||
            router.pathname === "/contact-us" ||
            router.pathname === "/about-us" ||
            router.pathname === "/faq" ? (
              <LogoDark />
            ) : (
              <Logo />
            )}
          </a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Dashboard />
          <ActiveLink
            name="Dashboard"
            href="/dashboard"
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
          <CrowdInvest />
          <ActiveLink
            name="Crowd Invest"
            href="/crowd-invest"
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
          <LongHold />
          <ActiveLink
            name="Long Hold Investment"
            href="/long-hold-investment"
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
          <Favourite />
          <ActiveLink
            name="Favourite"
            href="/favourite"
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
          <Wallet />
          <ActiveLink
            name="Wallet"
            href="/wallet"
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
          <Portfolio />
          <ActiveLink
            name="My Portfolio"
            href="/my-portfolio"
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
          <Referral />
          <ActiveLink
            name="Referral"
            href="/referral"
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
          <Settings />
          <ActiveLink
            name="Settings"
            href="/settings"
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

      <div className={styles.attention}>
        <Attention /> <p>Tap to complete your profile setup</p>
      </div>
      <div className={styles.navLogout}>
        <Logout />
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Nav;
