import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <input
      type="search"
      placeholder="Search a song"   // <-- FIXED AS REQUIRED
      className={styles.searchInput}
      aria-label="search"
    />
  );
}
