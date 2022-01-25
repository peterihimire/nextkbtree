import React from "react";
import styles from "./styles.module.scss";

const CustomTabs = ({
  children,
  activeTab,
  clicked,
  headers,
  headersSpaced,
  dot,
  icon,
}) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        <ul
          className={`hide-scrollbar ${styles.tabsHeaderList} ${
            headersSpaced ? styles.horizontalPadding : ""
          }`}
        >
          {headers.map((item) => {
            return (
              <li
                onClick={() => clicked(item.id)}
                key={item.id}
                className={`${activeTab === item.id ? styles.active : ""}`}
              >
                <button onClick={() => clicked(item.id)}>
                  {dot && <span className={styles.dot}></span>}
                  {icon && <img src={item.icon} alt='' />}
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default CustomTabs;
