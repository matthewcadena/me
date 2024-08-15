import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './about.module.css';

const phrases = [
  "I'm a junior at Carnegie Mellon,",
  "studying Information Systems.",
  "I play on the men's varsity soccer team,",
  "and I'm passionate about software.",
  "I believe in writing clean code",
  "that can make a difference."
];



interface Props {
  children?: React.ReactNode
}

export default function About() {

  return (
    <>
    
    <div className={styles.about} >
    <h1>About Me</h1>
        {
          phrases.map( (phrase, index) => {
              return <AnimatedText key={index}>{phrase}</AnimatedText>
          })
        }
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

function AnimatedText({ children }: Props) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}