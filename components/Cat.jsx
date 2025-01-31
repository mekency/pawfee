import React from 'react';
import styles from './Cat.module.css';

export default function Cat({ image, name, description, story }) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.imageContainer}>
        <img src={`/images/${image}`} alt={name} className={styles.image} />
      </div>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Histoire:</strong> {story}</p>
    </div>
  );
}
