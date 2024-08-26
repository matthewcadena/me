import styles from "./nav.module.css";

export default function index() {
  return (
    <div className={styles.footer}>
      <a
          className={styles.a}
          href="/files/matt-cadena-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className={styles.a}
          href="https://github.com/matthewcadena"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a className={styles.a}
          href="https://www.linkedin.com/in/matt-cadena/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
    </div>
  );
}
