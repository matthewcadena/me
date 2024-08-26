"use client";
import { useRef } from "react";
import styles from "./experience.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtom } from "jotai";
import { isMobileViewAtom } from "../../../state/atoms";

const AnimatedElement = ({ children }: { children: React.ReactNode }) => {
  const [isMobileView] = useAtom(isMobileViewAtom);
  const object = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: object.current,
        start: "top top",
        end: "+=100px",
        scrub: 1,
      },
    });

    if (!isMobileView) {
      textTimeline.fromTo(
        object.current,
        { y: "+10px", filter: "blur(5px)", opacity: 0 },
        { y: "0", filter: "blur(0px)", opacity: 1, ease: "power3.in" }
      );
    }
  });
  return <div ref={object}>{children}</div>;
};

export default function Experience() {
  useGSAP(() => {});

  return (
    <>
      <section className={styles.projectsSection} id="projects">
        <div className={styles.container}>
          <AnimatedElement>
            <p className={styles.subtitle}>Summers of Growth</p>
            <h2 className={styles.title}>
              From Academic Research to Industry Innovation
            </h2>
            <p className={styles.info}>
              Over the past two summers, I've gained valuable experience in both
              industry and academia. In 2024, I worked as a Software Engineering
              Intern at Ford in Dearborn, MI, contributing to products in the
              Enterprise Technology division. The summer before, I was a
              Research Assistant at the Institute for Politics and Strategy at
              Carnegie Mellon University, where I focused on historical research
              related to Coup D'etats.
            </p>
          </AnimatedElement>
          <section className={styles.projects}>
            <AnimatedElement>
              <article className={`${styles.project} ${styles.project1}`}>
                <img
                  src="./images/mach-e.jpg"
                  alt="Me with fellow interns at Ford"
                  title="me-at-ford"
                  className={styles.sideImg}
                />
                <div>
                  <h3>2024 SUMMER</h3>
                  <h2 className={styles.positionTitle}>
                    Software Engineer Intern: Ford Motor Company
                  </h2>
                  <p>
                    At Ford, I embraced Test-Driven Development (TDD) and pair
                    programming to craft a dynamic React-based tool for Call
                    Center Agents, replacing an outdated system with a
                    streamlined search experience. Tackling a tricky 30-second
                    timer glitch in a Lean Coffee app was another highlight,
                    where our collaborative approach ensured a flawless user
                    experience. Mentoring new interns was a rewarding part of
                    the summer, where I guided them through a thoughtfully
                    crafted onboarding process, turning their first days into a
                    smooth and productive start.
                  </p>
                  <p>Skills/tools I learned and developed:</p>
                  <ul className={styles.techStack}>
                    <li>React</li>
                    <li>Google Cloud Platform (GCP)</li>
                    <li>TekTton CI/CD</li>
                    <li>GitHub Actions</li>
                    <li>MongoDB</li>
                    <li>Jotai</li>
                  </ul>
                </div>
              </article>
            </AnimatedElement>
            <AnimatedElement>
              <article className={`${styles.project} ${styles.project2}`}>
                <div>
                  <h3>2023 SUMMER</h3>
                  <h2 className={styles.positionTitle}>
                    Research Assistant: CMU Institute for Strategy & Technology{" "}
                  </h2>
                  <p>
                    As a Research Assistant to Professor John Chin at Carnegie
                    Mellon'sInstitute for Strategy & Technology, I dove into
                    the complex world of self-coups and revolutionary events. I
                    cleaned and analyzed historical data, crafted detailed case
                    studies in LaTeX, and contributed to the Historical
                    Dictionary of Modern Self-Coups by creating bibliographic
                    entries. A highlight of my work was researching and writing
                    about the Castro brothers' self-coups, weaving their story
                    into the broader tapestry of political upheaval.
                  </p>
                  <p>Skills/tools I learned and developed:</p>
                  <ul className={styles.techStack}>
                    <li>LaTeX</li>
                    <li>Historical Research</li>
                    <li>Professional Writing</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="./images/cmuist.png"
                    alt="cmu ist logo"
                    title="cmu-ist"
                    className={styles.sideImg}
                    id="cmuIst"
                  />
                </div>
              </article>
            </AnimatedElement>
          </section>
        </div>
      </section>
    </>
  );
}
