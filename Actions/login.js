"use server"

import { redirect } from "next/navigation";
import { validateLogin } from "@/validation/login"

export async function loginServeur(formData) {
    let [erreur, newState] = validateLogin(formData);

    if(erreur) {
        return [erreur, newState];
    }

    const courriel = formData.get('courriel');
    if(courriel !== 'mouloud12@collegelacite.ca') {
        erreur = true;
        newState.courriel.erreur = 'Aucun compte avec cette adresse courriel.';
        return [erreur, newState];
    }

    redirect('/');
}  