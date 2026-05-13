import React from "react";
import { Search as SearchIcon } from "lucide-react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        placeholder="Search a album"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <SearchIcon size={18} />
      </button>
    </div>
  );
}