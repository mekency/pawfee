export function validateLogin(formData) {
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

    return [erreur, newState];
}