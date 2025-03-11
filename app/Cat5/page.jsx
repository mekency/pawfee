import React from 'react';
import CatDetails from '../../components/CatDetails';
import styles from './page.module.css';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Pawfee | Luna ",
  description: "A playful and curious cat who loves to explore. Whiskers is very intelligent and enjoys solving puzzles.",
};

export default function Cat5() {
  return (
    <div className={styles.container}>
      <h1>Luna</h1>
      <CatDetails
        image1="/cat51.jpg"
        image2="/cat52.jpg"
        story="Luna was adopted from a shelter and loves to chase laser pointers. She is very energetic and enjoys playing with toys. Luna is very affectionate and loves to cuddle. She has a playful personality and is always looking for new adventures."
        description="An energetic and playful cat who loves to chase laser pointers. Luna is very affectionate and enjoys being around people."
        age="2 years"
        gender="Female"
        neutered="Yes"
        funFact="Luna can jump up to 6 feet high!"
        vaccines="Rabies, Feline Distemper, Feline Herpesvirus"
        preferredFood="Salmon, Tuna"
      />
    </div>
  );
}