"use client";
import { useRef } from "react";
import styles from "./experience.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedElement = ({ children }: { children: React.ReactNode }) => {
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

    textTimeline.fromTo(
      object.current,
      { y: "+10px", filter: "blur(5px)", opacity: 0 },
      { y: "0", filter: "blur(0px)", opacity: 1, ease: "power3.in" }
    );
  });
  return <div ref={object}>{children}</div>;
};

export default function Experience() {
  useGSAP(() => { });

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
              Over the past few years, I've gained valuable experience in both
              industry and academia. Currently, I'm interning at Nextdoor on the
              Notifications team, and in 2024 I worked as a Software Engineer
              Intern at Ford. Before that, I was a Research Assistant at Carnegie
              Mellon University's Institute for Strategy & Technology.
            </p>
          </AnimatedElement>

          <section className={styles.projects}>
            {/* Nextdoor Internship */}
            <AnimatedElement>
              <article className={`${styles.project} ${styles.project1}`}>
                <div>
                  <h3>2025 SUMMER</h3>
                  <h2 className={styles.positionTitle}>
                    Software Engineer Intern: Nextdoor
                  </h2>
                  <p>
                    On the Notifications team, I contributed to backend systems that deliver
                    personalized, reliable experiences to millions of users. I helped improve
                    ranking logic for Local News emails, boosting engagement with a 14.8% lift
                    in click-through rate, and worked on personalized email campaigns that
                    reached over 10M sends during my time as an intern. I also built an internal 
                    React + GraphQL tool that cut ML model debugging time by 97%, enabling the team 
                    to ship notification features faster and with greater confidence.
                  </p>
                  <p>Skills/tools I applied and deepened:</p>
                  <ul className={styles.techStack}>
                    <li>A/B Testing & Experimentation</li>
                    <li>Data Analytics & Performance Metrics</li>
                    <li>Scalable Backend Development</li>
                    <li>React & GraphQL Tooling</li>
                    <li>System Observability & Debugging</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="./images/nextdoor-presentation.jpg"
                    alt="Nextdoor logo"
                    title="nextdoor"
                    className={styles.sideImg}
                  />
                </div>
              </article>
            </AnimatedElement>

            {/* Ford Internship */}
            <AnimatedElement>
              <article className={`${styles.project} ${styles.project2}`}>
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
                    programming to craft a React-based tool for Call Center Agents,
                    replacing an outdated system with a streamlined search
                    experience. Tackling a tricky 30-second timer glitch in a Lean
                    Coffee app was another highlight, where our collaborative
                    approach ensured a flawless user experience. Mentoring new interns
                    and guiding them through a thoughtful onboarding process was also
                    a rewarding part of the summer.
                  </p>
                  <p>Skills/tools I learned and developed:</p>
                  <ul className={styles.techStack}>
                    <li>React</li>
                    <li>Google Cloud Platform (GCP)</li>
                    <li>Tekton CI/CD</li>
                    <li>GitHub Actions</li>
                    <li>MongoDB</li>
                    <li>Jotai</li>
                  </ul>
                </div>
              </article>
            </AnimatedElement>

            {/* Research Assistant */}
            <AnimatedElement>
              <article className={`${styles.project} ${styles.project3}`}>
                <div>
                  <h3>2023 SUMMER</h3>
                  <h2 className={styles.positionTitle}>
                    Research Assistant: CMU Institute for Strategy & Technology
                  </h2>
                  <p>
                    As a Research Assistant to Professor John Chin at Carnegie
                    Mellon's Institute for Strategy & Technology, I dove into the
                    complex world of self-coups and revolutionary events. I cleaned
                    and analyzed historical data, crafted detailed case studies in
                    LaTeX, and contributed to the Historical Dictionary of Modern
                    Self-Coups by creating bibliographic entries. Researching and
                    writing about the Castro brothers' self-coups was a highlight,
                    weaving their story into the broader tapestry of political
                    upheaval.
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
                    alt="CMU IST logo"
                    title="cmu-ist"
                    className={styles.sideImg}
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
