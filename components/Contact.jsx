"use client";

import { useActionState } from 'react';
import styles from './Contact.module.css';
import contact from '@/app/Contact/page';

export default function Contact() {
    /**
     * Fonction de validation du formulaire
     * @param {FormData} formData - Données du formulaire soumises
     */
    const contact = (previousState, formData) => {
        // Récupération des valeurs du formulaire
        const nom = formData.get('nom');
        const prenom = formData.get('prenom');
        const telephone = formData.get('telephone');
        const courriel = formData.get('courriel');
        const municipalite = formData.get('municipalite');
        const message = formData.get('message');

        // Initialisation de l'état du formulaire avec erreurs nulles
        let newState = {
            nom: { valeur: '', erreur: null },
            prenom: { valeur: '', erreur: null },
            telephone: { valeur: '', erreur: null },
            courriel: { valeur: '', erreur: null },
            municipalite: { valeur: '', erreur: null },
            message: { valeur: '', erreur: null }
        };

        let erreur = false;
        
        // Validation des champs
        if (!prenom) {
            erreur = true;
            newState.prenom.erreur = 'Veuillez entrer votre prénom';
        }
        if (!nom) {
            erreur = true;
            newState.nom.erreur = 'Veuillez entrer votre nom';
        }
        if (!telephone) {
            erreur = true;
            newState.telephone.erreur = 'Veuillez entrer un numéro de téléphone valide.';
        } else if (!telephone.match(/^\d{10}$/)) {
            erreur = true;
            newState.telephone.erreur = 'Veuillez entrer un numéro de téléphone de 10 chiffres.';
        }
        if (!courriel) {
            erreur = true;
            newState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
        } else if (!courriel.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            erreur = true;
            newState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.';
        }
        if (!municipalite) {
            erreur = true;
            newState.municipalite.erreur = 'Veuillez entrer votre municipalité';
        }
        if (!message) {
            erreur = true;
            newState.message.erreur = 'Veuillez entrer un message';
        }

        // Mise à jour des valeurs du formulaire en cas d'erreur
        if (erreur) {
            newState.prenom.valeur = prenom;
            newState.nom.valeur = nom;
            newState.telephone.valeur = telephone;
            newState.courriel.valeur = courriel;
            newState.municipalite.valeur = municipalite;
            newState.message.valeur = message;
        }

        return newState;
    };

    // Initialisation de l'état du formulaire
    const [formState, formAction] = useActionState(contact, {
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
            
            {/* Formulaire de contact */}
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
                    <textarea type= "text" name="message" defaultValue={formState.message.valeur} />
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}
