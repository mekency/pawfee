import React from 'react';
import CatDetails from '../../components/CatDetails';
import styles from './page.module.css';


/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Pawfee | Whiskers",
  description: "A playful and curious cat who loves to explore. Whiskers is very intelligent and enjoys solving puzzles.",
};

export default function Cat1() {
  return (
    <div className={styles.container}>
      <h1>Whiskers</h1>
      <CatDetails
        image1="/cat11.jpg"
        image2="/cat12.jpg"
        story="Whiskers was found wandering the streets and loves to explore. He is very adventurous and enjoys climbing trees. Whiskers is very curious and loves to investigate new things."
        description="A playful and curious cat who loves to explore. Whiskers is very intelligent and enjoys solving puzzles."
        age="2 years"
        gender="Male"
        neutered="Yes"
        funFact="Whiskers can climb to the top of a tree in less than 10 seconds!"
        vaccines="Rabies, Feline Distemper, Feline Herpesvirus"
        preferredFood="Tuna, Chicken"
      />
    </div>
  );
}