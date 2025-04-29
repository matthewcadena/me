import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.body}>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2Container}>
      <h1 className={styles.section2Heading}>Matt Cadena</h1>
      <p className={styles.copyrightText}>© copyright 2025</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navColumn}>
        <h3 className={styles.navHeading}>Navigation</h3>
        <a href="/" className={styles.navLink}>
          Home
        </a>
        <a href="#about" className={styles.navLink}>
          About
        </a>
        <a href="#work" className={styles.navLink}>
          Work
        </a>
        <a href="#my-projects" className={styles.navLink}>
          Projects
        </a>
      </div>

      <div className={styles.navColumn}>
        <h3 className={styles.navHeading}>More</h3>
        <a
          className={styles.navLink}
          href="/files/matt-cadena-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className={styles.navLink}
          href="https://github.com/matthewcadena"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a className={styles.navLink}
          href="https://www.linkedin.com/in/matt-cadena/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};
