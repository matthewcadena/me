'use client';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);  
    
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1.5,
        onUpdate: e => direction = e.direction * -1,
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent >= 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: xPercent});
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }


  return (
    <main className={styles.main}>
      <Image
      fill={true}
      src="/images/matt-jags-crop.jpg"
      alt="image"
      />

      <div className={styles.sliderContainer}>
        <div className={styles.slider} ref={slider}>
          <p ref={firstText}>Matt Cadena —</p>
          <p ref={secondText}>Matt Cadena —</p>
        </div>
      </div>
    </main>
  );
}
