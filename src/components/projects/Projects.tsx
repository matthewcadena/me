"use client";
import { useRef } from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCards from "./ProjectCards";

export default function Projects() {
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

    progressTimeline.fromTo(
      progressBarRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "none" },
      0
    );
  });

  return (
    <div className={styles.projects} ref={containerRef}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/desk-selfie.jpg"}
          fill={true}
          alt="projects-background-image"
        />
      </div>

      <div className={styles.projectsIntroContainer}>
        <div
          className={styles.projectsIntroImage}
          id="introImage"
          ref={introImageRef}
          data-scroll
          data-scroll-speed="0.3"
        >
          <Image
            src={"/images/eating-trophy.jpg"}
            fill={true}
            alt="winning-hackathon"
            priority={true}
          />
        </div>
        <div ref={titleRef} className={styles.projectsIntroTitleContainer}>
          <h1>Projects</h1>
        </div>
      </div>
      <div className={styles.progressBar} ref={progressBarRef}></div>
      <ProjectCards />
    </div>
  );
}
