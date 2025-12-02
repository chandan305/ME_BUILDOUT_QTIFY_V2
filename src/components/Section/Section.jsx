import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ title, fetchData }) {
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setItems(res));
  }, [fetchData]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Carousel
          data={items}
          renderItem={(item) => <Card data={item} />}
        />
      )}
    </div>
  );
}
