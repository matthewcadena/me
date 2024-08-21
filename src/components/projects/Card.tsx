import React from "react";
import styles from "./projects.module.css";

export default function Card({
  title,
  description,
  src,
  link,
  color,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}) {
  return <div style={{backgroundColor: color}} className={styles.cardContainer}>
    <div className={styles.card}>
      {title}
    </div>
  </div>;
}
