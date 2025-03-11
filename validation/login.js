export function validateLogin(formData) {
    const nom = formData.get('nom');
    const prenom = formData.get('prenom');
    const telephone = formData.get('telephone');
    const courriel = formData.get('courriel');
    const municipalite = formData.get('municipalite');
    const message = formData.get('message');

    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Téléphone:', telephone);
    console.log('Courriel:', courriel);
    console.log('Municipalité:', municipalite);
    console.log('Message:', message);

    return [null, {}]; // Ensure it returns an array
}

export async function loginServeur(formData) {
    // ...existing code...
    return [null, {}]; // Ensure it returns an array
}