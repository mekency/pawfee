import React from 'react';
import Link from 'next/link';
import styles from './CatCard.module.css';

export default function CatCard({ image, name, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <Link href={link} legacyBehavior>
        <a className={styles.plusSign}>+</a>
      </Link>
    </div>
  );
}