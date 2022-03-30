import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Dropdown from "../dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink2 from "../../../../hoc/activeLink2";
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

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions";

const Nav = ({ clicked, isDrop, isOpen, bgChange }) => {
  // const [showLang, setShowLang] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const crowdInvest = "/crowd-invest";
  const orderConfirmation = "/order-confirmation";

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
    <nav className={`${styles.nav}`} id='navbar'>
      <div className={styles.logo}>
        <Link href='/'>
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
          <ActiveLink2 href='/dashboard' linkClass={`${styles.dashLink}`}>
            <Dashboard />
            <span>Dashboard</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/crowd-invest' linkClass={`${styles.dashLink}`}>
            <CrowdInvest />
            <span>Crowd Invest</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2
            href='/long-hold-investment'
            linkClass={`${styles.dashLink}`}
          >
            <LongHold />
            <span>Long Hold Investment</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/favourite' linkClass={`${styles.dashLink}`}>
            <Favourite />
            <span>Favourite</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/wallet' linkClass={`${styles.dashLink}`}>
            <Wallet />
            <span>Wallet</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/my-portfolio' linkClass={`${styles.dashLink}`}>
            <Portfolio />
            <span>My Portfolio</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/referral' linkClass={`${styles.dashLink}`}>
            <Referral />
            <span>Referral</span>
          </ActiveLink2>
        </li>

        <li>
          <ActiveLink2 href='/setting' linkClass={`${styles.dashLink}`}>
            <Settings />
            <span>Settings</span>
          </ActiveLink2>
        </li>
      </ul>

      <Link href='/register-more'>
        <a>
          <div className={styles.attention}>
            <Attention /> <p>Tap to complete your profile setup</p>
          </div>
        </a>
      </Link>

      <div className={styles.navLogout}>
        <Logout />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(actions.removeCurrentUser());
            router.push("/login");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
