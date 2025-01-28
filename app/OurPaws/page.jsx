import React from 'react';
import CatCard from '../../components/CatCard';
import styles from './page.module.css';


// modiffication de la page de page.js a pages.jsx 

//modification de nom de la fonction 
export default function Ourpaws() {
  return (
    <div>
      <h1>Bienvenu</h1>
      <p>voici nos chats disponible pour l'adoption.</p>
      <div className={styles.catList}>
        <CatCard
          image="/1.jpg"
          name="Whiskers"
          description="A playful and curious cat."
          story="Whiskers was found wandering the streets and loves to explore."
          
        />
        <CatCard
          image="2.jpg"
          name="Mittens"
          description="A calm and affectionate cat."
          story="Mittens was rescued from a shelter and enjoys cuddling."
        />
        <CatCard
          image="3.jpg"
          name="Shadow"
          description="A shy but loving cat."
          story="Shadow was abandoned and is slowly learning to trust humans."
        />
        <CatCard
          image="/4.jpg"
          name="Tiger"
          description="A brave and adventurous cat."
          story="Tiger was found in a forest and loves climbing trees."
        />
        <CatCard
          image="5.jpg"
          name="Luna"
          description="A gentle and friendly cat."
          story="Luna was born in a foster home and loves playing with toys."
        />
      </div>
    </div>
  );
}