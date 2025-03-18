"use client";

import { useActionState } from 'react';
import { useState } from 'react'; // Import useState
import { validateLogin } from '@/validation/login';
import { loginServeur } from '@/Actions/login';
import styles from './Contact.module.css';

export default function Contact() {
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    /**
     * Fonction de validation du formulaire
     * @param {FormDsata} formData - Données du formulaire soumises
     */
    const contact = async (previousState, formData) => {
        let [erreur, newState] = validateLogin(formData) || [null, {}];

        if (!erreur) {
            [erreur, newState] = await loginServeur(formData) || [null, {}];
        }

        // S'assurer que newState est toujours un objet
        newState = newState || {};

        // Mise à jour des valeurs du formulaire en cas d'erreur
        if (erreur) {
            newState.prenom = { valeur: formData.get('prenom'), erreur: newState.prenom?.erreur || null };
            newState.nom = { valeur: formData.get('nom'), erreur: newState.nom?.erreur || null };
            newState.telephone = { valeur: formData.get('telephone'), erreur: newState.telephone?.erreur || null };
            newState.courriel = { valeur: formData.get('courriel'), erreur: newState.courriel?.erreur || null };
            newState.municipalite = { valeur: formData.get('municipalite'), erreur: newState.municipalite?.erreur || null };
            newState.message = { valeur: formData.get('message'), erreur: newState.message?.erreur || null };
        } else {
            setSuccessMessage('Votre message a été envoyé avec succès.'); // Set success message
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
            
            {successMessage && <div className={styles.success}>{successMessage}</div>} {/* Display success message */}

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
                    <textarea type="text" name="message" defaultValue={formState.message.valeur} />
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}
