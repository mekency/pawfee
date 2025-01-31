import React from 'react';
import Cat from '../../components/Cat';
import styles from './FirstCat.module.css';

export default function FirstCat() {
  return (
    <div className={styles.container}>
      <h1>Whiskers</h1>
      <img src="/images/1.jpg" alt="Whiskers" className={styles.image} />
      <p><strong>Description:</strong> Un chat joueur et curieux.</p>
      <p><strong>Histoire:</strong> Whiskers a été trouvé errant dans la rue et adore explorer.</p>
    </div>
  );
}
