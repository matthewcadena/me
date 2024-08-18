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

    workTl
      .from("#introImage", { height: "200px" })
      // .fromTo(
      //   "#backgroundImage",
      //   { clipPath: `inset(1%)` },
      //   { clipPath: `inset(0%)`, duration: 1 },
      //   0
      // );
  });

  return (
    <div className={styles.work} id="work">
      <div className={styles.backgroundImage}>
        <Image
          id="#backgroundImage"
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
          data-scroll-speed="7"
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
