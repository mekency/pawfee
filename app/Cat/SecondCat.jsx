import React from 'react';
import Cat from '../../components/Cat';
import styles from './SecondCat.module.css';

export default function SecondCat() {
  return (
    <div className={styles.container}>
      <h1>Mittens</h1>
      <img src="/images/2.jpg" alt="Mittens" className={styles.image} />
      <p><strong>Description:</strong> Un chat calme et affectueux.</p>
      <p><strong>Histoire:</strong> Mittens a été sauvé d’un refuge et adore les câlins.</p>
    </div>
  );
}