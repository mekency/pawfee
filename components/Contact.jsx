"use client";

import { useActionState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const handleSubmit = (previousState, formData) => {
        const fields = ['prenom', 'nom', 'telephone', 'courriel', 'municipalite', 'message'];
        let newState = {};
        let erreur = false;

        fields.forEach(field => {
            const value = formData.get(field);
            newState[field] = { valeur: value || '', erreur: null };
        });

        if (!newState.prenom.valeur) newState.prenom.erreur = 'Veuillez entrer votre prénom.';
        if (!newState.nom.valeur) newState.nom.erreur = 'Veuillez entrer votre nom.';
        if (!newState.telephone.valeur.match(/^\d{10}$/)) newState.telephone.erreur = 'Veuillez entrer un numéro de téléphone valide (10 chiffres).';
        if (!newState.courriel.valeur.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.';
        if (!newState.municipalite.valeur) newState.municipalite.erreur = 'Veuillez entrer votre municipalité.';
        if (!newState.message.valeur) newState.message.erreur = 'Veuillez entrer un message.';

        erreur = Object.values(newState).some(field => field.erreur);

        return erreur ? newState : previousState;
    };

    const [formState, formAction] = useActionState(handleSubmit, {
        prenom: { valeur: '', erreur: null },
        nom: { valeur: '', erreur: null },
        telephone: { valeur: '', erreur: null },
        courriel: { valeur: '', erreur: null },
        municipalite: { valeur: '', erreur: null },
        message: { valeur: '', erreur: null }
    });

    return (
        <>
            <p><strong>Pour toute demande d’adoption ou d’information supplémentaire sur les animaux,</strong> veuillez envoyer un message au refuge <strong>directement sur la fiche de l’animal</strong> qui vous intéresse via le formulaire qui s’y trouve. Merci!</p>
            <p>La plateforme affiche des centaines d’animaux à l’adoption dans différents refuges à travers la province de Québec, nous ne sommes donc pas en mesure de donner de l’information supplémentaire sur ces animaux.</p>
            <p>Soyez toutefois assuré que nous traitons tous les courriels le plus rapidement possible.</p>
            
            <form action={formAction} className={styles.form} noValidate>
                <div className={styles.row}>
                    <label>
                        Prénom:
                        <input type="text" name="prenom" defaultValue={formState.prenom.valeur} />
                        <div className={styles.erreur}>{formState.prenom.erreur}</div>
                    </label>
                    <label>
                        Nom:
                        <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                        <div className={styles.erreur}>{formState.nom.erreur}</div>
                    </label>
                </div>
                <div className={styles.row}>
                    <label>
                        Téléphone:
                        <input type="tel" name="telephone" defaultValue={formState.telephone.valeur} />
                        <div className={styles.erreur}>{formState.telephone.erreur}</div>
                    </label>
                    <label>
                        Courriel:
                        <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
                        <div className={styles.erreur}>{formState.courriel.erreur}</div>
                    </label>
                </div>
                <label>
                    Municipalité:
                    <input type="text" name="municipalite" defaultValue={formState.municipalite.valeur} />
                    <div className={styles.erreur}>{formState.municipalite.erreur}</div>
                </label>
                <label>
                    Message:
                    <textarea name="message" defaultValue={formState.message.valeur} />
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}
