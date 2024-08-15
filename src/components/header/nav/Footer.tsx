import styles from './nav.module.css'

export default function index() {
  return (
    <div className={styles.footer}>
        <a>Resume</a>
        <a>LinkedIn</a>
        <a>Email</a>
        <a>Music</a>
    </div>
  )
}