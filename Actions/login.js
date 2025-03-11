"use server"

import { validateLogin } from "@/validation/login"

export async function loginServeur(formData) {
    let [erreur, newState] = validateLogin(formData);

    if(erreur) {
        return [erreur, newState];
    }

    // Afficher les informations du formulaire dans la console du serveur
    console.log('Données du formulaire:', Object.fromEntries(formData.entries()));

    return [erreur, newState];
}