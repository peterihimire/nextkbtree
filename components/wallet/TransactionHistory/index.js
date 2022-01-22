import React, { useState } from "react";

import styles from "./styles.module.scss";

const TransactionHistory = () => {
  // Example of a data array that
  // you might receive from an API
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  return (
    <section className={styles.transactionHistory}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Transaction History</h3>
          <table>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
