import React from 'react';
import CatCard from '../../components/CatCard';
import styles from './page.module.css';

export default function OurPawsPage() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our Paws Page</h1>
      <p>Meet our furry residents who are looking for their forever homes.</p>
      <div className={styles.catList}>
        <CatCard
          image="1.jpg"
          name="Whiskers"
          link="/Cat1"
        />
        <CatCard
          image="2.jpg"
          name="Mittens"
          link="/Cat2"
        />
        <CatCard
          image="3.jpg"
          name="Shadow"
          link="/Cat3"
        />
        <CatCard
          image="4.jpg"
          name="Tiger"
          link="/Cat4"
        />
        <CatCard
          image="5.jpg"
          name="Luna"
          link="/Cat5"
        />
      </div>
    </div>
  );
}