import React, { useState } from "react";
import styles from "./styles.module.scss";

const Accordion = () => {
  const [clicked, setClicked] = useState(0);
  // const router = useRouter();

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
        <ul className={styles.accordion}>
          <li>
            <button onClick={() => toggler(0)}>
              <div className={styles.headInfo}>
                <h4 className={styles.difficulty}>
                  {" "}
                  Frequency Asked Questions?
                </h4>
                <span className={styles.duration}>
                  40 Total Lessons, 5 Hours Video
                </span>
              </div>
              <div className={styles.rotate}>
                <i
                  className={`fas fa-chevron-down ${
                    clicked === 0 && "fa-rotate-180"
                  }`}
                ></i>
              </div>
            </button>

            <div
              className={`${styles.content} ${clicked === 0 && styles.show}`}
            >
              <p className={styles.subHead}>
                JavaScript is also used in environments that aren’t web-based,
                such as PDF documents, site-specific browsers, and desktop
                widgets. Newer and faster JavaScript virtual machines (VMs) and
                platforms built upon them have also increased the popularity of
                JavaScript for server-side web applications. On the client side,
                JavaScript has been traditionally implemented as an interpreted
                language, but more recent browsers perform just-in-time
                compilation.
              </p>
            </div>
          </li>

          <li>
            <button onClick={() => toggler(1)}>
              <div className={styles.headInfo}>
                <h4 className={styles.difficulty}>
                  {" "}
                  Frequency Asked Questions?
                </h4>
                <span className={styles.duration}>
                  40 Total Lessons, 5 Hours Video
                </span>
              </div>
              <div className={styles.rotate}>
                <i
                  className={`fas fa-chevron-down ${
                    clicked === 1 && "fa-rotate-180"
                  }`}
                ></i>
              </div>
            </button>

            <div
              className={`${styles.content} ${clicked === 1 && styles.show}`}
            >
             <p className={styles.subHead}>
                JavaScript is also used in environments that aren’t web-based,
                such as PDF documents, site-specific browsers, and desktop
                widgets. Newer and faster JavaScript virtual machines (VMs) and
                platforms built upon them have also increased the popularity of
                JavaScript for server-side web applications. On the client side,
                JavaScript has been traditionally implemented as an interpreted
                language, but more recent browsers perform just-in-time
                compilation.
              </p>
            </div>
          </li>

          <li>
            <button onClick={() => toggler(2)}>
              <div className={styles.headInfo}>
                <h4 className={styles.difficulty}>
                  {" "}
                  Frequency Asked Questions?
                </h4>
                <span className={styles.duration}>
                  40 Total Lessons, 5 Hours Video
                </span>
              </div>
              <div className={styles.rotate}>
                <i
                  className={`fas fa-chevron-down ${
                    clicked === 2 && "fa-rotate-180"
                  }`}
                ></i>
              </div>
            </button>

            <div
              className={`${styles.content} ${clicked === 2 && styles.show}`}
            >
              <p className={styles.subHead}>
                JavaScript is also used in environments that aren’t web-based,
                such as PDF documents, site-specific browsers, and desktop
                widgets. Newer and faster JavaScript virtual machines (VMs) and
                platforms built upon them have also increased the popularity of
                JavaScript for server-side web applications. On the client side,
                JavaScript has been traditionally implemented as an interpreted
                language, but more recent browsers perform just-in-time
                compilation.
              </p>
            </div>
          </li>

          <li>
            <button onClick={() => toggler(3)}>
              <div className={styles.headInfo}>
                <h4 className={styles.difficulty}>
                  {" "}
                  Frequency Asked Questions?
                </h4>
                <span className={styles.duration}>
                  40 Total Lessons, 5 Hours Video
                </span>
              </div>
              <div className={styles.rotate}>
                <i
                  className={`fas fa-chevron-down ${
                    clicked === 3 && "fa-rotate-180"
                  }`}
                ></i>
              </div>
            </button>

            <div
              className={`${styles.content} ${clicked === 3 && styles.show}`}
            >
              <p className={styles.subHead}>
                JavaScript is also used in environments that aren’t web-based,
                such as PDF documents, site-specific browsers, and desktop
                widgets. Newer and faster JavaScript virtual machines (VMs) and
                platforms built upon them have also increased the popularity of
                JavaScript for server-side web applications. On the client side,
                JavaScript has been traditionally implemented as an interpreted
                language, but more recent browsers perform just-in-time
                compilation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
