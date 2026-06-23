import styles from "./Footer.module.css";
import React from "react";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.containerList}>
        <li className={styles.listComponents}>
          <figure>
            <img src="assets/logo-verde.png" alt="logo 100 neura - terapia sem neura do seu jeito" />
          </figure>
        </li> <div className={styles.bar}></div>
        <li className={styles.listComponents}>

        </li>
        <div className={styles.bar}></div>
        <li className={styles.listComponents}>

        </li>
        <div className={styles.bar}></div>
        <li className={styles.listComponents}>

        </li>
      </ul>
    </footer>
  );
}