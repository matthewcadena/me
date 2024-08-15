import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './about.module.css';

const AnimatedText = ({children}: {children: React.ReactNode}) => {
  const text = useRef(null);
  
  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "+=400px",
        scrub: 1,
        markers: true,
      },
    });

    timeline.fromTo(
      text.current,
      { opacity: 0, left: "-200px" },
      { opacity: 1, left: "0", ease: "power3.Out" }
    );
    
   }, []);


    return <p ref={text}>{children}</p>
}

export default function About() {

  const phrases = [
    "I'm a junior at Carnegie Mellon,",
    "studying Information Systems.",
    "I play on the men's varsity soccer team,",
    "and I'm passionate about software.",
    "I believe in writing clean code",
    "that can make a difference."
  ];

  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      {phrases.map((phrase, index) => {
         return <AnimatedText key={index}>{phrase}</AnimatedText>;
        
      })}
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}
