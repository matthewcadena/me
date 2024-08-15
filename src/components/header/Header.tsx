'use client';
import { AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Nav from './nav/Nav';
import { useState } from 'react';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>    
      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
          <AnimatePresence mode="wait">
            { isActive && <Nav />}
          </AnimatePresence>
      </div>
    </>
  )
}