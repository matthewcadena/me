"use client";
import { projects } from "./data";
import { useRef } from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import { useScroll } from "framer-motion";

export default function ProjectCards() {
  let container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  

  return (<div className={styles.projectsContentMain} ref={container}>
       {
        projects.map( (project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index * .25,1]} targetScale={targetScale} />
        })
      }
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>);
};
