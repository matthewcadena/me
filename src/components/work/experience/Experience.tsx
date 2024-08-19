"use client";
import { useRef } from "react";
import styles from "./experience.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  let intro = useRef(null);
  let ford = useRef(null);
  let cmu = useRef(null);

  let sections = [intro, ford, cmu];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      },
    });
  });

  return (
    <div className={styles.experience}>
      <section className={styles.introPanel} ref={intro}>
        <p>
          Over the past two summers, I've gained valuable experience in both
          industry and academia. In 2024, I worked as a Software Engineering
          Intern at Ford in Dearborn, MI, contributing to products in the
          Enterprise Technology division. The summer before, I was a Research
          Assistant at the Institute for Politics and Strategy at Carnegie
          Mellon University, where I focused on historical research related to
          Coup D'etats.
        </p>
      </section>
      <section className={styles.experiencePanel1} ref={ford}>
        <h1>2024</h1>
      </section>
      <section className={styles.experiencePanel2} ref={cmu}>
        <h1>2023</h1>
      </section>
    </div>
  );
}
