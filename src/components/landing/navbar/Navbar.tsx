import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  
  return (
    <div className={styles.container}>
      <a href="#about" className={styles.link}>About</a>
      <a href="#work" className={styles.link}>Work</a>
      <a href="#projects" className={styles.link}>Projects</a>
    </div>
  )
}
