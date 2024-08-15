'use client';
import { AnimatePresence } from 'framer-motion';
import styles from './header.module.css';
import Nav from './nav/Nav';
import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
      trigger: document.documentElement,
      start: "top",
      end: "+=100px",
      scrub: 1,
      markers: true,
      },
    });

    timeline.fromTo(
      burger.current,
      { width: "80px", height: "80px"},
      { width: "80px", height: "80px"}
    );

  }, []);
    

  return (
    <>    
      <div className={styles.header}>
        <div className={styles.buttonContainer}>
        <div ref={burger} onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
        </div>
          <AnimatePresence mode="wait">
            { isActive && <Nav />}
          </AnimatePresence>
      </div>
    </>
  )
}