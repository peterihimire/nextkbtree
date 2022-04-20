import React, { useState } from "react";
import styles from "./styles.module.scss";
import ArrowUp from "/public/images/arrow-up.svg";
import ArrowDown from "/public/images/arrow-dowm.svg";
import ScrollAnimation from "react-animate-on-scroll";

const Accordion = () => {
  const [clicked, setClicked] = useState(0);

  const toggler = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <section className={styles.accord}>
      <div className={`${styles.wrapper} wrapper`}>
        <ScrollAnimation
          animateIn='fadeIn'
          duration={0.8}
          delay={400}
          animateOnce={true}
        >
          <ul className={styles.accordion}>
            <li>
              <button onClick={() => toggler(0)}>
                <div className={styles.headInfo}>
                  <h4>Frequency Asked Questions?</h4>
                </div>
                <div className={styles.rotate}>
                  {/* <i
                  className={`fas fa-caret-down ${
                    clicked === 0 && "fa-rotate-180"
                  }`}
                ></i> */}
                  {clicked === 0 ? <ArrowUp /> : <ArrowDown />}
                </div>
              </button>

              <div
                className={`${styles.content} ${clicked === 0 && styles.show}`}
              >
                <p className={styles.subHead}>
                  JavaScript is also used in environments that aren’t web-based,
                  such as PDF documents, site-specific browsers, and desktop
                  widgets. Newer and faster JavaScript virtual machines (VMs)
                  and platforms built upon them have also increased the
                  popularity of JavaScript for server-side web applications. On
                  the client side, JavaScript has been traditionally implemented
                  as an interpreted language, but more recent browsers perform
                  just-in-time compilation.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(1)}>
                <div className={styles.headInfo}>
                  <h4 className={styles.difficulty}>
                    Frequency Asked Questions?
                  </h4>
                </div>
                <div className={styles.rotate}>
                  {clicked === 1 ? <ArrowUp /> : <ArrowDown />}
                </div>
              </button>

              <div
                className={`${styles.content} ${clicked === 1 && styles.show}`}
              >
                <p className={styles.subHead}>
                  JavaScript is also used in environments that aren’t web-based,
                  such as PDF documents, site-specific browsers, and desktop
                  widgets. Newer and faster JavaScript virtual machines (VMs)
                  and platforms built upon them have also increased the
                  popularity of JavaScript for server-side web applications. On
                  the client side, JavaScript has been traditionally implemented
                  as an interpreted language, but more recent browsers perform
                  just-in-time compilation.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(2)}>
                <div className={styles.headInfo}>
                  <h4 className={styles.difficulty}>
                    Frequency Asked Questions?
                  </h4>
                </div>
                <div className={styles.rotate}>
                  {clicked === 2 ? <ArrowUp /> : <ArrowDown />}
                </div>
              </button>

              <div
                className={`${styles.content} ${clicked === 2 && styles.show}`}
              >
                <p className={styles.subHead}>
                  JavaScript is also used in environments that aren’t web-based,
                  such as PDF documents, site-specific browsers, and desktop
                  widgets. Newer and faster JavaScript virtual machines (VMs)
                  and platforms built upon them have also increased the
                  popularity of JavaScript for server-side web applications. On
                  the client side, JavaScript has been traditionally implemented
                  as an interpreted language, but more recent browsers perform
                  just-in-time compilation.
                </p>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(3)}>
                <div className={styles.headInfo}>
                  <h4 className={styles.difficulty}>
                    Frequency Asked Questions?
                  </h4>
                </div>
                <div className={styles.rotate}>
                  {clicked === 3 ? (
                    <img src='/images/arrow-up.svg' alt='' />
                  ) : (
                    <img src='/images/arrow-dowm.svg' alt='' />
                  )}
                </div>
              </button>

              <div
                className={`${styles.content} ${clicked === 3 && styles.show}`}
              >
                <p className={styles.subHead}>
                  JavaScript is also used in environments that aren’t web-based,
                  such as PDF documents, site-specific browsers, and desktop
                  widgets. Newer and faster JavaScript virtual machines (VMs)
                  and platforms built upon them have also increased the
                  popularity of JavaScript for server-side web applications. On
                  the client side, JavaScript has been traditionally implemented
                  as an interpreted language, but more recent browsers perform
                  just-in-time compilation.
                </p>
              </div>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Accordion;
