export function validateLogin(formData) {
    const nom = formData.get('nom');
    const prenom = formData.get('prenom');
    const telephone = formData.get('telephone');
    const courriel = formData.get('courriel');
    const municipalite = formData.get('municipalite');
    const message = formData.get('message');
  
    // Affichage des résultats dans la console
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Téléphone:', telephone);
    console.log('Courriel:', courriel);
    console.log('Municipalité:', municipalite);
    console.log('Message:', message);
  
    // Initialisation de l'état du formulaire
    let newState = {
      nom: { valeur: nom, erreur: null },
      prenom: { valeur: prenom, erreur: null },
      telephone: { valeur: telephone, erreur: null },
      courriel: { valeur: courriel, erreur: null },
      municipalite: { valeur: municipalite, erreur: null },
      message: { valeur: message, erreur: null }
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
  
  export async function loginServeur(formData) {
    // Simulation d'envoi au serveur
    console.log('Envoi au serveur...');
  
    // Pour le moment, retourne un résultat par défaut
    return [null, {}];
  }
  