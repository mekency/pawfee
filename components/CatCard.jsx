import React from 'react';
import styles from './CatCard.module.css';

export default function CatCard({ image, name, description, story }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{story}</p>
      <button className={styles.detailButton}>+</button>
    </div>
  );
}  