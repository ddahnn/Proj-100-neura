import styles from "./Footer.module.css";
import React from "react";
import { SocialList } from "../SocialList/SocialList";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.containerList}>
        <li className={styles.listComponents}>
          <figure>
            <a href="/pages/Home" className={styles.logoLink}>
              <img src="assets/logo-verde.png" alt="logo 100 neura - terapia sem neura do seu jeito" />
            </a>
          </figure>
        </li>
        <div className={styles.bar}></div>
        <li className={styles.listComponents}>
          <SocialList />
        </li>

        <div className={styles.bar}>

        </div>

        <li className={styles.listComponents}>
          <nav className={styles.footerNav}>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">Sou terapeuta</a></li>
              <li><a href="#">Busco Terapia</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </li>

        <div className={styles.bar}>

        </div>
        
        <li className={styles.listComponents}>
          <p className={styles.copyright}>
            &copy; 2024 100 Neura. Todos os direitos reservados.
          </p>
        </li>
      </ul>
    </footer>
  );
}