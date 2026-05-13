import React from "react";
import { Search as SearchIcon } from "lucide-react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        placeholder="Search a album of your choice"
        className={styles.searchInput}
      />

      <button className={styles.searchButton}>
        <SearchIcon size={22} />
      </button>
    </div>
  );
}
