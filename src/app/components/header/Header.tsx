'use client';
import styles from './style.module.css';
import Nav from './nav/Nav';
import { useState } from 'react';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          { isActive && <Nav />}
        </div>
      </div>
    </>
  )
}