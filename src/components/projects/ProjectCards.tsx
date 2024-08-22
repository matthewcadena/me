"use client";
import { projects } from "./data";
import { useRef } from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

export default function ProjectCards() {
  return (<div className={styles.projectsContentMain}>
       {
        projects.map( (project, index) => {
          return <Card key={index} i={index} {...project}/>
        })
      }
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>);
};
