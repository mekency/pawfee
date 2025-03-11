import React from 'react';
import CatDetails from '../../components/CatDetails';
import styles from './page.module.css';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Pawfee | Tiger",
  description: "A playful and curious cat who loves to explore. Whiskers is very intelligent and enjoys solving puzzles.",
};

export default function Cat4() {
  return (
    <div className={styles.container}>
      <h1>Simba</h1>
      <CatDetails
        image1="/cat41.jpg"
        image2="/cat42.jpg"
        story="Simba was rescued from a busy street and enjoys lounging in the sun. He has a calm demeanor and loves to be petted. Simba is very friendly and gets along well with other cats. He enjoys spending his days relaxing and watching the world go by."
        description="A relaxed and friendly cat who loves to lounge in the sun. Simba is very affectionate and enjoys being around people."
        age="4 years"
        gender="Male"
        neutered="Yes"
        funFact="Simba can sleep for up to 16 hours a day!"
        vaccines="Rabies, Feline Distemper, Feline Herpesvirus"
        preferredFood="Beef, Lamb"
      />
    </div>
  );
}