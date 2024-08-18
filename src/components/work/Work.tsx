"use client";
import styles from "./work.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Work() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const workTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top top",
        end: "+=500px",
        scrub: 1,
      },
    });

    workTl.from("#introImage", { height: "250px" });
  });

  return (
    <div className={styles.work} id="work">
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/interns.jpg"}
          fill={true}
          alt="work-background-image"
        />
      </div>

      <div className={styles.workIntroContainer}>
        <div
          className={styles.workIntroImage}
          id="introImage"
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
        <h1 data-scroll data-scroll-speed="0.7">
          Work Experience
        </h1>
      </div>
    </div>
  );
}
