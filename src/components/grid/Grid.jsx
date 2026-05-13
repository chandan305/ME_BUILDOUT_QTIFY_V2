import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Grid.module.css";

const Grid = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Grid;