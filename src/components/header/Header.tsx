'use client';
import { AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Nav from './nav/Nav';
import { useState,} from 'react';
import { useAtom } from "jotai";
import { navActiveAtom } from "../../state/atoms";

export default function Header() {
  const [navActive, setNavActive] = useAtom(navActiveAtom);   

  return (
    <>    
      <div className={styles.header}>
        <div className={styles.buttonContainer}>
        <div onClick={() => {setNavActive(!navActive)}} className={styles.button}>
          <div className={`${styles.burger} ${navActive ? styles.burgerActive : ""}`}></div>
        </div>
        </div>
          <AnimatePresence mode="wait">
            { navActive && <Nav />}
          </AnimatePresence>
      </div>
    </>
  )
}