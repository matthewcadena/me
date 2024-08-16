"use client";
import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Landing() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const backgroundImage = useRef(null);

  let xPercent = 0;
  let direction = 1;

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent >= 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.04 * direction;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=100px",
        scrub: 1,
      },
    });

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1.5,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    timeline.fromTo(
      backgroundImage.current,
      { clipPath: "inset(1%)" },
      { clipPath: "inset(0%)", duration: 1 },
      0
    );
  }, []);

  return (
    <main className={styles.main}>
      <Image
        fill={true}
        src="/images/matt-cmu-crop.jpg"
        alt="image"
        ref={backgroundImage}
        priority={true}
      />

      <div className={styles.sliderContainer}>
        <div className={styles.slider} ref={slider}>
          <p ref={firstText}>Matt Cadena — Matt Cadena —&nbsp; </p>
          <p ref={secondText}>Matt Cadena — Matt Cadena —&nbsp;</p>
        </div>
      </div>
    </main>
  );
}
