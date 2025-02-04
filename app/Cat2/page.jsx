import React from 'react';
import CatDetails from '../../components/CatDetails';
import styles from './page.module.css';

export default function Cat2() {
  return (
    <div className={styles.container}>
      <h1>Mittens</h1>
      <CatDetails
        image1="/cat21.jpg"
        image2="/cat22.jpg"
        story="Mittens was rescued from a shelter and enjoys cuddling. She is very affectionate and loves to be petted. Mittens is very calm and enjoys relaxing in a cozy spot."
        description="A calm and affectionate cat who loves to cuddle. Mittens is very friendly and enjoys being around people."
        age="4 years"
        gender="Female"
        neutered="Yes"
        funFact="Mittens can sleep for up to 18 hours a day!"
        vaccines="Rabies, Feline Distemper, Feline Herpesvirus"
        preferredFood="Salmon, Turkey"
      />
    </div>
  );
}