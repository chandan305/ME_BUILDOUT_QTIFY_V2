import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.imageContent}>
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
}
