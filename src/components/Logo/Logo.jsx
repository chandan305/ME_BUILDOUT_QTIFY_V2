import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="QTify Logo" className={styles.logo} />
    </div>
  );
}

