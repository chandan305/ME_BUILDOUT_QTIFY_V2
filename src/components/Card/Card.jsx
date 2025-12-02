import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={data.image} alt={data.title} className={styles.albumImage} />

        {/* Followers badge inside card */}
        <div className={styles.followBadge}>
          {data.follows} Follows
        </div>
      </div>

      {/* Title under the card (outside) */}
      <div className={styles.albumTitle}>{data.title}</div>
    </div>
  );
};

export default Card;

