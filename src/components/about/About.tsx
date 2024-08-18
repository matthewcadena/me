import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./about.module.css";

const AnimatedFromLeft = ({ children }: { children: React.ReactNode }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "+=300px",
        scrub: 1,
      },
    });

    textTimeline.fromTo(
      text.current,
      { opacity: 0, left: "-200px" },
      { opacity: 1, left: "0", ease: "power3.Out" }
    );
  }, []);
  return <p ref={text}>{children}</p>;
};

export default function About() {
  const about = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: "top top",
        end: "+=500px",
        scrub: 1,
        pin: true,
      },
    });

    aboutTl.fromTo("#progress", { width: " 0%" }, { width: "70%" });

    aboutTl.fromTo;
  });

  const phrases = [
    "I'm a junior at Carnegie Mellon,",
    "studying Information Systems.",
    "I play on the men's varsity soccer team,",
    "and I'm passionate about software.",
    "I believe in writing clean code",
    "that makes a difference.",
  ];

  return (
    <div className={styles.about} ref={about} id="#about">
      <h1>About Me</h1>
      {phrases.map((phrase, index) => {
        return <AnimatedFromLeft key={index}>{phrase}</AnimatedFromLeft>;
      })}
      <div className={styles.progressBar} id="progress"></div>
    </div>
  );
}
