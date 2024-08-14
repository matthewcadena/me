import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
      fill={true}
      src="/images/interns.jpg"
      alt="image"
      />

      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>Matt Cadena —</p>
          <p>Matt Cadena —</p>
        </div>
      </div>
    </main>
  );
}
