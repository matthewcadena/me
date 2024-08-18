"use client";
import { useRef, useLayoutEffect } from "react";
import styles from "./work.module.css";
import Image from "next/image";
import Experience from "./experience/Experience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Work() {
  gsap.registerPlugin(ScrollTrigger);

  const introImageRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useGSAP(() => {
    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top-=300px top",
        end: "+=800px",
        scrub: 1,
      },
    });

    const progressTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500px",
        scrub: 1,
        pin: true,
      },
    });

    introTimeline
      .from(titleRef.current, { y: +200 }, 0)
      .from(introImageRef.current, { y: +150, height: "250px" }, 0);

    progressTimeline
      .fromTo(
        progressBarRef.current,
        { width: "0%" },
        { width: "100%", duration: 1, ease: "none" }, 0
      );
    
  });


  return (
    <div className={styles.work} ref={containerRef}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/interns-cropped.jpg"}
          fill={true}
          alt="work-background-image"
        />
      </div>

      <div className={styles.workIntroContainer}>
        <div
          className={styles.workIntroImage}
          id="introImage"
          ref={introImageRef}
          data-scroll
          data-scroll-speed="0.3"
        >
          <Image
            src={"/images/marquee-stroll.jpg"}
            fill={true}
            alt="work-intro-image"
            priority={true}
          />
        </div>
        <div ref={titleRef} className={styles.workIntroTitleContainer}>
          <h1>Work Experience</h1>
        </div>
      </div>
      <div className={styles.progressBar} ref={progressBarRef}></div>
      <Experience />
    </div>
  );
}
