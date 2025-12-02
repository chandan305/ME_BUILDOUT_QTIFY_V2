import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img
        src={data.image}
        alt={data.title}
        className={styles.albumImage}
      />
      <div className={styles.cardBottom}>
        <Chip
          label={`${data.follows} Followers`}
          size="small"
          className={styles.chip}
        />
        <div className={styles.albumTitle}>{data.title}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  data: {
    image: "https://via.placeholder.com/150",
    follows: 100,
    title: "Sample Album",
  },
};

export default Card;
