"use client";
import { useRef } from "react";
import styles from "./experience.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  let containerRef = useRef(null);

  return (
    <div className={styles.experience}>
      <div className={styles.introPanel}>
        <p>
          Over the past two summers, I've gained valuable experience in both
          industry and academia. In 2024, I worked as a Software Engineering
          Intern at Ford in Dearborn, MI, contributing to products in the
          Enterprise Technology division. The summer before, I was a Research
          Assistant at the Institute for Politics and Strategy at Carnegie
          Mellon University, where I focused on historical research related to
          Coup D'etats.
        </p>
      </div>
      <div className={styles.experiencePanel1}>
        <h1>2024</h1>
      </div>
    </div>
  );
}
