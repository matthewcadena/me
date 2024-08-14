import styles from './style.module.css';
import LinkObject from './Link';

export default function Nav() {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Work', href: '/work' },
    { title: 'Projects', href: '/Projects' },
  ]

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            {
              navItems.map((item, index) => {
                return (
                  <LinkObject data={{...item, index}}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}