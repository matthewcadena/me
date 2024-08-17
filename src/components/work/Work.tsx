import styles from './work.module.css';
import Image from 'next/image';

export default function Work() {
  return (
    < div className={styles.work}>
      <div className={styles.backgroundImage}>
        <Image
          src={"/images/interns.jpg"}
          fill={true}
          alt="work-background-image"
        />
      </div>
    </div>
  )
}