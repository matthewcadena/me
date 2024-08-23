import React from "react";
import Content from "./Content";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <Content />
        </div>
      </div>
    </div>
  );
}
