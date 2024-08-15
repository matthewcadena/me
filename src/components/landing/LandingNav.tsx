import styles from './landing.module.css';

export default function LandingNav() {
  return (
    <nav className={styles.header}>
      <p>About</p>
      <p>Work</p>
      <p>Conact</p>
    </nav>
  )
}