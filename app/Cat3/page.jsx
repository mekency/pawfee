import React from 'react';
import CatDetails from '../../components/CatDetails';
import styles from './page.module.css';

export default function Cat3() {
  return (
    <div className={styles.container}>
      <h1>Shadow</h1>
      <CatDetails
        image1="/cat31.jpg"
        image2="/cat32.jpg"
        story="Shadow was found in an abandoned building and loves to play hide and seek. He was very shy at first but has become more playful and affectionate over time. Shadow enjoys exploring new places and is always curious about his surroundings."
        description="A mysterious and playful cat who loves to hide and seek. Shadow is very intelligent and enjoys solving puzzles."
        age="3 years"
        gender="Male"
        neutered="Yes"
        funFact="Shadow can open doors by himself!"
        vaccines="Rabies, Feline Distemper, Feline Leukemia"
        preferredFood="Chicken, Fish"
      />
    </div>
  );
}