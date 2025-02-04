import React from 'react';
import styles from './CatDetails.module.css';

export default function CatDetails({ image1, image2, story, description, age, gender, neutered, funFact, vaccines, preferredFood }) {
  return (
    <div className={styles.container}>
      <img src={image1} alt="Cat" className={styles.image} />
      <p className={styles.text}><strong>Story:</strong> {story}</p>
      <img src={image2} alt="Cat" className={styles.image} />
      <p className={styles.text}><strong>Description:</strong> {description}</p>
      <p className={styles.text}><strong>Age:</strong> {age}</p>
      <p className={styles.text}><strong>Gender:</strong> {gender}</p>
      <p className={styles.text}><strong>Neutered/Spayed:</strong> {neutered}</p>
      <p className={styles.text}><strong>Fun Fact:</strong> {funFact}</p>
      <p className={styles.text}><strong>Vaccines Taken:</strong> {vaccines}</p>
      <p className={styles.text}><strong>Preferred Food:</strong> {preferredFood}</p>
    </div>
  );
}